"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import GalleryLightbox from "@/components/gallery-lightbox"
import { submitServiceForm } from "@/app/actions/service"

interface ServiceData {
  title: string
  subtitle: string
  description: string
  longDescription: string
  price: string
  duration: string
  deliverables: string[]
  process: Array<{
    step: number
    title: string
    description: string
  }>
  gallery: Array<{
    src: string
    alt: string
  }>
  features: string[]
  testimonials?: Array<{
    text: string
    author: string
    role: string
    image: string
  }>
  faq: Array<{
    question: string
    answer: string
  }>
}

interface ServiceTemplateProps {
  serviceData: ServiceData
  serviceId: string
}

export default function ServiceTemplate({ serviceData, serviceId }: ServiceTemplateProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    ubicacion: "",
    mensaje: "",
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })
  const [pageUrl, setPageUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    setPageUrl(window.location.href)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    formDataObj.append("servicio", serviceData.title)
    formDataObj.append("pageUrl", pageUrl)

    try {
      const result = await submitServiceForm(formDataObj)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        })
        // Reset form
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          fecha: "",
          ubicacion: "",
          mensaje: "",
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
        message: "Hubo un error al enviar la reserva. Por favor intenta de nuevo.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-8 items-center">
              {/* Content */}
              <div className="col-span-6 md:col-span-7 space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="font-regular text-gray-500 text-base uppercase tracking-wide">
                      {serviceData.subtitle}
                    </p>
                    <h1 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight">
                      {serviceData.title}
                    </h1>
                  </div>
                  <div className="w-24 h-px bg-black"></div>
                  <p className="font-regular text-gray-600 text-lg md:text-xl leading-relaxed">
                    {serviceData.description}
                  </p>
                </div>

                {/* Key Info */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <div className="font-condensed-black text-black text-xl">{serviceData.price}</div>
                    <div className="font-regular text-gray-500 text-sm">Precio desde</div>
                  </div>
                  <div>
                    <div className="font-condensed-black text-black text-xl">{serviceData.duration}</div>
                    <div className="font-regular text-gray-500 text-sm">Duración</div>
                  </div>
                  <div>
                    <div className="font-condensed-black text-black text-xl">{serviceData.deliverables.length}+</div>
                    <div className="font-regular text-gray-500 text-sm">Entregables</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <a
                    href="#reservar"
                    className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200 inline-block"
                  >
                    Reservar ahora
                  </a>
                </div>
              </div>

              {/* Hero Image */}
              <div className="col-span-6 md:col-span-5">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={serviceData.gallery[0]?.src || "/placeholder.svg?height=600&width=480"}
                    alt={serviceData.gallery[0]?.alt || serviceData.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Description */}
        <section className="w-full bg-gray-50 py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-8">
              <div className="col-span-6 md:col-span-8 space-y-8">
                <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                  ¿Qué incluye este servicio?
                </h2>
                <div className="space-y-6">
                  <p className="font-regular text-gray-600 text-base leading-relaxed">{serviceData.longDescription}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceData.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <svg
                          className="w-5 h-5 text-black flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-regular text-gray-600 text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deliverables */}
              <div className="col-span-6 md:col-span-4">
                <div className="bg-white p-8 shadow-sm">
                  <h3 className="font-condensed-black text-black text-xl mb-6">Lo que recibirás</h3>
                  <ul className="space-y-3">
                    {serviceData.deliverables.map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                        <span className="font-regular text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-6">
                Mi proceso de trabajo
              </h2>
              <div className="w-24 h-px bg-black mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceData.process.map((step, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-black text-white font-condensed-black text-xl flex items-center justify-center mx-auto">
                    {step.step}
                  </div>
                  <h3 className="font-condensed-black text-black text-xl">{step.title}</h3>
                  <p className="font-regular text-gray-600 text-base leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full bg-gray-50 py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-6">
                Galería de trabajos
              </h2>
              <div className="w-24 h-px bg-black mx-auto"></div>
            </div>

            <GalleryLightbox images={serviceData.gallery.slice(1)} />
          </div>
        </section>

        {/* Testimonials Carousel Section */}
        {serviceData.testimonials && serviceData.testimonials.length > 0 && (
          <section className="w-full bg-black py-20 md:py-32">
            <div className="max-w-[1100px] mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="font-condensed-black text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-6">
                  Lo que dicen nuestros clientes
                </h2>
                <div className="w-24 h-px bg-white mx-auto"></div>
              </div>

              <TestimonialCarousel testimonials={serviceData.testimonials} />
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-8">
              <div className="col-span-6 md:col-span-8">
                <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-8">
                  Preguntas frecuentes
                </h2>
                <div className="space-y-4">
                  {serviceData.faq.map((item, index) => (
                    <div key={index} className="border-b border-gray-200">
                      <button
                        className="w-full py-4 text-left flex justify-between items-center"
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      >
                        <span className="font-bold text-black text-base">{item.question}</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            openFaq === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openFaq === index && (
                        <div className="pb-4">
                          <p className="font-regular text-gray-600 text-base leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reservation Form */}
        <section id="reservar" className="w-full bg-gray-50 py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-8">
              {/* Form */}
              <div className="col-span-6 md:col-span-7 space-y-8">
                <div className="space-y-6">
                  <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                    Reserva tu {serviceData.title.toLowerCase()}
                  </h2>
                  <div className="w-16 h-px bg-black"></div>
                  <p className="font-regular text-gray-600 text-base leading-relaxed">
                    Completa el formulario y te contactaré en menos de 24 horas para confirmar los detalles y crear una
                    propuesta personalizada para tu proyecto.
                  </p>
                </div>

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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block font-regular text-black text-base mb-2">
                        Nombre completo *
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
                    <div>
                      <label htmlFor="email" className="block font-regular text-black text-base mb-2">
                        Email *
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telefono" className="block font-regular text-black text-base mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="fecha" className="block font-regular text-black text-base mb-2">
                        Fecha del evento *
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
                  </div>

                  <div>
                    <label htmlFor="ubicacion" className="block font-regular text-black text-base mb-2">
                      Ubicación del evento
                    </label>
                    <input
                      type="text"
                      id="ubicacion"
                      name="ubicacion"
                      value={formData.ubicacion}
                      onChange={handleInputChange}
                      placeholder="Ciudad, venue, dirección aproximada..."
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block font-regular text-black text-base mb-2">
                      Cuéntame sobre tu proyecto
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200 resize-vertical"
                      placeholder="Describe tu visión, estilo preferido, número de personas, detalles especiales..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="col-span-6 md:col-span-5 space-y-8">
                <div className="bg-white p-8 shadow-sm space-y-6">
                  <h3 className="font-condensed-black text-black text-xl">Información del servicio</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-regular text-gray-600">Precio desde:</span>
                      <span className="font-bold text-black">{serviceData.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-regular text-gray-600">Duración:</span>
                      <span className="font-bold text-black">{serviceData.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-regular text-gray-600">Entrega:</span>
                      <span className="font-bold text-black">7-14 días</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-bold text-black text-base mb-3">¿Tienes dudas?</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                        <span className="font-regular text-gray-600 text-sm">+52 81 1693 8801</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="font-regular text-gray-600 text-sm">luisbttf@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    href="/fotografia"
                    className="font-regular text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    ← Ver todos los servicios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
