/*
---
title: "El arte de la caligrafía moderna en eventos"
description: "Explora cómo la caligrafía contemporánea puede transformar invitaciones de boda y eventos especiales, añadiendo un toque personal y elegante."
date: "2024-01-08"
readTime: "7 min lectura"
category: "Caligrafía"
featured: true
thumbnail: "/placeholder.svg?height=400&width=600"
author: "Tu Nombre"
tags: ["caligrafía", "bodas", "eventos", "invitaciones"]
status: "published"
---
*/

import Image from "next/image"
import Link from "next/link"

export default function CaligrafiaModernaPost() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-gray-600">
          En un mundo cada vez más digital, la caligrafía artesanal ha encontrado un nuevo renacimiento, especialmente
          en eventos especiales donde cada detalle cuenta una historia. La caligrafía moderna no es solo escribir
          bonito; es crear una experiencia táctil y emocional que conecta con las personas de una manera que lo digital
          simplemente no puede igualar.
        </p>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">La evolución de la caligrafía</h2>

        <p className="leading-relaxed text-gray-600 mb-6">
          La caligrafía ha evolucionado desde las formas clásicas y rígidas hacia estilos más fluidos y expresivos.
          Mientras que la caligrafía tradicional se enfocaba en la perfección técnica y la uniformidad, la caligrafía
          moderna abraza la individualidad y la expresión personal.
        </p>

        <div className="my-12">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Ejemplos de caligrafía moderna para eventos"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
          <p className="text-sm text-gray-500 text-center mt-2">Evolución de estilos: tradicional vs. moderno</p>
        </div>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Aplicaciones en eventos</h2>

        <p className="leading-relaxed text-gray-600 mb-6">
          Las invitaciones son el primer vistazo que los invitados tienen de tu evento. Una invitación caligráfica no
          solo informa; emociona y anticipa la experiencia que está por venir.
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
                La caligrafía moderna en eventos es más que una tendencia; es un retorno a lo artesanal en un mundo
                digital. Cada proyecto es una oportunidad de crear algo único y memorable.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-lg text-center my-12">
          <h3 className="text-2xl font-bold mb-4">¿Interesado en caligrafía para tu evento?</h3>
          <p className="text-lg mb-6">Contacta conmigo para discutir cómo podemos hacer realidad tu visión.</p>
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
