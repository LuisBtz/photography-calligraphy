import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import ContactForm from "@/components/contact-form"
import Image from "next/image"

export const metadata = {
  title: "Contacto | Fotografía y Caligrafía en Monterrey",
  description:
    "Contacta conmigo para tu próximo proyecto de fotografía o caligrafía. Respuesta garantizada en 24 horas.",
  keywords: "contacto fotógrafo monterrey, cotización fotografía, contacto caligrafía",
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="text-center space-y-8 mb-16">
              <h1 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight">
                Trabajemos juntos
              </h1>
              <div className="flex justify-center">
                <div className="w-24 h-px bg-black"></div>
              </div>
              <p className="font-regular text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Cada proyecto es único y merece atención personalizada. Cuéntame sobre tu visión y creemos algo
                extraordinario juntos. Respuesta garantizada en menos de 24 horas.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Phone */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="font-condensed-black text-black text-xl">Llámame</h3>
                <p className="font-regular text-gray-600">Para consultas rápidas o urgentes</p>
                <a
                  href="tel:+528112345678"
                  className="font-bold text-black hover:underline transition-colors duration-200"
                >
                  +52 81 1234 5678
                </a>
              </div>

              {/* Email */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-condensed-black text-black text-xl">Escríbeme</h3>
                <p className="font-regular text-gray-600">Para proyectos detallados</p>
                <a
                  href="mailto:hola@tuemail.com"
                  className="font-bold text-black hover:underline transition-colors duration-200"
                >
                  hola@tuemail.com
                </a>
              </div>

              {/* Location */}
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-condensed-black text-black text-xl">Ubicación</h3>
                <p className="font-regular text-gray-600">Monterrey y área metropolitana</p>
                <p className="font-bold text-black">Nuevo León, México</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full bg-gray-50 py-20">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                    Cuéntame sobre tu proyecto
                  </h2>
                  <p className="font-regular text-gray-600 text-base leading-relaxed">
                    Completa el formulario con los detalles de tu proyecto. Entre más información me proporciones, mejor
                    podré entender tu visión y crear una propuesta personalizada que supere tus expectativas.
                  </p>
                </div>

                <ContactForm />
              </div>

              {/* Info Sidebar */}
              <div className="space-y-8">
                {/* Image */}
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Estudio de fotografía"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Info Cards */}
                <div className="space-y-6">
                  <div className="bg-white p-6 shadow-sm">
                    <h3 className="font-condensed-black text-black text-xl mb-4">Tiempo de respuesta</h3>
                    <p className="font-regular text-gray-600 text-base leading-relaxed">
                      Respondo a todas las consultas en menos de 24 horas. Para proyectos urgentes, puedes llamarme
                      directamente para una respuesta inmediata.
                    </p>
                  </div>

                  <div className="bg-white p-6 shadow-sm">
                    <h3 className="font-condensed-black text-black text-xl mb-4">Proceso de cotización</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-black text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          1
                        </div>
                        <p className="font-regular text-gray-600 text-sm">
                          Recibo tu solicitud y la reviso detalladamente
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-black text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          2
                        </div>
                        <p className="font-regular text-gray-600 text-sm">
                          Te envío una propuesta personalizada con precios
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-black text-white text-sm font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          3
                        </div>
                        <p className="font-regular text-gray-600 text-sm">
                          Coordinamos detalles y confirmamos el proyecto
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 shadow-sm">
                    <h3 className="font-condensed-black text-black text-xl mb-4">Horarios de atención</h3>
                    <div className="space-y-2 font-regular text-gray-600 text-sm">
                      <div className="flex justify-between">
                        <span>Lunes - Viernes:</span>
                        <span>9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábados:</span>
                        <span>10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingos:</span>
                        <span>Solo emergencias</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Section */}
        <section className="w-full bg-white py-20">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-4">
                Preguntas frecuentes
              </h2>
              <p className="font-regular text-gray-600 text-lg">Respuestas rápidas a las dudas más comunes</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-black text-base mb-2">¿Cuánto cuesta una sesión?</h3>
                  <p className="font-regular text-gray-600 text-sm leading-relaxed">
                    Los precios varían según el tipo de sesión. Las sesiones personales inician desde $2,500 MXN, bodas
                    desde $8,500 MXN, y fotografía de producto desde $1,800 MXN.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-black text-base mb-2">¿Incluye el transporte?</h3>
                  <p className="font-regular text-gray-600 text-sm leading-relaxed">
                    Para eventos en Monterrey y área metropolitana, el transporte está incluido. Para locaciones más
                    lejanas, se cotiza por separado.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-black text-base mb-2">¿Cuándo recibo las fotos?</h3>
                  <p className="font-regular text-gray-600 text-sm leading-relaxed">
                    Sesiones personales: 7-10 días. Bodas: 2-3 semanas. Productos: 5-7 días. Siempre entrego antes de la
                    fecha prometida.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-black text-base mb-2">¿Qué incluye el servicio?</h3>
                  <p className="font-regular text-gray-600 text-sm leading-relaxed">
                    Todos los servicios incluyen la sesión, edición profesional, galería online privada, y las fotos en
                    alta resolución. Sin costos ocultos.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-black text-base mb-2">¿Puedo cancelar o reprogramar?</h3>
                  <p className="font-regular text-gray-600 text-sm leading-relaxed">
                    Sí, con 48 horas de anticipación el anticipo es reembolsable. Para cancelaciones de último momento,
                    ofrezco reprogramación sin costo adicional.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-black text-base mb-2">¿Trabajas fuera de Monterrey?</h3>
                  <p className="font-regular text-gray-600 text-sm leading-relaxed">
                    Sí, acepto proyectos en toda la República Mexicana. Los gastos de viaje se incluyen en la cotización
                    final.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/faq"
                className="border-2 border-black text-black font-bold text-base px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200"
              >
                Ver todas las preguntas frecuentes
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
