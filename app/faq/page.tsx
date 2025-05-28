import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import FAQSection from "@/components/faq-section"
import Link from "next/link"

export const metadata = {
  title: "Preguntas Frecuentes | Fotografía y Caligrafía",
  description:
    "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de fotografía y caligrafía en Monterrey.",
  keywords: "preguntas frecuentes, FAQ, fotografía monterrey, dudas, información",
}

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h1 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight">
                Preguntas Frecuentes
              </h1>
              <div className="flex justify-center">
                <div className="w-24 h-px bg-black"></div>
              </div>
              <p className="font-regular text-gray-600 text-lg md:text-xl leading-relaxed">
                Encuentra respuestas a las dudas más comunes sobre nuestros servicios de fotografía y caligrafía. ¿No
                encuentras lo que buscas? No dudes en contactarnos.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact CTA */}
        <section className="w-full bg-gray-50 py-20">
          <div className="max-w-[1100px] mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                ¿Tienes más preguntas?
              </h2>
              <p className="font-regular text-gray-600 text-lg leading-relaxed">
                Estoy aquí para ayudarte. Contáctame directamente y resolveré todas tus dudas de manera personalizada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
                >
                  Contactar ahora
                </Link>
                <Link
                  href="tel:+528116938801"
                  className="border-2 border-black text-black font-bold text-base px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200"
                >
                  Llamar directamente
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
