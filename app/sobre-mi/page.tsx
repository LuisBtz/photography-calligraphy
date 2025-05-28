import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function SobreMiPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section with Portrait */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-8 items-center">
              {/* Portrait Image */}
              <div className="col-span-6 md:col-span-5">
                <div className="relative">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=800&width=600"
                      alt="Retrato profesional"
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black/10 -z-10"></div>
                </div>
              </div>

              {/* Content */}
              <div className="col-span-6 md:col-span-7 space-y-8">
                <div className="space-y-6">
                  <h1 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[55px] leading-tight">
                    Hola, soy [Tu Nombre]
                  </h1>
                  <div className="space-y-4">
                    <div className="w-16 h-px bg-black"></div>
                    <p className="font-regular text-black text-lg md:text-xl leading-relaxed">
                      Fotógrafo y calígrafo apasionado por crear arte que trasciende el tiempo
                    </p>
                  </div>
                </div>

                <p className="font-regular text-gray-600 text-base leading-relaxed">
                  Mi viaje comenzó hace más de 8 años cuando descubrí que tanto la fotografía como la caligrafía
                  comparten algo fundamental: la capacidad de capturar emociones y preservar momentos únicos. Desde
                  entonces, he dedicado mi vida a perfeccionar ambas artes, creando un estilo distintivo que combina la
                  precisión técnica con la sensibilidad artística.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Section */}
        <section className="w-full bg-gray-50 py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-8">
              {/* Content */}
              <div className="col-span-6 md:col-span-6 space-y-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                    Mi pasión por la fotografía
                  </h2>
                  <div className="w-16 h-px bg-black"></div>
                </div>

                <div className="space-y-6">
                  <p className="font-regular text-gray-600 text-base leading-relaxed">
                    Cada fotografía que tomo es una historia esperando ser contada. Me especializo en capturar la
                    esencia auténtica de las personas, la belleza de los productos y la magia de los momentos
                    especiales.
                  </p>
                  <p className="font-regular text-gray-600 text-base leading-relaxed">
                    Mi enfoque va más allá de la técnica: busco crear conexiones emocionales que perduren en el tiempo.
                    Desde retratos íntimos hasta fotografía comercial, cada proyecto es una oportunidad de crear algo
                    extraordinario.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-condensed-black text-2xl text-black">500+</div>
                    <div className="font-regular text-sm text-gray-500">Sesiones realizadas</div>
                  </div>
                  <div>
                    <div className="font-condensed-black text-2xl text-black">8</div>
                    <div className="font-regular text-sm text-gray-500">Años de experiencia</div>
                  </div>
                  <div>
                    <div className="font-condensed-black text-2xl text-black">100%</div>
                    <div className="font-regular text-sm text-gray-500">Clientes satisfechos</div>
                  </div>
                </div>
              </div>

              {/* Photography Images */}
              <div className="col-span-6 md:col-span-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative aspect-[3/4]">
                      <Image
                        src="/placeholder.svg?height=400&width=300"
                        alt="Fotografía de retrato"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Fotografía de producto"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src="/placeholder.svg?height=300&width=400"
                        alt="Fotografía de evento"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-[3/4]">
                      <Image
                        src="/placeholder.svg?height=400&width=300"
                        alt="Fotografía artística"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calligraphy Section */}
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-8">
              {/* Calligraphy Images */}
              <div className="col-span-6 md:col-span-6 order-2 md:order-1">
                <div className="relative">
                  {/* Main calligraphy image */}
                  <div className="relative aspect-[4/3] mb-6">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Caligrafía artesanal"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Smaller images grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="relative aspect-square">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Invitación de boda"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Caligrafía personalizada"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Lettering artístico"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="col-span-6 md:col-span-6 space-y-8 flex flex-col justify-center order-1 md:order-2">
                <div className="space-y-6">
                  <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                    El arte de la caligrafía
                  </h2>
                  <div className="w-16 h-px bg-black"></div>
                </div>

                <div className="space-y-6">
                  <p className="font-regular text-gray-600 text-base leading-relaxed">
                    La caligrafía es donde mi alma encuentra su expresión más pura. Cada trazo es deliberado, cada letra
                    una pequeña obra de arte que lleva consigo la intención y el cuidado de quien la crea.
                  </p>
                  <p className="font-regular text-gray-600 text-base leading-relaxed">
                    Desde invitaciones de boda que marcan el inicio de una nueva historia, hasta piezas personalizadas
                    que celebran momentos únicos, mi caligrafía transforma palabras en arte tangible que perdura para
                    siempre.
                  </p>
                </div>

                {/* Quote */}
                <div className="border-l-4 border-black pl-6">
                  <p className="font-regular text-black text-lg italic leading-relaxed">
                    "Cada letra que escribo lleva un pedazo de mi corazón y la historia de quien la recibirá"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="w-full bg-black py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4">
            <div className="text-center space-y-8">
              <h2 className="font-condensed-black text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                Mi filosofía
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="font-regular text-gray-300 text-lg md:text-xl leading-relaxed">
                  Creo firmemente que tanto la fotografía como la caligrafía son formas de preservar la belleza del
                  momento presente. Mi misión es crear piezas que no solo documenten, sino que emocionen y conecten con
                  las personas a un nivel profundo.
                </p>
                <p className="font-regular text-gray-300 text-base leading-relaxed">
                  Cada proyecto es una colaboración única donde tu visión se encuentra con mi experiencia para crear
                  algo verdaderamente especial. No se trata solo de técnica, sino de entender la esencia de lo que
                  quieres comunicar y darle vida a través del arte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gray-50 py-20 md:py-32">
          <div className="max-w-[1100px] mx-auto px-4 text-center space-y-8">
            <h2 className="font-condensed-black text-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
              ¿Listo para crear algo extraordinario?
            </h2>
            <p className="font-regular text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Me encantaría conocer tu historia y ayudarte a darle vida a través de la fotografía y la caligrafía.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contacto"
                className="bg-black text-white font-bold text-base px-8 py-4 hover:bg-gray-800 transition-colors duration-200"
              >
                Solicitar cotización
              </a>
              <a
                href="/fotografia"
                className="border-2 border-black text-black font-bold text-base px-8 py-4 hover:bg-black hover:text-white transition-colors duration-200"
              >
                Ver mi trabajo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
