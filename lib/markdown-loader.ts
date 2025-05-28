import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface ServiceData {
  title: string
  subtitle: string
  description: string
  longDescription: string
  price: string
  duration: string
  deliverables: string[]
  process: Array<{
    step: number
    title: string
    description: string
  }>
  gallery: Array<{
    src: string
    alt: string
  }>
  features: string[]
  testimonials?: Array<{
    text: string
    author: string
    role: string
    image: string
  }>
  faq: Array<{
    question: string
    answer: string
  }>
}

export interface ServiceMetadata {
  slug: string
  title: string
  subtitle: string
  description: string
  price: string
  duration: string
  category: string
  featured?: boolean
  order?: number
}

const servicesDirectory = path.join(process.cwd(), "content/services")

export function getAllServices(): ServiceMetadata[] {
  try {
    const fileNames = fs.readdirSync(servicesDirectory)
    const services = fileNames
      .filter((name) => name.endsWith(".md"))
      .map((name) => {
        const slug = name.replace(/\.md$/, "")
        const fullPath = path.join(servicesDirectory, name)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data } = matter(fileContents)

        return {
          slug,
          title: data.title,
          subtitle: data.subtitle,
          description: data.description,
          price: data.price,
          duration: data.duration,
          category: data.category || "fotografia",
          featured: data.featured || false,
          order: data.order || 999,
        }
      })
      .sort((a, b) => a.order - b.order)

    return services
  } catch (error) {
    console.error("Error loading services:", error)
    return []
  }
}

export function getServiceBySlug(slug: string): ServiceData | null {
  try {
    const fullPath = path.join(servicesDirectory, `${slug}.md`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    // Parse the markdown content sections
    const sections = parseMarkdownSections(content)

    return {
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      longDescription: sections.longDescription || data.description,
      price: data.price,
      duration: data.duration,
      deliverables: data.deliverables || [],
      process: data.process || [],
      gallery: data.gallery || [],
      features: data.features || [],
      testimonials: data.testimonials || [],
      faq: data.faq || [],
    }
  } catch (error) {
    console.error(`Error loading service ${slug}:`, error)
    return null
  }
}

function parseMarkdownSections(content: string): { longDescription?: string } {
  const sections: { longDescription?: string } = {}

  // Look for ## Long Description section
  const longDescMatch = content.match(/## Long Description\s*\n([\s\S]*?)(?=\n## |$)/)
  if (longDescMatch) {
    sections.longDescription = longDescMatch[1].trim()
  }

  return sections
}

export function getServicesByCategory(category: string): ServiceMetadata[] {
  const allServices = getAllServices()
  return allServices.filter((service) => service.category === category)
}
