import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de Fotografía - Monterrey | Sesiones, Bodas y Producto",
  description:
    "Servicios profesionales de fotografía en Monterrey: sesiones personales, bodas cinematográficas, fotografía de producto y más. Calidad premium y precios competitivos.",
  keywords: "fotografía monterrey, sesiones fotográficas, bodas, fotografía producto, fotógrafo profesional",
  openGraph: {
    title: "Servicios de Fotografía - Monterrey | Sesiones, Bodas y Producto",
    description:
      "Servicios profesionales de fotografía en Monterrey: sesiones personales, bodas cinematográficas, fotografía de producto y más. Calidad premium y precios competitivos.",
    type: "website",
    locale: "es_ES",
  },
}

export default function FotografiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
