import Link from "next/link"
import Image from "next/image"

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Consejos para una sesión de retratos perfecta",
      description:
        "Descubre las técnicas y preparativos esenciales para capturar retratos que transmitan emociones auténticas y reflejen la personalidad única de cada persona.",
      date: "15 Enero 2024",
      readTime: "5 min lectura",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "El arte de la caligrafía moderna en eventos",
      description:
        "Explora cómo la caligrafía contemporánea puede transformar invitaciones de boda y eventos especiales, añadiendo un toque personal y elegante.",
      date: "8 Enero 2024",
      readTime: "7 min lectura",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Fotografía de producto: iluminación y composición",
      description:
        "Aprende las técnicas fundamentales de iluminación y composición que harán que tus productos destaquen y generen mayor impacto visual.",
      date: "2 Enero 2024",
      readTime: "6 min lectura",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Tendencias en caligrafía para 2024",
      description:
        "Un recorrido por las tendencias más actuales en caligrafía artística, desde estilos minimalistas hasta técnicas mixtas que combinan tradición e innovación.",
      date: "28 Diciembre 2023",
      readTime: "4 min lectura",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      title: "Cómo prepararse para una sesión fotográfica",
      description:
        "Guía completa para clientes sobre cómo prepararse antes de una sesión, desde la elección de vestuario hasta consejos para sentirse cómodo frente a la cámara.",
      date: "20 Diciembre 2023",
      readTime: "8 min lectura",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Section Title */}
        <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-12 text-center">
          Últimas publicaciones
        </h2>

        {/* Blog Posts Grid */}
        <div className="space-y-12">
          {blogPosts.map((post, index) => (
            <article key={post.id} className="group">
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-8">
                {/* Thumbnail */}
                <div className="col-span-6 md:col-span-4">
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={post.thumbnail || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className="col-span-6 md:col-span-8 flex flex-col justify-center space-y-4">
                  {/* Post Number and Meta */}
                  <div className="flex items-center space-x-4">
                    <span className="font-condensed-black text-gray-400 text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span className="font-regular">{post.date}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span className="font-regular">{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${post.id}`}>
                    <h3 className="font-condensed-black text-black text-xl md:text-2xl lg:text-[28px] leading-tight group-hover:underline transition-all duration-200">
                      {post.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <p className="font-regular text-gray-600 text-base leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <div className="pt-2">
                    <Link
                      href={`/blog/${post.id}`}
                      className="font-bold text-black text-base hover:underline transition-all duration-200 inline-flex items-center"
                    >
                      Leer más
                      <svg
                        className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-block bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
          >
            Ver todas las publicaciones
          </Link>
        </div>
      </div>
    </section>
  )
}
