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
    console.log("Contact form submission started")

    // Get client info for spam prevention
    const headersList = await headers()
    const userAgent = headersList.get("user-agent") || ""
    const forwarded = headersList.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : headersList.get("x-real-ip") || "unknown"

    console.log("Client info:", { ip, userAgent: userAgent.substring(0, 50) })

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

    console.log("Form data extracted:", { 
      nombre: data.nombre, 
      email: data.email, 
      servicio: data.servicio,
      messageLength: data.mensaje?.length 
    })

    // Validate required fields
    if (!data.nombre || !data.email || !data.servicio || !data.mensaje) {
      console.log("Missing required fields")
      return {
        success: false,
        message: "Por favor completa todos los campos requeridos.",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      console.log("Invalid email format:", data.email)
      return {
        success: false,
        message: "Por favor ingresa un email válido.",
      }
    }

    // Check rate limiting (more lenient)
    if (!checkRateLimit(`${ip}-contact`, 5, 300000)) {
      // 5 requests per 5 minutes
      console.log("Rate limit exceeded for IP:", ip)
      return {
        success: false,
        message: "Demasiadas solicitudes. Por favor espera unos minutos antes de intentar de nuevo.",
      }
    }

    // Check for spam (more lenient)
    const spamCheck = checkSpam({
      email: data.email,
      message: data.mensaje,
      ip,
      userAgent,
    })

    if (spamCheck.isSpam) {
      console.log(`Spam detected: ${spamCheck.reason}`, { data: { nombre: data.nombre, email: data.email }, ip })
      return {
        success: false,
        message: "Tu mensaje no pudo ser enviado. Por favor contacta directamente por teléfono.",
      }
    }

    console.log("All validations passed, sending emails")

    // Send emails
    await sendContactEmail({
      ...data,
      formType: "contact",
    })

    console.log("Emails sent successfully")

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
