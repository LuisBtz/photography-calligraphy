"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { BlogPost, BlogPostContent } from "@/lib/blog-loader"
import Markdown from "react-markdown"

interface BlogPostTemplateProps {
  post: BlogPostContent
  relatedPosts: BlogPost[]
}

const BlogPostContent = ({ metadata, content }: { metadata: BlogPost; content: string }) => {
  return (
    <div>
      {metadata.status !== "published" && (
        <div className={`mb-8 p-6 rounded-lg border-l-4 ${
          metadata.status === "draft"
            ? "bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-400"
            : "bg-gradient-to-r from-gray-50 to-slate-50 border-gray-400"
        }`}>
          <div className="flex items-center">
            <span className={`px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-full ${
              metadata.status === "draft" ? "bg-blue-500 text-white shadow-md" : "bg-gray-500 text-white shadow-md"
            }`}>
              {metadata.status}
            </span>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-800">
                {metadata.status === "draft" ? "Artículo en desarrollo" : "Artículo archivado"}
              </p>
              <p className="text-xs text-gray-600 mt-1">
                {metadata.status === "draft"
                  ? "Este contenido puede estar incompleto o en revisión"
                  : "Este contenido ya no está activo"}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="prose prose-lg max-w-none text-gray-800">
        <Markdown>{content}</Markdown>
      </div>
    </div>
  )
}

export default function BlogPostTemplate({ post, relatedPosts }: BlogPostTemplateProps) {
  const [isSharing, setIsSharing] = useState(false)
  const { metadata, content } = post

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = `${metadata.title} - ${metadata.description}`

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
        <article className="w-full">
          <header className="w-full bg-white py-12 md:py-20">
            <div className="max-w-[900px] mx-auto px-4 space-y-6">
              <nav className="text-sm">
                <Link href="/blog" className="text-gray-500 hover:text-black transition-colors duration-200">Blog</Link>
                <span className="text-gray-400 mx-2">→</span>
                <span className="text-black">{metadata.title}</span>
              </nav>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span className="bg-black text-white px-3 py-1 font-bold uppercase tracking-wide">{metadata.category}</span>
                <time className="text-gray-500">{metadata.date}</time>
                <span className="text-gray-500">{metadata.readTime}</span>
                <span className="text-gray-500">Por {metadata.author}</span>
              </div>
              <h1 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight">
                {metadata.title}
              </h1>
              <p className="font-regular text-gray-600 text-lg md:text-xl leading-relaxed">{metadata.description}</p>
              <div className="flex flex-wrap gap-2">
                {metadata.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm hover:bg-gray-200 transition-colors duration-200">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {metadata.thumbnail && (
            <div className="w-full">
              <div className="max-w-[1200px] mx-auto px-4">
                <div className="relative aspect-[16/9] mb-12">
                  <Image src={metadata.thumbnail} alt={metadata.title} fill className="object-cover" priority />
                  <div className="absolute bottom-0 left-0 w-full h-2" style={{ backgroundColor: "#E2FFF7" }}></div>
                </div>
              </div>
            </div>
          )}

          <div className="w-full bg-white">
            <div className="max-w-[900px] mx-auto px-4 pb-20">
              <BlogPostContent metadata={metadata} content={content} />
            </div>
          </div>
        </article>

        {relatedPosts?.length > 0 && (
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
                  <article key={relatedPost.slug} className="bg-white shadow-md hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden transform hover:-translate-y-1">
                    <div className="relative aspect-[4/3]">
                      <Image src={relatedPost.thumbnail || "/placeholder.svg?height=300&width=400"} alt={relatedPost.title} fill className="object-cover" />
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
                        <Link href={`/blog/${relatedPost.slug}`} className="font-bold text-black text-sm hover:underline inline-flex items-center group">
                          Leer más
                          <svg className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </main>
      <Footer />
    </div>
  )
}
