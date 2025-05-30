"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { BlogPost } from "@/lib/blog-loader"
import { getAllBlogPosts } from "@/lib/blog-loader"
import { getBlogComponent } from "@/lib/blog-components"

interface BlogPostTemplateProps {
  post: BlogPost
}

// Blog post content component
const BlogPostContent = ({ post }: { post: BlogPost }) => {
  const PostComponent = getBlogComponent(post.slug)

  if (!PostComponent) {
    return (
      <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
        <h3 className="text-red-800 font-bold mb-2">Error al cargar el contenido</h3>
        <p className="text-red-600">No se pudo encontrar el componente para el artículo: {post.slug}</p>
        <p className="text-gray-600 mt-4">
          Asegúrate de que el componente esté registrado en <code>lib/blog-components.ts</code>
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Status indicator for non-published posts */}
      {post.status !== "published" && (
        <div
          className={`mb-8 p-6 rounded-lg border-l-4 ${
            post.status === "draft"
              ? "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-400"
              : "bg-gradient-to-r from-gray-50 to-slate-50 border-gray-400"
          }`}
        >
          <div className="flex items-center">
            <span
              className={`px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-full ${
                post.status === "draft" ? "bg-blue-500 text-white shadow-md" : "bg-gray-500 text-white shadow-md"
              }`}
            >
              {post.status}
            </span>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-800">
                {post.status === "draft" ? "Artículo en desarrollo" : "Artículo archivado"}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                {post.status === "draft"
                  ? "Este contenido puede estar incompleto o en revisión"
                  : "Este contenido ya no está activo"}
              </p>
            </div>
          </div>
        </div>
      )}
      <PostComponent />
    </div>
  )
}

