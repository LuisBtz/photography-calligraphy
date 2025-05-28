import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-32">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-4 md:gap-8 items-center">
          {/* Left Section - Portrait Image - 4 columns */}
          <div className="col-span-6 md:col-span-4">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Retrato del fotógrafo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Gap - 1 column on desktop, none on mobile */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Right Section - Content - 7 columns */}
          <div className="col-span-6 md:col-span-7 space-y-6">
            {/* Heading */}
            <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
              Sobre mi
            </h2>

            {/* Description */}
            <p className="font-regular text-black text-base lg:text-[16px] leading-relaxed">
              Soy un fotógrafo y calígrafo apasionado por capturar momentos y crear piezas únicas a mano. Combino la
              sensibilidad del arte escrito con la fuerza de la imagen para contar historias auténticas, ya sea a través
              de una cámara o de un trazo. Mi misión es ayudarte a preservar tus recuerdos más importantes y darles vida
              con un toque personal y elegante.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
