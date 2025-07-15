import { notFound } from "next/navigation"
import { Metadata } from "next"
import BlogPostTemplate from "@/components/blog-post-template"
import { getPostContentBySlug, getAllBlogPosts } from "@/lib/blog-loader"

// ✅ Tipos
interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// ✅ Metadata dinámica
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const allPosts = await getAllBlogPosts()
  const post = allPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return { title: "Post no encontrado" }
  }

  return {
    title: `${post.title} | Blog de Fotografía`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.thumbnail, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.thumbnail],
    },
  }
}

// ✅ Genera las rutas estáticas
export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// ✅ Página del blog post
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostContentBySlug(params.slug)

  if (!post || post.metadata.status !== "published") {
    notFound()
  }

  const allPosts = await getAllBlogPosts()
  const relatedPosts = allPosts.filter(
    (p) => p.slug !== post.metadata.slug && p.category === post.metadata.category
  ).slice(0, 3)

  return <BlogPostTemplate post={post} relatedPosts={relatedPosts} />
}
