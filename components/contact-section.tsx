"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    servicio: "",
    fecha: "",
    descripcion: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
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
                  <option value="fotografia">Fotografía</option>
                  <option value="caligrafia">Caligrafía</option>
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
                  className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
                >
                  Enviar
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
