/*
---
title: "Guía completa de elementos de contenido en fotografía"
description: "Una demostración completa de todos los elementos de contenido disponibles: párrafos, encabezados, listas, código, imágenes y más. Aprende a estructurar contenido efectivo."
date: "2024-01-20"
readTime: "8 min lectura"
category: "Técnicas"
featured: false
thumbnail: "/placeholder.svg?height=400&width=600"
author: "Tu Nombre"
tags: ["técnicas", "contenido", "tutorial", "ejemplos"]
status: "published"
---
*/

import Image from "next/image"

export default function GuiaCompletaElementosContenido() {
  return (
    <div className="prose prose-lg max-w-none">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-gray-600">
          Esta es una demostración completa de todos los tipos de contenido que puedes usar en tus artículos de blog.
          Desde párrafos simples hasta elementos más complejos como código e imágenes.
        </p>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Párrafos y texto básico</h2>

        <p className="leading-relaxed text-gray-600 mb-6">
          Los párrafos son la base de cualquier artículo. Este es un ejemplo de párrafo normal que muestra cómo se ve el
          texto regular en el blog. El texto debe ser fácil de leer y tener un espaciado adecuado.
        </p>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Encabezados de diferentes niveles</h2>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Este es un encabezado de nivel 3</h3>

        <p className="leading-relaxed text-gray-600 mb-6">
          Los encabezados ayudan a estructurar el contenido y hacer que sea más fácil de escanear. Cada nivel tiene un
          tamaño y peso diferente.
        </p>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Listas</h2>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Lista con viñetas</h3>

        <ul className="list-disc list-inside space-y-2 font-regular text-gray-600 mb-6 pl-4">
          <li>Primer elemento de la lista</li>
          <li>Segundo elemento con más texto para mostrar cómo se ve cuando el contenido es más largo</li>
          <li>Tercer elemento</li>
          <li>
            <strong className="font-bold text-black">Elemento en negrita</strong> para mostrar formato dentro de listas
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-black mt-8 mb-4">Lista numerada</h3>

        <ol className="list-decimal list-inside space-y-2 font-regular text-gray-600 mb-6 pl-4">
          <li>Primer paso del proceso</li>
          <li>Segundo paso con explicación más detallada</li>
          <li>Tercer paso final</li>
          <li>Paso adicional si es necesario</li>
        </ol>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Imágenes</h2>

        <div className="my-12">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Ejemplo de fotografía profesional"
            width={800}
            height={400}
            className="w-full rounded-lg"
          />
          <p className="text-sm text-gray-500 text-center mt-2">
            Ejemplo de fotografía profesional con iluminación controlada
          </p>
        </div>

        <h2 className="text-3xl font-bold text-black mt-12 mb-6">Componentes Interactivos</h2>

        <div className="bg-gray-50 p-6 rounded-lg my-8">
          <h4 className="font-bold text-lg mb-4">Calculadora de Exposición</h4>
          <p className="mb-4">
            Esta es una demostración de un componente interactivo que podría incluirse en un blog sobre fotografía.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow text-center">
              <p className="font-bold">Apertura</p>
              <p className="text-xl">f/2.8</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <p className="font-bold">Velocidad</p>
              <p className="text-xl">1/125s</p>
            </div>
            <div className="bg-white p-4 rounded shadow text-center">
              <p className="font-bold">ISO</p>
              <p className="text-xl">400</p>
            </div>
          </div>
        </div>

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
                Como puedes ver, los archivos TSX nos dan una flexibilidad increíble para crear contenido rico e
                interactivo. Puedes combinar todos estos elementos para crear publicaciones de blog atractivas y útiles
                para tus lectores.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black text-white p-6 rounded-lg my-8">
          <h4 className="font-bold text-xl mb-2">¿Quieres aprender más?</h4>
          <p className="mb-4">
            Suscríbete a mi newsletter para recibir más consejos sobre fotografía y contenido digital.
          </p>
          <div className="flex gap-4">
            <input type="email" placeholder="Tu email" className="px-4 py-2 rounded text-black flex-grow" />
            <button className="bg-white text-black px-4 py-2 rounded font-bold">Suscribirse</button>
          </div>
        </div>
      </div>
    </div>
  )
}
