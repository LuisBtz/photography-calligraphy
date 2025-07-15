import fs from "node:fs/promises"
import path from "node:path"
import matter from "gray-matter"

const blogDirectory = path.join(process.cwd(), "content", "blog")

export interface BlogPostMetadata {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  thumbnail: string
  readTime: string
  featured: boolean
  status: "published" | "draft"
  tags: string[]
}

export interface BlogPost {
  metadata: BlogPostMetadata
  content: string
}

export async function getAllBlogPosts(): Promise<BlogPostMetadata[]> {
  const files = await fs.readdir(blogDirectory)
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (file) => {
        const slug = file.replace(/\.md$/, "")
        const filePath = path.join(blogDirectory, file)
        const fileContent = await fs.readFile(filePath, "utf8")
        const { data } = matter(fileContent)
        return {
          slug,
          ...(data as Omit<BlogPostMetadata, "slug">),
        }
      })
  )
  return posts
}

export async function getPostContentBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(blogDirectory, `${slug}.md`)
    const fileContent = await fs.readFile(filePath, "utf8")
    const { data, content } = matter(fileContent)
    return {
      metadata: {
        slug,
        ...(data as Omit<BlogPostMetadata, "slug">),
      },
      content,
    }
  } catch {
    return null
  }
}
