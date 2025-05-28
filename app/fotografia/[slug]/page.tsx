import { notFound } from "next/navigation"
import ServiceTemplate from "@/components/service-template"
import { getServiceBySlug, getAllServices } from "@/lib/markdown-loader"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const services = getAllServices()
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Servicio no encontrado",
    }
  }

  return {
    title: `${service.title} - Fotografía Profesional en Monterrey`,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, fotografía monterrey, ${service.subtitle.toLowerCase()}`,
    openGraph: {
      title: `${service.title} - Fotografía Profesional en Monterrey`,
      description: service.description,
      type: "website",
      locale: "es_ES",
    },
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const serviceData = getServiceBySlug(params.slug)

  if (!serviceData) {
    notFound()
  }

  return <ServiceTemplate serviceData={serviceData} serviceId={params.slug} />
}
