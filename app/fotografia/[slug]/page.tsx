import { notFound } from "next/navigation"
import ServiceTemplate from "@/components/service-template"
import { getServiceBySlug, getAllServices } from "@/lib/markdown-loader"

export const dynamicParams = true;

interface ServicePageProps {
  params: {
    slug: string
  }
}

// ✅ Esto puede quedarse sin cambios si getAllServices es síncrona
// 👇 Esta función le dice a Next.js qué slugs generar
// 👇 Esta función le dice a Next.js qué slugs generar
export async function generateStaticParams() {
  const { getAllServiceSlugs } = await import('@/lib/markdown-loader');
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({ slug }));
}




// ✅ Cambiar esta función a async/await
export async function generateMetadata(props: ServicePageProps) {
  const { params } = props;
  const { slug } = await Promise.resolve(params); // 👈 Aquí también

  const { getServiceBySlug } = await import('@/lib/markdown-loader');
  const service = await getServiceBySlug(slug);

  if (!service) {
    return { title: 'Servicio no encontrado' };
  }

  return {
    title: service.title,
    description: service.description,
  };
}



export default async function ServicePage(props: ServicePageProps) {
  const { params } = props;
  const { slug } = await Promise.resolve(params); // 👈 Esto evita el warning

  const { getServiceBySlug } = await import('@/lib/markdown-loader');
  const serviceData = await getServiceBySlug(slug);

  if (!serviceData) {
    return <div>Servicio no encontrado</div>;
  }

  return <ServiceTemplate serviceData={serviceData} serviceId={slug} />;
}
