import Link from "next/link"
import Image from "next/image"

export default function ContactSection() {
  return (
    <section className="w-full py-20 md:py-32" style={{ backgroundColor: "#E2FFF7" }}>
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight">
                ¿Listo para crear algo extraordinario?
              </h2>
              <div className="w-24 h-px bg-black"></div>
              <p className="font-regular text-gray-600 text-lg md:text-xl leading-relaxed">
                Cada proyecto es único y merece atención personalizada. Cuéntame tu visión y trabajemos juntos para
                crear algo que supere tus expectativas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-black text-base">Respuesta rápida</h3>
                  <p className="font-regular text-gray-600 text-sm">Respondo en menos de 24 horas</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-black text-base">Consulta gratuita</h3>
                  <p className="font-regular text-gray-600 text-sm">Primera consulta sin costo</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-black text-base">Propuesta personalizada</h3>
                  <p className="font-regular text-gray-600 text-sm">Adaptada a tu presupuesto</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-black text-base">Garantía de calidad</h3>
                  <p className="font-regular text-gray-600 text-sm">100% satisfacción garantizada</p>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-black">Llámame directamente</p>
                  <a
                    href="tel:+528116938801"
                    className="font-regular text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    +52 81 1693 8801
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-black">Escríbeme un email</p>
                  <a
                    href="mailto:luisbttf@gmail.com"
                    className="font-regular text-gray-600 hover:text-black transition-colors duration-200"
                  >
                    luisbttf@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200 text-center"
              >
                Enviar mensaje
              </Link>
              <Link
                href="/fotografia"
                className="border-2 border-black text-black font-bold text-base px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200 text-center"
              >
                Ver servicios
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              <Link
                href="https://www.instagram.com/btz_luis/"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/luis.bttz/"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://mx.pinterest.com/luisbtzluis/"
                className="text-gray-600 hover:text-black transition-colors duration-200"
                aria-label="Pinterest"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src="/placeholder.svg?height=600&width=480&query=photographer working with camera"
                alt="Contacto - Fotografía profesional"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
