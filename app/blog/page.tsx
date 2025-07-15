import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Image from "next/image"
import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog-loader"

export const metadata = {
  title: "Blog | Fotografía",
  description:
    "Descubre consejos, técnicas y tendencias en fotografía y caligrafía. Aprende de la experiencia de un profesional en Monterrey.",
  keywords: "blog fotografía, consejos fotografía, técnicas caligrafía, tutoriales",
}

// ✅ async component
export default async function BlogPage() {
  const isDevMode = process.env.NODE_ENV === "development"
  const posts = await getAllBlogPosts(isDevMode) // ✅ await here

  const featuredPost =
    posts.find((post) => post.featured && post.status === "published") ||
    posts.find((post) => post.status === "published")

  const regularPosts = posts.filter((post) => post.slug !== featuredPost?.slug)
  const categories = ["Todos", "Fotografía", "Caligrafía", "Consejos", "Técnicas"]

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="text-center space-y-8 mb-16">
              <h1 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight">
                Blog de Fotografía
              </h1>
              <div className="flex justify-center">
                <div className="w-24 h-px bg-black"></div>
              </div>
              <p className="font-regular text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Descubre consejos profesionales, técnicas avanzadas y tendencias actuales en el mundo de la fotografía y
                caligrafía artística. Comparto mi experiencia para ayudarte a mejorar tu arte.
              </p>
            </div>

            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-20">
                <div className="bg-gray-50 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative aspect-[4/3] lg:aspect-auto">
                      <Image
                        src={featuredPost.thumbnail || "/placeholder.svg?height=500&width=600"}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute top-4 left-4 bg-black text-white font-bold text-sm px-3 py-1">
                        Destacado
                      </div>
                    </div>

                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase">
                            {featuredPost.category}
                          </span>
                          <span>{featuredPost.date}</span>
                          <span>{featuredPost.readTime}</span>
                        </div>

                        <h2 className="font-condensed-black text-black text-2xl md:text-3xl lg:text-[36px] leading-tight">
                          {featuredPost.title}
                        </h2>

                        <p className="font-regular text-gray-600 text-base leading-relaxed">
                          {featuredPost.description}
                        </p>

                        <div className="pt-4">
                          <Link
                            href={`/blog/${featuredPost.slug}`}
                            className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200 inline-flex items-center group"
                          >
                            Leer artículo completo
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
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* All Posts Section */}
        <section className="w-full bg-gray-50 py-20">
          <div className="max-w-[1100px] mx-auto px-4">
            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 text-sm md:text-base bg-white text-gray-800 hover:bg-black hover:text-white transition-colors duration-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.slug} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={post.thumbnail || "/placeholder.svg?height=300&width=400"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black text-white font-bold text-xs px-2 py-1">
                      {post.category}
                    </div>
                    {post.status !== "published" && isDevMode && (
                      <div
                        className={`absolute top-4 right-4 text-white font-bold text-xs px-2 py-1 ${
                          post.status === "draft" ? "bg-yellow-500" : "bg-gray-500"
                        }`}
                      >
                        {post.status.toUpperCase()}
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="font-condensed-black text-black text-xl leading-tight">
                      <Link href={`/blog/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>

                    <p className="font-regular text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>

                    <div className="pt-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-bold text-black text-sm hover:underline inline-flex items-center group"
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full bg-white py-20">
          <div className="max-w-[1100px] mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="font-regular text-gray-600 text-lg leading-relaxed">
                Después de leer sobre técnicas y consejos, ¿estás listo para crear algo extraordinario? Trabajemos
                juntos en tu próximo proyecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
                >
                  Iniciar proyecto
                </Link>
                <Link
                  href="/fotografia"
                  className="border-2 border-black text-black font-bold text-base px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200"
                >
                  Ver servicios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
