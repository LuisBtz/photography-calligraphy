import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre mi - Fotografía y Caligrafía en Monterrey",
  description:
    "Conoce mi historia como fotógrafo y calígrafo en Monterrey. Descubre mi pasión por capturar momentos únicos y crear piezas artesanales personalizadas.",
  keywords: "sobre mi, fotógrafo monterrey, calígrafo, historia personal, experiencia",
  openGraph: {
    title: "Sobre mi - Fotografía y Caligrafía en Monterrey",
    description:
      "Conoce mi historia como fotógrafo y calígrafo en Monterrey. Descubre mi pasión por capturar momentos únicos y crear piezas artesanales personalizadas.",
    type: "website",
    locale: "es_ES",
  },
}

export default function SobreMiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
