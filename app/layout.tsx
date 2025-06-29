import type React from "react"
import type { Metadata } from "next"
import GoogleAnalytics from "@/components/google-analytics"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Luis Benítez - Fotografía y Caligrafía en Monterrey",
  description:
    "Fotografía profesional y caligrafía artística en Monterrey. Sesiones personales, bodas, productos y eventos especiales. Capturando momentos únicos con estilo y elegancia.",
  keywords: "fotografía monterrey, caligrafía, bodas, retratos, productos, Luis Benítez",
  authors: [{ name: "Luis Benítez" }],
  metadataBase: new URL("https://luisbtz.com"),
  openGraph: {
    title: "Luis Benítez - Fotografía y Caligrafía en Monterrey",
    description:
      "Fotografía profesional y caligrafía artística en Monterrey. Sesiones personales, bodas, productos y eventos especiales.",
    type: "website",
    locale: "es_ES",
    url: "https://luisbtz.com",
    siteName: "Luis Benítez Fotografía",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Benítez - Fotografía y Caligrafía en Monterrey",
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
  icons: {
    icon: "/favicon.png", // Ruta al favicon para la mayoría de los navegadores
    shortcut: "/favicon.png", // Para compatibilidad con algunos navegadores antiguos
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-helvetica">
        <GoogleAnalytics />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  )
}
