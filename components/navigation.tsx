"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          {/* Logo - Now clickable to home */}
          <Link href="/" className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={37}
              height={40}
              className=" drop-shadow-sm"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none focus:text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Open Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-10">
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
                  href="/galeria"
                  className={`relative text-black text-base font-regular transition-all duration-300 hover:text-gray-600 group ${
                    isActive("/galeria") ? "text-black" : ""
                  }`}
                >
                  Galería
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                      isActive("/galeria") ? "w-full" : "w-0 group-hover:w-full"
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
          <div className="hidden md:flex flex-shrink-0">
            <Link
              href="/contacto"
              className="bg-black text-white font-bold text-sm px-6 py-3 hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
            >
              Cotizar proyecto
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed top-20 left-0 right-0 bg-white shadow-md z-40 transform origin-top transition-all duration-300",
          isMenuOpen ? "scale-y-100" : "scale-y-0",
        )}
      >
        <div className="px-4 py-6">
          <ul className="space-y-4">
            <li>
              <Link
                href="/sobre-mi"
                className={`block text-black text-base font-regular transition-all duration-300 hover:text-gray-600 ${
                  isActive("/sobre-mi") ? "text-black" : ""
                }`}
              >
                Sobre mi
              </Link>
            </li>
            <li>
              <Link
                href="/fotografia"
                className={`block text-black text-base font-regular transition-all duration-300 hover:text-gray-600 ${
                  isActive("/fotografia") ? "text-black" : ""
                }`}
              >
                Fotografía
              </Link>
            </li>
            <li>
              <Link
                href="/galeria"
                className={`block text-black text-base font-regular transition-all duration-300 hover:text-gray-600 ${
                  isActive("/galeria") ? "text-black" : ""
                }`}
              >
                Galería
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`block text-black text-base font-regular transition-all duration-300 hover:text-gray-600 ${
                  isActive("/blog") ? "text-black" : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className={`block text-black text-base font-regular transition-all duration-300 hover:text-gray-600 ${
                  isActive("/contacto") ? "text-black" : ""
                }`}
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="block bg-black text-white font-bold text-sm px-6 py-3 hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
              >
                Cotizar proyecto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
