import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mi Sitio Web - Fotografía y Blog Personal",
  description:
    "Sitio web personal de fotografía y blog. Descubre mi trabajo fotográfico y lee mis últimas publicaciones.",
  keywords: "fotografía, blog, personal, arte, creatividad",
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Mi Sitio Web - Fotografía y Blog Personal",
    description:
      "Sitio web personal de fotografía y blog. Descubre mi trabajo fotográfico y lee mis últimas publicaciones.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Sitio Web - Fotografía y Blog Personal",
    description:
      "Sitio web personal de fotografía y blog. Descubre mi trabajo fotográfico y lee mis últimas publicaciones.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-helvetica">{children}</body>
    </html>
  )
}
