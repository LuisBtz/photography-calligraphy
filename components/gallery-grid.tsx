"use client"

import { useState, useEffect } from "react"
import GalleryLightbox from "./gallery-lightbox"

interface Category {
  id: string
  name: string
}

interface GalleryImage {
  src: string
  alt: string
  category: string
  featured?: boolean
}

interface GalleryGridProps {
  images: GalleryImage[]
  categories: Category[]
}

export default function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>(images)
  const [isLoading, setIsLoading] = useState(true)

  // Filter images when category changes
  useEffect(() => {
    setIsLoading(true)

    // Small delay to show loading animation
    const timer = setTimeout(() => {
      if (activeCategory === "all") {
        setFilteredImages(images)
      } else {
        setFilteredImages(images.filter((image) => image.category === activeCategory))
      }
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [activeCategory, images])

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 text-sm md:text-base transition-all duration-200 ${
                activeCategory === category.id ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
      )}

      {/* Gallery Grid */}
      <div className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        {!isLoading && filteredImages.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No hay imágenes en esta categoría.</p>
          </div>
        ) : (
          <GalleryLightbox images={filteredImages} />
        )}
      </div>
    </div>
  )
}
