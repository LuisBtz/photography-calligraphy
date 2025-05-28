import { blogPostsMetadata } from "./blog-components"

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readTime: string
  category: string
  featured?: boolean
  thumbnail: string
  author: string
  tags: string[]
  status: "draft" | "published" | "archived"
  component: string
}

export function getAllBlogPosts(includeUnpublished = false): BlogPost[] {
  try {
    const posts = blogPostsMetadata
      .filter((post) => {
        // Filter by publication status
        if (!includeUnpublished && post.status !== "published") {
          return false
        }
        return true
      })
      .map((post) => ({
        ...post,
        component: post.slug,
      }))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  } catch (error) {
    console.error("Error loading blog posts:", error)
    return []
  }
}

export function getBlogPostBySlug(slug: string, includeUnpublished = false): BlogPost | null {
  try {
    const post = blogPostsMetadata.find((p) => p.slug === slug)

    if (!post) {
      return null
    }

    // Check publication status
    if (!includeUnpublished && post.status !== "published") {
      return null
    }

    return {
      ...post,
      component: post.slug,
    }
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error)
    return null
  }
}

export function getFeaturedBlogPosts(includeUnpublished = false): BlogPost[] {
  const allPosts = getAllBlogPosts(includeUnpublished)
  return allPosts.filter((post) => post.featured).slice(0, 3)
}

export function getBlogPostsByCategory(category: string, includeUnpublished = false): BlogPost[] {
  const allPosts = getAllBlogPosts(includeUnpublished)
  return allPosts.filter((post) => post.category === category)
}

export function getBlogPostsByStatus(status: "draft" | "published" | "archived"): BlogPost[] {
  const allPosts = getAllBlogPosts(true) // Include all statuses
  return allPosts.filter((post) => post.status === status)
}

export function getDraftBlogPosts(): BlogPost[] {
  return getBlogPostsByStatus("draft")
}

export function getArchivedBlogPosts(): BlogPost[] {
  return getBlogPostsByStatus("archived")
}
