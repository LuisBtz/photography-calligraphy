import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Luis Betancourt - Fotografía y Caligrafía en Monterrey",
  description:
    "Fotografía profesional y caligrafía artística en Monterrey. Sesiones personales, bodas, productos y eventos especiales. Capturando momentos únicos con estilo y elegancia.",
  keywords: "fotografía monterrey, caligrafía, bodas, retratos, productos, Luis Betancourt",
  authors: [{ name: "Luis Betancourt" }],
  metadataBase: new URL("https://luisbtz.com"),
  openGraph: {
    title: "Luis Betancourt - Fotografía y Caligrafía en Monterrey",
    description:
      "Fotografía profesional y caligrafía artística en Monterrey. Sesiones personales, bodas, productos y eventos especiales.",
    type: "website",
    locale: "es_ES",
    url: "https://luisbtz.com",
    siteName: "Luis Betancourt Fotografía",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Betancourt - Fotografía y Caligrafía en Monterrey",
    description:
      "Fotografía profesional y caligrafía artística en Monterrey. Sesiones personales, bodas, productos y eventos especiales.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
