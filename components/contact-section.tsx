"use client"

import type React from "react"

import Image from "next/image"
import { useState, useEffect } from "react"
import { submitQuoteForm } from "@/app/actions/quote"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    servicio: "",
    fecha: "",
    descripcion: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [pageUrl, setPageUrl] = useState("")

  useEffect(() => {
    setPageUrl(window.location.href)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    // Create FormData
    const formDataObj = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value)
    })
    formDataObj.append("pageUrl", pageUrl)

    try {
      const result = await submitQuoteForm(formDataObj)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        })
        // Reset form
        setFormData({
          nombre: "",
          email: "",
          servicio: "",
          fecha: "",
          descripcion: "",
        })
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
    <section className="w-full">
      {/* Header with black background */}
      <div className="w-full bg-black py-8">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="font-condensed-black text-white text-xl sm:text-2xl lg:text-[24px] text-center">
            Solicita tu cotización personalizada
          </h2>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left section - Form */}
        <div className="w-full lg:w-1/2 py-20 md:py-32 px-8 md:px-16" style={{ backgroundColor: "#E2FFF7" }}>
          <div className="max-w-md mx-auto">
            {/* Form Title */}
            <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-8">
              Tu proyecto comienza aquí
            </h2>

            {/* Submit Status */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded mb-6 ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block font-regular text-black text-base mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-regular text-black text-base mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
                  required
                />
              </div>

              {/* Servicio */}
              <div>
                <label htmlFor="servicio" className="block font-regular text-black text-base mb-2">
                  ¿Qué servicio te interesa?
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200 bg-white"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="sesiones">Sesiones de fotografía</option>
                  <option value="boda-foto">Fotografía para boda</option>
                  <option value="boda-video">Fotografía y video para boda</option>
                  <option value="producto">Fotografía de producto</option>
                  <option value="caligrafia">Caligrafía artística</option>
                </select>
              </div>

              {/* Fecha */}
              <div>
                <label htmlFor="fecha" className="block font-regular text-black text-base mb-2">
                  ¿Para cuándo lo necesitas?
                </label>
                <input
                  type="date"
                  id="fecha"
                  name="fecha"
                  value={formData.fecha}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
                  required
                />
              </div>

              {/* Descripción */}
              <div>
                <label htmlFor="descripcion" className="block font-regular text-black text-base mb-2">
                  Cuéntame brevemente tu idea o lo que necesitas
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200 resize-vertical"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right section - Image */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px]">
          <Image src="/placeholder.svg?height=600&width=600" alt="Contacto" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}
