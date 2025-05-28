"use client"

import { useState, useEffect } from "react"
import { submitContactForm } from "@/app/actions/contact"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [pageUrl, setPageUrl] = useState("")

  useEffect(() => {
    setPageUrl(window.location.href)
  }, [])

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    // Add page URL to form data
    formData.append("pageUrl", pageUrl)

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message,
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Hubo un error al enviar el mensaje. Por favor intenta de nuevo.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-6">
      {/* Name and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block font-regular text-black text-base mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-regular text-black text-base mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
            required
          />
        </div>
      </div>

      {/* Phone and Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="telefono" className="block font-regular text-black text-base mb-2">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
          />
        </div>
        <div>
          <label htmlFor="servicio" className="block font-regular text-black text-base mb-2">
            Servicio de interés *
          </label>
          <select
            id="servicio"
            name="servicio"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200 bg-white"
            required
          >
            <option value="">Selecciona un servicio</option>
            <option value="sesiones">Sesiones de fotografía</option>
            <option value="boda-foto">Fotografía para boda</option>
            <option value="boda-video">Fotografía y video para boda</option>
            <option value="producto">Fotografía de producto</option>
            <option value="caligrafia">Caligrafía artística</option>
            <option value="otro">Otro (especificar en mensaje)</option>
          </select>
        </div>
      </div>

      {/* Date and Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fecha" className="block font-regular text-black text-base mb-2">
            Fecha del evento
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
          />
        </div>
        <div>
          <label htmlFor="presupuesto" className="block font-regular text-black text-base mb-2">
            Presupuesto aproximado
          </label>
          <select
            id="presupuesto"
            name="presupuesto"
            className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200 bg-white"
          >
            <option value="">Selecciona un rango</option>
            <option value="2000-5000">$2,000 - $5,000 MXN</option>
            <option value="5000-10000">$5,000 - $10,000 MXN</option>
            <option value="10000-20000">$10,000 - $20,000 MXN</option>
            <option value="20000+">$20,000+ MXN</option>
            <option value="por-definir">Por definir</option>
          </select>
        </div>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="ubicacion" className="block font-regular text-black text-base mb-2">
          Ubicación del evento
        </label>
        <input
          type="text"
          id="ubicacion"
          name="ubicacion"
          placeholder="Ciudad, venue, dirección aproximada..."
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="mensaje" className="block font-regular text-black text-base mb-2">
          Cuéntame sobre tu proyecto *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200 resize-vertical"
          placeholder="Describe tu visión, estilo preferido, número de personas, detalles especiales, o cualquier pregunta que tengas..."
          required
        />
      </div>

      {/* How did you find us */}
      <div>
        <label htmlFor="referencia" className="block font-regular text-black text-base mb-2">
          ¿Cómo nos encontraste?
        </label>
        <select
          id="referencia"
          name="referencia"
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200 bg-white"
        >
          <option value="">Selecciona una opción</option>
          <option value="google">Búsqueda en Google</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="recomendacion">Recomendación de amigo/familia</option>
          <option value="wedding-planner">Wedding planner</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      {/* Submit Status */}
      {submitStatus.type && (
        <div
          className={`p-4 rounded ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </button>

      {/* Privacy Notice */}
      <p className="text-sm text-gray-500 leading-relaxed">
        Al enviar este formulario, aceptas nuestra{" "}
        <a href="/privacidad" className="underline hover:text-black">
          Política de Privacidad
        </a>
        . Tu información será utilizada únicamente para contactarte sobre tu proyecto y nunca será compartida con
        terceros.
      </p>
    </form>
  )
}
