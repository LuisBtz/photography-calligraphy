import Image from "next/image"
import Link from "next/link"

const galleryImages = [
  {
    src: "/photos/FerCynthia-f-31.webp",
    alt: "Benito bostezando",
  },
  {
    src: "/photos/J&V.webp",
    alt: "Sesión de maternidad",
  },
  {
    src: "/photos/orquidea.webp",
    alt: "Fotografía de producto",
  },
  {
    src: "/photos/macy-musica.webp",
    alt: "Fotografía de evento",
  },
  {
    src: "/photos/migos.webp",
    alt: "Amigos hablando",
  },
  {
    src: "/photos/benito.webp",
    alt: "Fotografía de arquitectura",
  },
]

export default function GallerySection() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Section Title */}
        {/* <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-12 text-center">
          Mi Galería Destacada
        </h2> */}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.slice(0, 6).map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-16 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-6 md:grid-cols-12">
            <div className="col-span-6 md:col-start-3 md:col-span-8">
              <p className="font-regular text-black text-base lg:text-[16px] leading-relaxed text-center">
                Cada fotografía captura una historia, un instante irrepetible visto desde una perspectiva única. En esta
                galería encontrarás una selección de mis proyectos más recientes en retrato, producto y fotografía de
                eventos.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/galeria"
            className="inline-block bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
          >
            Ver la galería completa
          </Link>
        </div>
      </div>
    </section>
  )
}
