import Image from "next/image"
import Link from "next/link"

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-8">
          {/* Left Product - Fotografía */}
          <div className="col-span-6 space-y-6">
            {/* Title */}
            <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
              Fotografía
            </h2>

            {/* Image */}
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Fotografía profesional"
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <p className="font-regular text-black text-base lg:text-[16px] leading-relaxed">
              Capturo la esencia de personas, productos y momentos con una mirada artística y precisión técnica.
              Retratos auténticos, productos que inspiran y eventos que se recuerdan.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/fotografia"
                className="inline-block bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
              >
                Explorar fotografía
              </Link>
            </div>
          </div>

          {/* Right Product - Caligrafía */}
          <div className="col-span-6 space-y-6">
            {/* Title */}
            <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
              Caligrafía
            </h2>

            {/* Image */}
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/home/cali-1.JPG"
                alt="Caligrafía artesanal"
                fill
                className="object-cover"
              />
            </div>

            {/* Description */}
            <p className="font-regular text-black text-base lg:text-[16px] leading-relaxed">
              Diseño letras a mano para invitaciones, eventos y piezas personalizadas, combinando arte y detalle en cada
              trazo. Tu mensaje merece ser único. Hazlo inolvidable con caligrafía artesanal.
            </p>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/caligrafia"
                className="inline-block bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
              >
                Explorar caligrafía
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
