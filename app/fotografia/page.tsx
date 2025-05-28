import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export default function FotografiaPage() {
  const services = [
    {
      id: "sesiones",
      title: "Sesiones de fotografía",
      description:
        "Retratos personales, familiares y corporativos que capturan tu esencia única. Cada sesión es una experiencia personalizada donde tu personalidad brilla a través de cada imagen.",
      features: ["Sesión de 1-2 horas", "Locación a elegir", "30+ fotos editadas", "Galería online privada"],
      price: "Desde $2,500 MXN",
      image: "/placeholder.svg?height=400&width=600",
      link: "/fotografia/sesiones",
    },
    {
      id: "boda-foto",
      title: "Fotografía para boda",
      description:
        "Documenta cada momento especial de tu gran día con un estilo artístico y emotivo. Desde los preparativos hasta la celebración, cada instante será preservado para siempre.",
      features: [
        "Cobertura completa del evento",
        "Fotos de preparativos",
        "Ceremonia y recepción",
        "200+ fotos editadas",
      ],
      price: "Desde $8,500 MXN",
      image: "/placeholder.svg?height=400&width=600",
      link: "/fotografia/boda-foto",
    },
    {
      id: "boda-video",
      title: "Fotografía y video para boda",
      description:
        "La combinación perfecta de fotografía profesional y videografía cinematográfica. Trabajamos en equipo con un videógrafo experto para capturar tu historia completa.",
      features: ["Fotografía + videografía", "Video cinematográfico", "Highlight reel", "Cobertura dual completa"],
      price: "Desde $15,000 MXN",
      image: "/placeholder.svg?height=400&width=600",
      link: "/fotografia/boda-video",
      badge: "Más popular",
    },
    {
      id: "producto",
      title: "Fotografía de producto",
      description:
        "Imágenes profesionales que hacen que tus productos destaquen y vendan más. Perfecto para e-commerce, catálogos y marketing digital con la calidad que tu marca merece.",
      features: ["Estudio profesional", "Múltiples ángulos", "Fondo blanco/personalizado", "Retoque profesional"],
      price: "Desde $1,800 MXN",
      image: "/placeholder.svg?height=400&width=600",
      link: "/fotografia/producto",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <h1 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight">
                Servicios de Fotografía
              </h1>
              <div className="flex justify-center">
                <div className="w-24 h-px bg-black"></div>
              </div>
              <p className="font-regular text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Desde retratos íntimos hasta bodas cinematográficas y fotografía comercial de alto impacto. Cada
                servicio está diseñado para superar tus expectativas y crear recuerdos que perduren para siempre.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="w-full bg-gray-50 py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Service Image */}
                  <div className="relative">
                    <div className="aspect-[3/2] relative">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {service.badge && (
                      <div className="absolute top-4 right-4 bg-black text-white font-bold text-sm px-3 py-1">
                        {service.badge}
                      </div>
                    )}
                  </div>

                  {/* Service Content */}
                  <div className="p-8 space-y-6">
                    {/* Title and Price */}
                    <div className="flex justify-between items-start">
                      <h3 className="font-condensed-black text-black text-xl md:text-2xl lg:text-[28px] leading-tight">
                        {service.title}
                      </h3>
                      <div className="text-right">
                        <div className="font-condensed-black text-black text-lg">{service.price}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-regular text-gray-600 text-base leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-bold text-black text-base">Incluye:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <svg className="w-4 h-4 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="font-regular text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Link
                        href={service.link}
                        className="flex-1 bg-black text-white font-bold text-base px-6 py-3 text-center hover:bg-gray-800 transition-colors duration-200"
                      >
                        Ver detalles
                      </Link>
                      <Link
                        href="/contacto"
                        className="flex-1 border-2 border-black text-black font-bold text-base px-6 py-3 text-center hover:bg-black hover:text-white transition-colors duration-200"
                      >
                        Cotizar
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-8">
              {/* Form Content */}
              <div className="col-span-6 md:col-span-7 space-y-8">
                <div className="space-y-6">
                  <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                    Reserva tu sesión
                  </h2>
                  <div className="w-16 h-px bg-black"></div>
                  <p className="font-regular text-gray-600 text-base leading-relaxed">
                    ¿Listo para crear algo extraordinario? Completa el formulario y te contactaré en menos de 24 horas
                    para discutir los detalles de tu proyecto y crear una propuesta personalizada.
                  </p>
                </div>

                {/* Quick Contact Form */}
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nombre" className="block font-regular text-black text-base mb-2">
                        Nombre completo
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
                        Email
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

                  <div>
                    <label htmlFor="servicio" className="block font-regular text-black text-base mb-2">
                      Servicio de interés
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
                    </select>
                  </div>

                  <div>
                    <label htmlFor="fecha" className="block font-regular text-black text-base mb-2">
                      Fecha tentativa del evento
                    </label>
                    <input
                      type="date"
                      id="fecha"
                      name="fecha"
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
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition-colors duration-200 resize-vertical"
                      placeholder="Describe tu visión, estilo preferido, ubicación, número de personas, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
                  >
                    Enviar solicitud
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="col-span-6 md:col-span-5 space-y-8">
                <div className="bg-gray-50 p-8 space-y-6">
                  <h3 className="font-condensed-black text-black text-xl">¿Prefieres hablar directamente?</h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="font-regular text-gray-600">+52 81 1234 5678</span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="font-regular text-gray-600">hola@tuemail.com</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-bold text-black text-base mb-3">Horarios de respuesta:</h4>
                    <p className="font-regular text-gray-600 text-sm leading-relaxed">
                      Lunes a Viernes: 9:00 AM - 7:00 PM
                      <br />
                      Sábados: 10:00 AM - 4:00 PM
                      <br />
                      Respuesta garantizada en menos de 24 horas
                    </p>
                  </div>
                </div>

                {/* FAQ Quick Links */}
                <div className="space-y-4">
                  <h3 className="font-condensed-black text-black text-xl">Preguntas frecuentes</h3>
                  <div className="space-y-3">
                    <Link
                      href="/faq"
                      className="block font-regular text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      → ¿Cuánto tiempo toma recibir las fotos?
                    </Link>
                    <Link
                      href="/faq"
                      className="block font-regular text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      → ¿Incluyes el transporte en el precio?
                    </Link>
                    <Link
                      href="/faq"
                      className="block font-regular text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      → ¿Qué pasa si llueve el día del evento?
                    </Link>
                    <Link
                      href="/faq"
                      className="block font-regular text-gray-600 hover:text-black transition-colors duration-200"
                    >
                      → ¿Puedo solicitar fotos adicionales?
                    </Link>
                  </div>
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
