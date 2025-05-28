"use server"

import { sendContactEmail } from "@/lib/email-service"
import { checkSpam, checkRateLimit } from "@/lib/spam-prevention"
import { headers } from "next/headers"

interface ServiceFormData {
  nombre: string
  email: string
  telefono?: string
  fecha: string
  ubicacion?: string
  mensaje?: string
  servicio: string
  pageUrl: string
}

export async function submitServiceForm(formData: FormData) {
  try {
    // Get client info for spam prevention
    const headersList = await headers()
    const userAgent = headersList.get("user-agent") || ""
    const forwarded = headersList.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : headersList.get("x-real-ip") || "unknown"

    // Extract form data
    const data: ServiceFormData = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      telefono: formData.get("telefono") as string,
      fecha: formData.get("fecha") as string,
      ubicacion: formData.get("ubicacion") as string,
      mensaje: formData.get("mensaje") as string,
      servicio: formData.get("servicio") as string,
      pageUrl: formData.get("pageUrl") as string,
    }

    // Validate required fields
    if (!data.nombre || !data.email || !data.fecha) {
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
    if (!checkRateLimit(`${ip}-service`, 3, 300000)) {
      // 3 requests per 5 minutes
      return {
        success: false,
        message: "Demasiadas solicitudes. Por favor espera unos minutos antes de intentar de nuevo.",
      }
    }

    // Check for spam (only if message is provided)
    if (data.mensaje) {
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
    }

    // Send emails
    await sendContactEmail({
      ...data,
      formType: "service",
    })

    return {
      success: true,
      message:
        "¡Reserva enviada exitosamente! Te contactaré en menos de 24 horas para confirmar los detalles. También recibirás un email de confirmación.",
    }
  } catch (error) {
    console.error("Error submitting service form:", error)
    return {
      success: false,
      message: "Hubo un error al enviar la reserva. Por favor intenta de nuevo o contacta directamente por teléfono.",
    }
  }
}
