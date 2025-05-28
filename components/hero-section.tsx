import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-20 md:py-32"
      style={{
        backgroundImage: "url('/home/hero-bg.jpg')",
      }}
    >
      {/* Background overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>

      <div className="relative max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-8">
          {/* Left Section - 6 columns */}
          <div className="col-span-6 space-y-6 md:space-y-8">
            {/* Main Heading */}
            <h1 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight">
              Fotografía & Caligrafía en Monterrey
            </h1>

            {/* Caption with lines */}
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="w-full h-px bg-black"></div>
                <p className="font-regular text-black text-lg sm:text-xl md:text-2xl lg:text-[24px] text-center">
                  Captura emociones, escribe memorias.
                </p>
                <div className="w-full h-px bg-black"></div>
              </div>
            </div>

            {/* Description */}
            <p className="font-regular text-black text-sm sm:text-base md:text-base lg:text-[16px] leading-relaxed">
              Ya sea a través del lente o la tinta, doy vida a tus momentos más importantes. Retratos únicos, productos
              irresistibles y caligrafía artesanal para bodas, eventos y detalles personalizados. Cada imagen y cada
              letra cuentan tu historia con estilo.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="/fotografia"
                className="inline-block bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
              >
                Explorar opciones
              </Link>
            </div>
          </div>

          {/* Gap - 1 column on desktop, none on mobile */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Right Section - 5 columns on desktop, full width on mobile */}
          <div className="col-span-6 md:col-span-5 mt-8 md:mt-0">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] w-full">
              <Image
                src="/home/main.webp"
                alt="Fotografía profesional"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
