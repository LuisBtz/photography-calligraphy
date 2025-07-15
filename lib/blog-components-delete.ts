import type { ComponentType } from "react"

// Import all blog post components with correct paths
import ConsejosRetratosPost from "@/content/blog/consejos-retratos-perfectos"
import CaligrafiaModernaPost from "@/content/blog/caligrafia-moderna-eventos"
import FotografiaProductoPost from "@/content/blog/fotografia-producto-draft"
import GuiaCompletaPost from "@/content/blog/guia-completa-elementos-contenido"

// Component registry - maps slug to component
export const blogComponents: Record<string, ComponentType> = {
  "consejos-retratos-perfectos": ConsejosRetratosPost,
  "caligrafia-moderna-eventos": CaligrafiaModernaPost,
  "fotografia-producto-draft": FotografiaProductoPost,
  "guia-completa-elementos-contenido": GuiaCompletaPost,
}

// Helper function to get component by slug
export function getBlogComponent(slug: string): ComponentType | null {
  return blogComponents[slug] || null
}

// Blog post metadata
export const blogPostsMetadata = [
  {
    slug: "consejos-retratos-perfectos",
    title: "7 Consejos para Retratos Perfectos",
    description: "Aprende técnicas profesionales para capturar retratos que transmitan emoción y personalidad.",
    date: "2023-05-15",
    author: "Carlos Mendoza",
    category: "Fotografía",
    thumbnail: "/placeholder.svg?height=600&width=800&query=portrait+photography",
    readTime: "5 min",
    featured: false,
    status: "published" as const,
    tags: ["retratos", "fotografía", "técnicas"],
  },
  {
    slug: "caligrafia-moderna-eventos",
    title: "Caligrafía Moderna para Eventos",
    description:
      "Descubre cómo la caligrafía contemporánea puede transformar tus invitaciones y decoración de eventos.",
    date: "2023-06-22",
    author: "Carlos Mendoza",
    category: "Caligrafía",
    thumbnail: "/placeholder.svg?height=600&width=800&query=modern+calligraphy",
    readTime: "4 min",
    featured: false,
    status: "published" as const,
    tags: ["caligrafía", "eventos", "invitaciones"],
  },
  {
    slug: "fotografia-producto-draft",
    title: "Fotografía de Producto: Guía Completa",
    description: "Todo lo que necesitas saber para crear imágenes de producto profesionales que aumenten tus ventas.",
    date: "2023-07-10",
    author: "Carlos Mendoza",
    category: "Fotografía",
    thumbnail: "/placeholder.svg?height=600&width=800&query=product+photography",
    readTime: "8 min",
    featured: false,
    status: "published" as const,
    tags: ["producto", "fotografía", "comercial"],
  },
  {
    slug: "guia-completa-elementos-contenido",
    title: "Guía Completa de Elementos de Contenido",
    description: "Aprende a utilizar todos los elementos disponibles para crear contenido atractivo y profesional.",
    date: "2023-08-05",
    author: "Carlos Mendoza",
    category: "Consejos",
    thumbnail: "/placeholder.svg?height=600&width=800&query=content+creation",
    readTime: "10 min",
    featured: true,
    status: "published" as const,
    tags: ["contenido", "blog", "tutorial"],
  },
]
