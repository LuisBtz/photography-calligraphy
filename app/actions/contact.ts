"use server"

import { sendContactEmail } from "@/lib/email-service"
import { checkSpam, checkRateLimit } from "@/lib/spam-prevention"
import { headers } from "next/headers"

interface ContactFormData {
  nombre: string
  email: string
  telefono?: string
  servicio: string
  fecha?: string
  presupuesto?: string
  ubicacion?: string
  mensaje: string
  referencia?: string
  pageUrl: string
}

export async function submitContactForm(formData: FormData) {
  try {
    // Get client info for spam prevention
    const headersList = await headers()
    const userAgent = headersList.get("user-agent") || ""
    const forwarded = headersList.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : headersList.get("x-real-ip") || "unknown"

    // Extract form data
    const data: ContactFormData = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
      servicio: formData.get("servicio") as string,
      fecha: formData.get("fecha") as string,
      presupuesto: formData.get("presupuesto") as string,
      ubicacion: formData.get("ubicacion") as string,
      mensaje: formData.get("mensaje") as string,
      referencia: formData.get("referencia") as string,
      pageUrl: formData.get("pageUrl") as string,
    }

    // Validate required fields
    if (!data.nombre || !data.email || !data.servicio || !data.mensaje) {
      return {
        success: false,
        message: "Por favor completa todos los campos requeridos.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Por favor ingresa un email válido.",
      }
    }

    // Check rate limiting
    if (!checkRateLimit(`${ip}-contact`, 3, 300000)) {
      // 3 requests per 5 minutes
      return {
        success: false,
        message: "Demasiadas solicitudes. Por favor espera unos minutos antes de intentar de nuevo.",
      }
    }

    // Check for spam
    const spamCheck = checkSpam({
      email: data.email,
      message: data.mensaje,
      ip,
      userAgent,
    })

    if (spamCheck.isSpam) {
      console.log(`Spam detected: ${spamCheck.reason}`, { data, ip, userAgent })
      return {
        success: false,
        message: "Tu mensaje no pudo ser enviado. Por favor contacta directamente por teléfono.",
      }
    }

    // Send emails
    await sendContactEmail({
      ...data,
      formType: "contact",
    })

    return {
      success: true,
      message:
        "¡Mensaje enviado exitosamente! Te contactaré en menos de 24 horas. También recibirás un email de confirmación.",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "Hubo un error al enviar el mensaje. Por favor intenta de nuevo o contacta directamente por teléfono.",
    }
  }
}
