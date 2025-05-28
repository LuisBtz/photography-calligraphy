import Link from "next/link"
import Image from "next/image"
import { getAllBlogPosts } from "@/lib/blog-loader"

export default function BlogSection() {
  const blogPosts = getAllBlogPosts().slice(0, 5) // Get first 5 published posts

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
            <article key={post.slug} className="group">
              <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-8">
                {/* Thumbnail */}
                <div className="col-span-6 md:col-span-4">
                  <Link href={`/blog/${post.slug}`}>
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
                  <Link href={`/blog/${post.slug}`}>
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
                      href={`/blog/${post.slug}`}
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