export default function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const [isSharing, setIsSharing] = useState(false)

  // Get related posts (same category, excluding current post)
  const allPosts = getAllBlogPosts()
  const relatedPosts = allPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `${post.title} - ${post.description}`

  const handleShare = async (platform: string) => {
    setIsSharing(true)

    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
    }

    if (platform === "copy") {
      try {
        await navigator.clipboard.writeText(shareUrl)
        alert("¡Enlace copiado al portapapeles!")
      } catch (err) {
        console.error("Error copying to clipboard:", err)
      }
    } else {
      window.open(urls[platform as keyof typeof urls], "_blank", "width=600,height=400")
    }

    setTimeout(() => setIsSharing(false), 1000)
  }

  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <article className="w-full">
          {/* Header */}
          <header className="w-full bg-white py-12 md:py-20">
            <div className="max-w-[900px] mx-auto px-4">
              <div className="space-y-6">
                {/* Breadcrumb */}
                <nav className="text-sm">
                  <Link href="/blog" className="text-gray-500 hover:text-black transition-colors duration-200">
                    Blog
                  </Link>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="text-black">{post.title}</span>
                </nav>

                {/* Category and Meta */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="bg-black text-white px-3 py-1 font-bold uppercase tracking-wide">
                    {post.category}
                  </span>
                  <time className="text-gray-500">{post.date}</time>
                  <span className="text-gray-500">{post.readTime}</span>
                  <span className="text-gray-500">Por {post.author}</span>
                </div>

                {/* Title */}
                <h1 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight">
                  {post.title}
                </h1>

                {/* Description */}
                <p className="font-regular text-gray-600 text-lg md:text-xl leading-relaxed">{post.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-3 py-1 text-sm hover:bg-gray-200 transition-colors duration-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="w-full">
            <div className="max-w-[1200px] mx-auto px-4">
              <div className="relative aspect-[16/9] mb-12">
                <Image
                  src={post.thumbnail || "/placeholder.svg?height=600&width=1200"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle brand color accent */}
                <div className="absolute bottom-0 left-0 w-full h-2" style={{ backgroundColor: "#E2FFF7" }}></div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full bg-white">
            <div className="max-w-[900px] mx-auto px-4 pb-20">
              {/* Social Share - Updated with brand colors */}
              <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
                <div
                  className="bg-white shadow-lg border border-gray-100 rounded-full p-2 space-y-2"
                  style={{ borderColor: "#E2FFF7" }}
                >
                  <button
                    onClick={() => handleShare("facebook")}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 transition-all duration-200 rounded-full"
                    style={{
                      backgroundColor: isSharing ? "#E2FFF7" : "transparent",
                      color: isSharing ? "#000" : "#9CA3AF",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#E2FFF7"
                      e.currentTarget.style.color = "#000"
                    }}
                    onMouseLeave={(e) => {
                      if (!isSharing) {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#9CA3AF"
                      }
                    }}
                    disabled={isSharing}
                    title="Compartir en Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleShare("twitter")}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 transition-all duration-200 rounded-full"
                    style={{
                      backgroundColor: isSharing ? "#E2FFF7" : "transparent",
                      color: isSharing ? "#000" : "#9CA3AF",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#E2FFF7"
                      e.currentTarget.style.color = "#000"
                    }}
                    onMouseLeave={(e) => {
                      if (!isSharing) {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#9CA3AF"
                      }
                    }}
                    disabled={isSharing}
                    title="Compartir en Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 transition-all duration-200 rounded-full"
                    style={{
                      backgroundColor: isSharing ? "#E2FFF7" : "transparent",
                      color: isSharing ? "#000" : "#9CA3AF",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#E2FFF7"
                      e.currentTarget.style.color = "#000"
                    }}
                    onMouseLeave={(e) => {
                      if (!isSharing) {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#9CA3AF"
                      }
                    }}
                    disabled={isSharing}
                    title="Compartir en WhatsApp"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </button>

                  <button
                    onClick={() => handleShare("copy")}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 transition-all duration-200 rounded-full"
                    style={{
                      backgroundColor: isSharing ? "#E2FFF7" : "transparent",
                      color: isSharing ? "#000" : "#9CA3AF",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#E2FFF7"
                      e.currentTarget.style.color = "#000"
                    }}
                    onMouseLeave={(e) => {
                      if (!isSharing) {
                        e.currentTarget.style.backgroundColor = "transparent"
                        e.currentTarget.style.color = "#9CA3AF"
                      }
                    }}
                    disabled={isSharing}
                    title="Copiar enlace"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <BlogPostContent post={post} />

              {/* Mobile Share Buttons */}
              <div className="lg:hidden mt-12 pt-8 border-t border-gray-200">
                <h4 className="font-condensed-black text-black text-lg mb-4">Compartir artículo</h4>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="flex items-center space-x-2 px-4 py-2 text-white text-sm transition-colors duration-200 rounded-lg"
                    style={{ backgroundColor: "#E2FFF7", color: "#000" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#D1F5F0"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#E2FFF7"
                    }}
                    disabled={isSharing}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook</span>
                  </button>

                  <button
                    onClick={() => handleShare("twitter")}
                    className="flex items-center space-x-2 px-4 py-2 bg-black text-white text-sm hover:bg-gray-800 transition-colors duration-200 rounded-lg"
                    disabled={isSharing}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    <span>Twitter</span>
                  </button>

                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white text-sm hover:bg-green-700 transition-colors duration-200 rounded-lg"
                    disabled={isSharing}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* CTA Section within content - Updated with brand colors */}
              <div
                className="p-8 my-12 text-center rounded-xl bg-gradient-to-r from-gray-50 to-white border-2"
                style={{ borderColor: "#E2FFF7" }}
              >
                <div className="w-16 h-1 mx-auto mb-6 rounded-full" style={{ backgroundColor: "#E2FFF7" }}></div>
                <h3 className="font-condensed-black text-black text-2xl mb-4">¿Te gustó este artículo?</h3>
                <p className="font-regular text-gray-600 mb-6">
                  Si estás interesado en aplicar estos consejos en tu próximo proyecto fotográfico, me encantaría
                  ayudarte.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contacto"
                    className="bg-black text-white font-bold text-base px-6 py-3 hover:bg-gray-800 transition-colors duration-200 rounded-lg"
                  >
                    Solicitar cotización
                  </Link>
                  <Link
                    href="/fotografia"
                    className="border-2 border-black text-black font-bold text-base px-6 py-3 hover:bg-black hover:text-white transition-colors duration-200 rounded-lg"
                  >
                    Ver servicios
                  </Link>
                </div>
              </div>

              {/* Author Bio */}
              <div className="border-t border-gray-200 pt-12 mt-12">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center flex-shrink-0 relative">
                    <span className="text-white font-bold text-2xl">TN</span>
                    {/* Brand color accent */}
                    <div
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full"
                      style={{ backgroundColor: "#E2FFF7" }}
                    ></div>
                  </div>
                  <div>
                    <h4 className="font-condensed-black text-black text-xl mb-2">Sobre el autor</h4>
                    <p className="font-regular text-gray-600 text-base leading-relaxed mb-4">
                      Fotógrafo y calígrafo profesional con más de 8 años de experiencia en Monterrey. Especializado en
                      retratos, bodas y fotografía comercial. Apasionado por compartir conocimiento y ayudar a otros a
                      mejorar su arte.
                    </p>
                    <div className="flex space-x-4">
                      <Link href="/sobre-mi" className="text-black hover:underline font-bold">
                        Conoce más sobre mi trabajo
                      </Link>
                      <Link href="/contacto" className="text-gray-600 hover:text-black transition-colors duration-200">
                        Contactar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="w-full py-20" style={{ backgroundColor: "#E2FFF7" }}>
            <div className="max-w-[1100px] mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-4">
                  Artículos relacionados
                </h2>
                <p className="font-regular text-gray-600 text-lg">Más contenido que te puede interesar</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article
                    key={relatedPost.slug}
                    className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden transform hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={relatedPost.thumbnail || "/placeholder.svg?height=300&width=400"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black text-white font-bold text-xs px-2 py-1 rounded">
                        {relatedPost.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <span>{relatedPost.date}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{relatedPost.readTime}</span>
                      </div>

                      <h3 className="font-condensed-black text-black text-xl leading-tight">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:underline">
                          {relatedPost.title}
                        </Link>
                      </h3>

                      <p className="font-regular text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {relatedPost.description}
                      </p>

                      <div className="pt-2">
                        <Link
                          href={`/blog/${relatedPost.slug}`}
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
        )}

        {/* Final CTA - Updated background to contrast with footer */}
        <section className="w-full py-20" style={{ backgroundColor: "#F8FFFE" }}>
          <div className="max-w-[1100px] mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-20 h-1 mx-auto mb-8 rounded-full" style={{ backgroundColor: "#E2FFF7" }}></div>
              <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                ¿Listo para crear algo extraordinario?
              </h2>
              <p className="font-regular text-gray-600 text-lg leading-relaxed">
                Después de leer sobre técnicas y consejos, es hora de ponerlos en práctica. Trabajemos juntos en tu
                próximo proyecto fotográfico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200 rounded-lg"
                >
                  Iniciar proyecto
                </Link>
                <Link
                  href="/fotografia"
                  className="text-black font-bold text-base px-8 py-4 transition-all duration-200 rounded-lg border-2"
                  style={{
                    borderColor: "#E2FFF7",
                    backgroundColor: "#E2FFF7",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#D1F5F0"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#E2FFF7"
                  }}
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
