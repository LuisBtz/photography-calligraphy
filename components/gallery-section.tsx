import Image from "next/image"
import Link from "next/link"

export default function GallerySection() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
          {/* Column 1 */}
          <div className="space-y-[10px]">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=320&width=300"
                alt="Fotografía 1"
                width={300}
                height={320}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=450&width=300"
                alt="Fotografía 2"
                width={300}
                height={450}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=280&width=300"
                alt="Fotografía 3"
                width={300}
                height={280}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=380&width=300"
                alt="Fotografía 4"
                width={300}
                height={380}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-[10px]">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Fotografía 5"
                width={300}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Fotografía 6"
                width={300}
                height={300}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=420&width=300"
                alt="Fotografía 7"
                width={300}
                height={420}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=350&width=300"
                alt="Fotografía 8"
                width={300}
                height={350}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-[10px]">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=360&width=300"
                alt="Fotografía 9"
                width={300}
                height={360}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=480&width=300"
                alt="Fotografía 10"
                width={300}
                height={480}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=260&width=300"
                alt="Fotografía 11"
                width={300}
                height={260}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=340&width=300"
                alt="Fotografía 12"
                width={300}
                height={340}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
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
        <div className="mt-8 text-center">
          <Link
            href="/galeria"
            className="inline-block bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
          >
            See the full gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
