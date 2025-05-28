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
      from: "Formulario Web <contacto@luisbtz.com>", // Using your custom domain
      to: ["luisbttf@gmail.com"],
      subject: `Nueva consulta - ${data.formType === "contact" ? "Contacto" : data.formType === "quote" ? "Cotización" : "Servicio"}`,
      html: generateNotificationEmail(data),
    })

    // Send confirmation email to client
    const confirmationResult = await resend.emails.send({
      from: "Luis Betancourt <luis@luisbtz.com>", // Using your custom domain with your name
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
        .value { margin-top: 5px; padding: 8px; background: white; border-left: 3px solid #E2FFF7; }
        .footer { background: #000; color: white; padding: 15px; text-align: center; font-size: 12px; }
        .urgent { background: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 Nueva Consulta Recibida</h1>
          <p>${formTypeLabel[data.formType]}</p>
        </div>
        
        <div class="content">
          <div class="urgent">
            <strong>🚨 Responder en menos de 24 horas</strong>
          </div>
          
          <div class="field">
            <div class="label">🌐 Página de origen:</div>
            <div class="value"><a href="${data.pageUrl}">${data.pageUrl}</a></div>
          </div>
          
          <div class="field">
            <div class="label">👤 Nombre:</div>
            <div class="value">${data.nombre}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>
          
          ${
            data.telefono
              ? `
          <div class="field">
            <div class="label">📱 Teléfono:</div>
            <div class="value"><a href="tel:${data.telefono}">${data.telefono}</a></div>
          </div>
          `
              : ""
          }
          
          ${
            data.servicio
              ? `
          <div class="field">
            <div class="label">🎯 Servicio:</div>
            <div class="value">${data.servicio}</div>
          </div>
          `
              : ""
          }
          
          ${
            data.fecha
              ? `
          <div class="field">
            <div class="label">📅 Fecha del evento:</div>
            <div class="value">${data.fecha}</div>
          </div>
          `
              : ""
          }
          
          ${
            data.presupuesto
              ? `
          <div class="field">
            <div class="label">💰 Presupuesto:</div>
            <div class="value">${data.presupuesto}</div>
          </div>
          `
              : ""
          }
          
          ${
            data.ubicacion
              ? `
          <div class="field">
            <div class="label">📍 Ubicación:</div>
            <div class="value">${data.ubicacion}</div>
          </div>
          `
              : ""
          }
          
          ${
            data.referencia
              ? `
          <div class="field">
            <div class="label">🔍 Referencia:</div>
            <div class="value">${data.referencia}</div>
          </div>
          `
              : ""
          }
          
          <div class="field">
            <div class="label">💬 Mensaje:</div>
            <div class="value">${data.mensaje || data.descripcion || "No especificado"}</div>
          </div>
          
          <div class="field">
            <div class="label">🕐 Fecha y hora:</div>
            <div class="value">${new Date().toLocaleString("es-MX", { timeZone: "America/Mexico_City" })}</div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #E2FFF7; border-radius: 5px;">
            <strong>📋 Acciones recomendadas:</strong>
            <ul>
              <li>Responder al cliente en menos de 24 horas</li>
              <li>Revisar disponibilidad para la fecha solicitada</li>
              <li>Preparar propuesta personalizada</li>
              <li>Agendar llamada si es necesario</li>
            </ul>
          </div>
        </div>
        
        <div class="footer">
          <p>📸 Este mensaje fue enviado desde luisbtz.com</p>
          <p>Fotografía y Caligrafía Profesional</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateConfirmationEmail(data: EmailData): string {
  const baseUrl = data.pageUrl.includes('localhost') ? 'http://localhost:3000' : 'https://luisbtz.com'
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Mensaje recibido - Luis Betancourt</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .footer { background: #000; color: white; padding: 15px; text-align: center; }
        .cta { background: #000; color: white; padding: 12px 24px; text-decoration: none; display: inline-block; margin: 10px 5px; border-radius: 5px; }
        .highlight { background: #E2FFF7; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .social-links { text-align: center; margin: 20px 0; }
        .social-links a { margin: 0 10px; text-decoration: none; color: #000; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📸 ¡Gracias por contactarme!</h1>
          <p>Luis Betancourt - Fotografía y Caligrafía</p>
        </div>
        
        <div class="content">
          <p>Hola <strong>${data.nombre}</strong>,</p>
          
          <div class="highlight">
            <p><strong>✅ He recibido tu mensaje y te responderé en menos de 24 horas.</strong></p>
          </div>
          
          <p>Tu consulta sobre <strong>${data.servicio || 'nuestros servicios'}</strong> es muy importante para mí. Estoy revisando los detalles que me compartiste y pronto te contactaré con una propuesta personalizada.</p>
          
          <p><strong>Mientras tanto, puedes:</strong></p>
          <ul>
            <li>🖼️ Revisar mi <a href="${baseUrl}/galeria" style="color: #000; font-weight: bold;">galería de trabajos</a></li>
            <li>📋 Conocer más sobre mis <a href="${baseUrl}/fotografia" style="color: #000; font-weight: bold;">servicios</a></li>
            <li>📝 Leer mi <a href="${baseUrl}/blog" style="color: #000; font-weight: bold;">blog</a> con consejos y tendencias</li>
            <li>👤 Conocer más <a href="${baseUrl}/sobre-mi" style="color: #000; font-weight: bold;">sobre mi trabajo</a></li>
          </ul>
          
          <div class="highlight">
            <p><strong>📞 ¿Necesitas hablar urgentemente?</strong></p>
            <p>Puedes llamarme al <strong>+52 81 1234 5678</strong></p>
          </div>
          
          <div style="text-align: center; margin: 25px 0;">
            <a href="${baseUrl}/contacto" class="cta">Ver más información</a>
            <a href="${baseUrl}/fotografia" class="cta">Explorar servicios</a>
          </div>
          
          <p>¡Espero trabajar contigo pronto y crear algo extraordinario juntos!</p>
          
          <p>Saludos cordiales,<br>
          <strong>Luis Betancourt</strong><br>
          📸 Fotografía Profesional<br>
          ✍️ Caligrafía Artística<br>
          🌐 <a href="https://luisbtz.com" style="color: #000;">luisbtz.com</a></p>
          
          <div class="social-links">
            <p><strong>Sígueme en redes sociales:</strong></p>
            <a href="https://instagram.com" style="color: #000;">📱 Instagram</a>
            <a href="https://facebook.com" style="color: #000;">📘 Facebook</a>
            <a href="https://pinterest.com" style="color: #000;">📌 Pinterest</a>
          </div>
        </div>
        
        <div class="footer">
          <p>Este es un mensaje automático de confirmación.</p>
          <p><strong>Para contacto directo:</strong> luisbttf@gmail.com</p>
          <p>📍 Monterrey, Nuevo León, México</p>
          <p style="font-size: 11px; margin-top: 10px;">
            © 2024 Luis Betancourt. Todos los derechos reservados.<br>
            <a href="${baseUrl}/privacidad" style="color: #ccc;">Política de Privacidad</a> | 
            <a href="${baseUrl}/terminos" style="color: #ccc;">Términos de Uso</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}
