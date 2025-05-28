"use server"

import { sendContactEmail } from "@/lib/email-service"
import { checkSpam, checkRateLimit } from "@/lib/spam-prevention"
import { headers } from "next/headers"

interface QuoteFormData {
  nombre: string
  email: string
  servicio: string
  fecha: string
  descripcion: string
  pageUrl: string
}

export async function submitQuoteForm(formData: FormData) {
  try {
    // Get client info for spam prevention
    const headersList = await headers()
    const userAgent = headersList.get("user-agent") || ""
    const forwarded = headersList.get("x-forwarded-for")
    const ip = forwarded ? forwarded.split(",")[0] : headersList.get("x-real-ip") || "unknown"

    // Extract form data
    const data: QuoteFormData = {
      nombre: formData.get("nombre") as string,
      email: formData.get("email") as string,
      servicio: formData.get("servicio") as string,
      fecha: formData.get("fecha") as string,
      descripcion: formData.get("descripcion") as string,
      pageUrl: formData.get("pageUrl") as string,
    }

    // Validate required fields
    if (!data.nombre || !data.email || !data.servicio || !data.fecha || !data.descripcion) {
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
    if (!checkRateLimit(`${ip}-quote`, 3, 300000)) {
      // 3 requests per 5 minutes
      return {
        success: false,
        message: "Demasiadas solicitudes. Por favor espera unos minutos antes de intentar de nuevo.",
      }
    }

    // Check for spam
    const spamCheck = checkSpam({
      email: data.email,
      message: data.descripcion,
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
      nombre: data.nombre,
      email: data.email,
      servicio: data.servicio,
      fecha: data.fecha,
      mensaje: data.descripcion,
      pageUrl: data.pageUrl,
      formType: "quote",
    })

    return {
      success: true,
      message:
        "¡Cotización solicitada exitosamente! Te contactaré en menos de 24 horas con una propuesta personalizada. También recibirás un email de confirmación.",
    }
  } catch (error) {
    console.error("Error submitting quote form:", error)
    return {
      success: false,
      message: "Hubo un error al enviar la solicitud. Por favor intenta de nuevo o contacta directamente por teléfono.",
    }
  }
}
