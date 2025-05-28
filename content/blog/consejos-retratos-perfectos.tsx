/*
---
title: "Consejos para una sesión de retratos perfecta"
description: "Descubre las técnicas y preparativos esenciales para capturar retratos que transmitan emociones auténticas y reflejen la personalidad única de cada persona."
date: "2024-01-15"
readTime: "5 min lectura"
category: "Fotografía"
featured: true
thumbnail: "/placeholder.svg?height=400&width=600"
author: "Tu Nombre"
tags: ["retratos", "fotografía", "consejos", "técnicas"]
status: "published"
---
*/

import Image from "next/image"
import Link from "next/link"

export default function ConsejosRetratosPost() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-gray-600">
          Los retratos son mucho más que simples fotografías; son ventanas al alma que capturan la esencia única de cada
          persona. Después de años perfeccionando mi técnica, he aprendido que una sesión exitosa depende tanto de la
          preparación como de la conexión humana que se establece durante el proceso.
        </p>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">La importancia de la preparación</h2>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Antes de la sesión</h3>

        <p className="leading-relaxed text-gray-600 mb-6">
          La clave de un retrato excepcional comienza mucho antes de que la cámara capture el primer disparo. Durante
          nuestra consulta inicial, dedico tiempo a conocer a mi cliente: sus gustos, personalidad, y qué quieren
          transmitir a través de las imágenes.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h4 className="text-xl font-bold text-black mb-4">Planificación del vestuario</h4>
          <p className="leading-relaxed text-gray-600">
            Recomiendo colores sólidos que complementen el tono de piel y eviten patrones que puedan distraer. Los tonos
            neutros como blanco, negro, gris y beige siempre funcionan bien, pero no tengas miedo de agregar un toque de
            color que refleje tu personalidad.
          </p>
        </div>

        <div className="my-12">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Setup de iluminación para retratos en estudio"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
          <p className="text-sm text-gray-500 text-center mt-2">
            Setup básico de iluminación para retratos profesionales
          </p>
        </div>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Técnicas de iluminación</h2>

        <p className="leading-relaxed text-gray-600 mb-6">
          La luz es el elemento más importante en cualquier fotografía. Para retratos, prefiero la luz natural suave que
          se obtiene cerca de una ventana grande o durante la "hora dorada" al atardecer.
        </p>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Conclusión</h2>

        <div
          className="bg-gradient-to-r from-white to-gray-50 p-8 rounded-xl border-l-4 my-8"
          style={{ borderColor: "#E2FFF7" }}
        >
          <div className="flex items-start space-x-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#E2FFF7" }}
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-condensed-black text-black text-xl mb-3">Conclusión</h3>
              <p className="font-regular text-gray-700 text-base leading-relaxed">
                Un retrato perfecto no es solo técnicamente correcto; es emocionalmente resonante. Combina preparación
                meticulosa, técnica sólida, y sobre todo, una conexión genuina entre fotógrafo y cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-lg text-center my-12">
          <h3 className="text-2xl font-bold mb-4">¿Listo para crear retratos únicos?</h3>
          <p className="text-lg mb-6">Contacta conmigo y planifiquemos tu sesión perfecta.</p>
          <Link
            href="/contacto"
            className="bg-white text-black font-bold px-8 py-3 rounded hover:bg-gray-200 transition-colors duration-200 inline-block"
          >
            Solicitar cotización
          </Link>
        </div>
      </div>
    </div>
  )
}
