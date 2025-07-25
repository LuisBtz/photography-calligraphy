import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1100px] mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="col-span-6 md:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-blanco.svg?height=50&width=50"
                alt="Logo"
                width={50}
                height={50}
                className="w-12 h-12"
              />
            </Link>
            <p className="font-regular text-gray-300 text-base leading-relaxed">
              Fotografía y caligrafía artesanal en Monterrey. Capturando momentos únicos y creando piezas personalizadas
              que cuentan tu historia con estilo y elegancia.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/btz_luis/"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/luis.bttz/"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="https://mx.pinterest.com/luisbtzluis/"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-12.013C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="col-span-3 md:col-span-2 space-y-6">
            <h3 className="font-condensed-black text-white text-lg">Navegación</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="font-regular text-gray-300 hover:text-white transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-mi"
                  className="font-regular text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Sobre mi
                </Link>
              </li>
              <li>
                <Link
                  href="/fotografia"
                  className="font-regular text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Fotografía
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-regular text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="font-regular text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-3 md:col-span-2 space-y-6">
            <h3 className="font-condensed-black text-white text-lg">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/fotografia/retratos"
                  className="font-regular text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Retratos
                </Link>
              </li>
              <li>
                <Link
                  href="/fotografia/productos"
                  className="font-regular text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Fotografía de producto
                </Link>
              </li>
              <li>
                <Link
                  href="/fotografia/eventos"
                  className="font-regular text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="/caligrafia/bodas"
                  className="font-regular text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Caligrafía para bodas
                </Link>
              </li>
              <li>
                <Link
                  href="/caligrafia/invitaciones"
                  className="font-regular text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Invitaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-6 md:col-span-4 space-y-6">
            <h3 className="font-condensed-black text-white text-lg">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <p className="font-regular text-gray-300 text-base">Monterrey, Nuevo León, México</p>
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
                <Link
                  href="mailto:luisbttf@gmail.com"
                  className="font-regular text-gray-300 hover:text-white transition-colors duration-200"
                >
                  luisbttf@gmail.com
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <Link
                  href="tel:+528116938801"
                  className="font-regular text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +52 81 1693 8801
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-[1100px] mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-regular text-gray-400 text-sm">© 2024 Tu Nombre. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
              <Link
                href="/privacidad"
                className="font-regular text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terminos"
                className="font-regular text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
