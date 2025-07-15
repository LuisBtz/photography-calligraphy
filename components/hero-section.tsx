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
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      <div className="relative max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-8">
          {/* Left Section - 6 columns */}
          <div className="col-span-6 space-y-6 md:space-y-8">
            {/* Nombre del fotógrafo */}
            <div className="inline-block">
              <span className="bg-black text-white px-4 py-2 text-sm md:text-base font-regular">Luis Benítez</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight">
              Fotografía profesional en Monterrey
            </h1>

            {/* Caption with lines */}
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="w-full h-px bg-black"></div>
                <p className="font-regular text-black text-lg sm:text-xl md:text-2xl lg:text-[24px] text-left">
                  Historias visuales que tocan el corazón.
                </p>
                <div className="w-full h-px bg-black"></div>
              </div>
            </div>

            {/* Description */}
            <p className="font-regular text-black text-sm sm:text-base md:text-base lg:text-[16px] leading-relaxed">
              Cada sesión es una oportunidad para conectar contigo y tu historia. Me especializo en retratos naturales y fotografía de eventos íntimos con un enfoque auténtico y personal.
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
            <div className="aspect-[4/5] relative">
              <Image
                src="/home/hero-2.webp"
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
