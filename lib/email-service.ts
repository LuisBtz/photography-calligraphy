import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailData {
  nombre: string
  email: string
  telefono?: string
  servicio?: string
  fecha?: string
  presupuesto?: string
  ubicacion?: string
  descripcion?: string
  mensaje?: string
  referencia?: string
  pageUrl: string
  formType: "contact" | "quote" | "service"
}

export async function sendContactEmail(data: EmailData) {
  try {
    // Send notification email to you
    const notificationResult = await resend.emails.send({
      from: "Formulario Web <onboarding@resend.dev>", // Using Resend's default domain for now
      to: ["luisbttf@gmail.com"],
      subject: `Nueva consulta - ${data.formType === "contact" ? "Contacto" : data.formType === "quote" ? "Cotización" : "Servicio"}`,
      html: generateNotificationEmail(data),
    })

    // Send confirmation email to client
    const confirmationResult = await resend.emails.send({
      from: "Luis <onboarding@resend.dev>", // Using Resend's default domain for now
      to: [data.email],
      subject: "Confirmación de mensaje recibido - Fotografía y Caligrafía",
      html: generateConfirmationEmail(data),
    })

    return {
      success: true,
      notificationId: notificationResult.data?.id,
      confirmationId: confirmationResult.data?.id,
    }
  } catch (error) {
    console.error("Error sending emails:", error)
    throw error
  }
}

function generateNotificationEmail(data: EmailData): string {
  const formTypeLabel = {
    contact: "Formulario de Contacto",
    quote: "Solicitud de Cotización",
    service: "Reserva de Servicio",
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nueva consulta</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; }
        .footer { background: #000; color: white; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nueva Consulta Recibida</h1>
          <p>${formTypeLabel[data.formType]}</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">Página de origen:</div>
            <div class="value">${data.pageUrl}</div>
          </div>
          
          <div class="field">
            <div class="label">Nombre:</div>
            <div class="value">${data.nombre}</div>
          </div>
          
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          
          ${
            data.telefono
              ? `
          <div class="field">
            <div class="label">Teléfono:</div>
            <div class="value">${data.telefono}</div>
          </div>
          `
              : ""
          }
          
          ${
            data.servicio
              ? `
          <div class="field">
            <div class="label">Servicio:</div>
            <div class="value">${data.servicio}</div>
          </div>
          `
              : ""
          }
          
          ${
            data.fecha
              ? `
          <div class="field">
            <div class="label">Fecha del evento:</div>
            <div class="value">${data.fecha}</div>
          </div>
          `
              : ""
          }
          
          ${
            data.presupuesto
              ? `
          <div class="field">
            <div class="label">Presupuesto:</div>
            <div class="value">${data.presupuesto}</div>
          </div>
          `
              : ""
          }
          
          ${
            data.ubicacion
              ? `
          <div class="field">
            <div class="label">Ubicación:</div>
            <div class="value">${data.ubicacion}</div>
          </div>
          `
              : ""
          }
          
          ${
            data.referencia
              ? `
          <div class="field">
            <div class="label">Referencia:</div>
            <div class="value">${data.referencia}</div>
          </div>
          `
              : ""
          }
          
          <div class="field">
            <div class="label">Mensaje:</div>
            <div class="value">${data.mensaje || data.descripcion || "No especificado"}</div>
          </div>
          
          <div class="field">
            <div class="label">Fecha y hora:</div>
            <div class="value">${new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" })}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>Este mensaje fue enviado desde tu sitio web de fotografía y caligrafía</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateConfirmationEmail(data: EmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Mensaje recibido</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .footer { background: #000; color: white; padding: 15px; text-align: center; }
        .cta { background: #000; color: white; padding: 12px 24px; text-decoration: none; display: inline-block; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>¡Gracias por contactarme!</h1>
        </div>
        
        <div class="content">
          <p>Hola <strong>${data.nombre}</strong>,</p>
          
          <p>He recibido tu mensaje y te responderé en menos de <strong>24 horas</strong>.</p>
          
          <p>Mientras tanto, puedes:</p>
          <ul>
            <li>Revisar mi <a href="${data.pageUrl.replace(/\/[^/]*$/, "")}/galeria">galería de trabajos</a></li>
            <li>Conocer más sobre mis <a href="${data.pageUrl.replace(/\/[^/]*$/, "")}/fotografia">servicios</a></li>
            <li>Leer mi <a href="${data.pageUrl.replace(/\/[^/]*$/, "")}/blog">blog</a> con consejos y tendencias</li>
          </ul>
          
          <p>Si tienes alguna pregunta urgente, puedes llamarme al <strong>+52 81 1234 5678</strong>.</p>
          
          <p>¡Espero trabajar contigo pronto!</p>
          
          <p>Saludos,<br><strong>Luis</strong><br>Fotografía y Caligrafía</p>
        </div>
        
        <div class="footer">
          <p>Este es un mensaje automático. Por favor no respondas a este email.</p>
          <p>Si necesitas contactarme, escríbeme a luisbttf@gmail.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}
