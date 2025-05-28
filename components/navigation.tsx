"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 z-50">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Logo"
              width={50}
              height={50}
              className="w-12 h-12 drop-shadow-sm"
            />
          </Link>

          {/* Navigation Links - Centered */}
          <div className="flex-1 flex justify-center">
            <ul className="flex space-x-10">
              <li>
                <Link
                  href="/"
                  className={`relative text-black text-base font-regular transition-all duration-300 hover:text-gray-600 group ${
                    isActive("/") ? "text-black" : ""
                  }`}
                >
                  Inicio
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                      isActive("/") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre-mi"
                  className={`relative text-black text-base font-regular transition-all duration-300 hover:text-gray-600 group ${
                    isActive("/sobre-mi") ? "text-black" : ""
                  }`}
                >
                  Sobre mi
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                      isActive("/sobre-mi") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/fotografia"
                  className={`relative text-black text-base font-regular transition-all duration-300 hover:text-gray-600 group ${
                    isActive("/fotografia") ? "text-black" : ""
                  }`}
                >
                  Fotografía
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                      isActive("/fotografia") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`relative text-black text-base font-regular transition-all duration-300 hover:text-gray-600 group ${
                    isActive("/blog") ? "text-black" : ""
                  }`}
                >
                  Blog
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                      isActive("/blog") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className={`relative text-black text-base font-regular transition-all duration-300 hover:text-gray-600 group ${
                    isActive("/contacto") ? "text-black" : ""
                  }`}
                >
                  Contacto
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                      isActive("/contacto") ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Link
              href="/contacto"
              className="bg-black text-white font-bold text-sm px-6 py-3 hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Cotizar proyecto
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
