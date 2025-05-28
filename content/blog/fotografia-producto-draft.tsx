/*
---
title: "Fotografía de Producto: Guía Completa"
description: "Todo lo que necesitas saber para crear imágenes de producto profesionales que aumenten tus ventas."
date: "2024-01-01"
readTime: "8 min lectura"
category: "Fotografía"
featured: false
thumbnail: "/placeholder.svg?height=400&width=600"
author: "Tu Nombre"
tags: ["fotografía de producto", "iluminación", "comercial"]
status: "published"
---
*/

import Image from "next/image"
import Link from "next/link"

export default function FotografiaProductoPost() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-gray-600">
          En el mundo del e-commerce, una imagen vale más que mil palabras, y en el caso de la fotografía de producto,
          puede valer miles de pesos en ventas. Después de años especializándome en este campo, he aprendido que la
          diferencia entre una foto que vende y una que no, radica en dos elementos fundamentales: la iluminación y la
          composición.
        </p>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">La importancia de la fotografía de producto</h2>

        <p className="leading-relaxed text-gray-600 mb-6">
          En las compras online, las fotografías son el único contacto físico que el cliente tiene con el producto. Una
          imagen bien ejecutada puede transmitir calidad, confianza y deseo de compra, mientras que una foto mediocre
          puede hacer que incluso el mejor producto parezca barato o poco confiable.
        </p>

        <div className="my-12">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Setup de fotografía de producto profesional"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
          <p className="text-sm text-gray-500 text-center mt-2">Setup profesional para fotografía de producto</p>
        </div>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Fundamentos de iluminación</h2>

        <p className="leading-relaxed text-gray-600 mb-6">
          La iluminación es el corazón de la fotografía de producto. Una buena iluminación puede hacer que un producto
          económico se vea premium, mientras que una mala iluminación puede arruinar incluso el producto más caro.
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
                La fotografía de producto exitosa combina técnica, creatividad y comprensión del mercado. Con las
                herramientas y técnicas correctas, puedes crear imágenes que no solo muestren tu producto, sino que lo
                vendan.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-8 rounded-lg text-center my-12">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas fotografía de producto profesional?</h3>
          <p className="text-lg mb-6">Contacta conmigo para crear imágenes que impulsen tus ventas.</p>
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
