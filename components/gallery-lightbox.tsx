"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
}

interface GalleryLightboxProps {
  images: GalleryImage[]
}

export default function GalleryLightbox({ images }: GalleryLightboxProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedImage === null) return

      switch (e.key) {
        case "Escape":
          setSelectedImage(null)
          break
        case "ArrowLeft":
          e.preventDefault()
          setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1))
          break
        case "ArrowRight":
          e.preventDefault()
          setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0))
          break
      }
    },
    [selectedImage, images.length],
  )

  useEffect(() => {
    if (selectedImage !== null) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [selectedImage, handleKeyDown])

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const goToPrevious = () => {
    setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1))
  }

  const goToNext = () => {
    setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0))
  }

  if (!images || images.length === 0) return null

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer relative aspect-square overflow-hidden bg-gray-200"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="w-12 h-12 bg-white/0 group-hover:bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 transform scale-0 group-hover:scale-100">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            aria-label="Cerrar galería"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="font-regular text-sm">
              {selectedImage + 1} / {images.length}
            </span>
          </div>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
                aria-label="Imagen anterior"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
                aria-label="Siguiente imagen"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Main image */}
          <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full h-full">
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Instructions - only show on desktop */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-center hidden md:block">
            <p className="text-white/60 text-sm">Usa las flechas del teclado para navegar • ESC para cerrar</p>
          </div>

          {/* Background click to close */}
          <div className="absolute inset-0 -z-10" onClick={closeLightbox} />
        </div>
      )}
    </>
  )
}
