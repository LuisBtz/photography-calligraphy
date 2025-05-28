import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import GalleryGrid from "@/components/gallery-grid"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Galería de Fotografía | Trabajos Destacados",
  description:
    "Explora mi colección de fotografías destacadas. Retratos, bodas, productos y más. Descubre mi estilo y visión artística.",
  keywords: "galería de fotos, fotografía monterrey, portafolio fotográfico, mejores fotos",
}

export default function GaleriaPage() {
  // Categories for filtering
  const categories = [
    { id: "all", name: "Todos" },
    { id: "retratos", name: "Retratos" },
    { id: "bodas", name: "Bodas" },
    { id: "productos", name: "Productos" },
    { id: "eventos", name: "Eventos" },
  ]

  // Gallery images with categories
  const galleryImages = [
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "Retrato artístico en estudio",
      category: "retratos",
      featured: true,
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Momento especial de boda",
      category: "bodas",
    },
    {
      src: "/placeholder.svg?height=500&width=500",
      alt: "Producto de joyería",
      category: "productos",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Retrato en exteriores",
      category: "retratos",
      featured: true,
    },
    {
      src: "/placeholder.svg?height=600&width=800",
      alt: "Celebración de boda",
      category: "bodas",
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "Retrato corporativo",
      category: "retratos",
    },
    {
      src: "/placeholder.svg?height=600&width=600",
      alt: "Producto cosmético",
      category: "productos",
      featured: true,
    },
    {
      src: "/placeholder.svg?height=500&width=700",
      alt: "Evento corporativo",
      category: "eventos",
    },
    {
      src: "/placeholder.svg?height=700&width=500",
      alt: "Retrato familiar",
      category: "retratos",
    },
    {
      src: "/placeholder.svg?height=600&width=900",
      alt: "Preparativos de boda",
      category: "bodas",
      featured: true,
    },
    {
      src: "/placeholder.svg?height=400&width=400",
      alt: "Producto tecnológico",
      category: "productos",
    },
    {
      src: "/placeholder.svg?height=600&width=400",
      alt: "Evento social",
      category: "eventos",
    },
    {
      src: "/placeholder.svg?height=500&width=500",
      alt: "Retrato artístico",
      category: "retratos",
    },
    {
      src: "/placeholder.svg?height=700&width=500",
      alt: "Detalles de boda",
      category: "bodas",
    },
    {
      src: "/placeholder.svg?height=500&width=700",
      alt: "Producto de moda",
      category: "productos",
    },
    {
      src: "/placeholder.svg?height=600&width=600",
      alt: "Evento cultural",
      category: "eventos",
      featured: true,
    },
  ]

  // Testimonials specifically about the photography quality
  const testimonials = [
    {
      text: "Las fotografías capturan exactamente la esencia de lo que buscábamos. Cada imagen cuenta una historia y refleja perfectamente nuestra personalidad.",
      author: "Elena y David",
      role: "Sesión de compromiso",
    },
    {
      text: "El ojo artístico y la atención al detalle son impresionantes. Logró capturar momentos que ni siquiera sabía que habían ocurrido.",
      author: "Marcela Rodríguez",
      role: "Sesión familiar",
    },
    {
      text: "Nuestros productos nunca se habían visto tan bien. Las fotos han aumentado nuestras ventas online en un 30% desde que las implementamos.",
      author: "Carlos Mendoza",
      role: "Dueño de marca",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full bg-black text-white">
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=800&width=1920"
              alt="Fotografía artística"
              fill
              className="object-cover opacity-50"
              priority
            />
          </div>

          <div className="relative z-10 max-w-[1100px] mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl">
              <h1 className="font-condensed-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight mb-6">
                Galería de trabajos destacados
              </h1>
              <div className="w-24 h-px bg-white mb-6"></div>
              <p className="font-regular text-white/90 text-lg md:text-xl leading-relaxed mb-8">
                Una selección cuidadosa de mis mejores fotografías. Cada imagen cuenta una historia única, capturada con
                pasión y precisión técnica para preservar momentos que perduran.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="bg-white text-black font-bold text-base px-8 py-4 hover:bg-gray-200 transition-colors duration-200"
                >
                  Reserva una sesión
                </Link>
                <Link
                  href="#gallery"
                  className="border-2 border-white text-white font-bold text-base px-8 py-4 hover:bg-white/10 transition-colors duration-200"
                >
                  Ver galería
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="w-full bg-white py-20">
          <div className="max-w-[1100px] mx-auto px-4">
            <GalleryGrid images={galleryImages} categories={categories} />
          </div>
        </section>

        {/* Services Highlight Section */}
        <section className="w-full bg-gray-50 py-20">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-4">
                Servicios fotográficos
              </h2>
              <p className="font-regular text-gray-600 text-lg max-w-2xl mx-auto">
                Descubre cómo puedo ayudarte a crear imágenes impactantes para tu proyecto personal o profesional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Sesiones fotográficas"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-condensed-black text-black text-xl mb-2">Sesiones personales</h3>
                  <p className="font-regular text-gray-600 text-base mb-4">
                    Retratos que capturan tu esencia única, perfectos para uso personal o profesional.
                  </p>
                  <Link href="/fotografia/sesiones" className="font-bold text-black inline-flex items-center group">
                    Ver detalles
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

              {/* Service Card 2 */}
              <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Fotografía de bodas"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-condensed-black text-black text-xl mb-2">Fotografía para bodas</h3>
                  <p className="font-regular text-gray-600 text-base mb-4">
                    Documentación artística de tu día especial, desde los preparativos hasta la celebración.
                  </p>
                  <Link href="/fotografia/boda-foto" className="font-bold text-black inline-flex items-center group">
                    Ver detalles
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

              {/* Service Card 3 */}
              <div className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Fotografía de producto"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-condensed-black text-black text-xl mb-2">Fotografía de producto</h3>
                  <p className="font-regular text-gray-600 text-base mb-4">
                    Imágenes profesionales que hacen que tus productos destaquen y vendan más.
                  </p>
                  <Link href="/fotografia/producto" className="font-bold text-black inline-flex items-center group">
                    Ver detalles
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

            <div className="text-center mt-12">
              <Link
                href="/fotografia"
                className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
              >
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full bg-black text-white py-20">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-condensed-black text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight mb-4">
                Lo que dicen mis clientes
              </h2>
              <div className="w-24 h-px bg-white mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm p-8">
                  <svg className="w-10 h-10 text-white/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="font-regular text-white/90 text-base italic mb-6">"{testimonial.text}"</p>
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="font-regular text-white/70 text-sm">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="w-full bg-white py-20">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                  ¿Listo para crear imágenes extraordinarias?
                </h2>
                <p className="font-regular text-gray-600 text-lg leading-relaxed">
                  Cada proyecto es único y merece un enfoque personalizado. Cuéntame sobre tu visión y trabajemos juntos
                  para hacerla realidad.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="font-regular">+52 81 1693 8801</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-regular">luisbttf@gmail.com</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    href="/contacto"
                    className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
                  >
                    Contactar ahora
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Sesión fotográfica en acción"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black/10 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
