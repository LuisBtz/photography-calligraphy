"use client"

import { useState } from "react"

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "¿En qué ciudades ofrecen servicios?",
          answer:
            "Principalmente trabajo en Monterrey y su área metropolitana. Sin embargo, también acepto proyectos en otras ciudades de México. Para eventos fuera de Monterrey, se incluyen gastos de viaje en la cotización.",
        },
        {
          question: "¿Cuánto tiempo toma recibir las fotografías?",
          answer:
            "El tiempo de entrega varía según el tipo de servicio: sesiones personales 7-10 días, bodas 2-3 semanas, y fotografía de producto 5-7 días. Siempre entrego antes de la fecha prometida.",
        },
        {
          question: "¿Qué incluye el precio de los servicios?",
          answer:
            "Cada servicio incluye la sesión fotográfica, edición profesional, galería online privada, y las fotografías en alta resolución. Los detalles específicos varían por paquete y se especifican en cada cotización.",
        },
        {
          question: "¿Puedo solicitar fotos adicionales?",
          answer:
            "Sí, siempre puedes solicitar fotografías adicionales. El costo varía dependiendo del tipo de edición requerida. Te proporciono una cotización transparente para cualquier trabajo extra.",
        },
      ],
    },
    {
      category: "Sesiones Fotográficas",
      questions: [
        {
          question: "¿Qué debo llevar a mi sesión?",
          answer:
            "Te envío una guía completa de preparación que incluye sugerencias de vestuario, accesorios, y tips para lucir mejor en cámara. También coordinamos los detalles específicos según el tipo de sesión.",
        },
        {
          question: "¿Las sesiones pueden ser en exteriores?",
          answer:
            "¡Por supuesto! Ofrezco sesiones tanto en estudio como en exteriores. Tengo varias locaciones favoritas en Monterrey, o podemos elegir un lugar que sea especial para ti.",
        },
        {
          question: "¿Qué pasa si llueve el día de la sesión?",
          answer:
            "Si el clima no coopera, podemos reprogramar sin costo adicional o movernos a una locación interior. Tu comodidad y las mejores condiciones para las fotos son mi prioridad.",
        },
        {
          question: "¿Puedo traer acompañantes a la sesión?",
          answer:
            "Sí, puedes traer a una persona de confianza que te ayude a sentirte cómodo/a. Para sesiones familiares o de pareja, obviamente todos los involucrados son bienvenidos.",
        },
      ],
    },
    {
      category: "Bodas y Eventos",
      questions: [
        {
          question: "¿Incluye la fotografía de preparativos?",
          answer:
            "Sí, todos los paquetes de boda incluyen cobertura de preparativos tanto de la novia como del novio, generalmente comenzando 2-3 horas antes de la ceremonia.",
        },
        {
          question: "¿Trabajan con otros proveedores?",
          answer:
            "Tengo experiencia trabajando con wedding planners, videógrafos, y otros proveedores. Me coordino perfectamente con tu equipo para asegurar que todo fluya sin problemas.",
        },
        {
          question: "¿Qué pasa si se extiende la celebración?",
          answer:
            "Los paquetes incluyen hasta 10 horas de cobertura. Si necesitas tiempo adicional, podemos acordar una tarifa por hora extra muy accesible que se define previamente.",
        },
        {
          question: "¿Tienen experiencia en nuestro venue?",
          answer:
            "He trabajado en la mayoría de los venues populares en Monterrey. Si es un lugar nuevo para mí, hago una visita previa sin costo para familiarizarme con la locación.",
        },
      ],
    },
    {
      category: "Fotografía de Producto",
      questions: [
        {
          question: "¿Cuántos productos pueden fotografiar en una sesión?",
          answer:
            "Depende de la complejidad de cada producto, pero típicamente puedo fotografiar 3-5 productos similares en una sesión de 2-4 horas. Para productos complejos, podemos ajustar el timeline.",
        },
        {
          question: "¿Las fotos están listas para e-commerce?",
          answer:
            "Absolutamente. Entrego las imágenes en los tamaños y formatos optimizados para las principales plataformas como Shopify, Amazon, MercadoLibre, etc.",
        },
        {
          question: "¿Incluye el styling de los productos?",
          answer:
            "Sí, incluyo styling básico y props cuando es necesario. Para productos que requieren styling especializado (como comida), podemos coordinar con un especialista.",
        },
        {
          question: "¿Pueden fotografiar productos muy pequeños o muy grandes?",
          answer:
            "Sí, tengo equipo especializado para fotografía macro (productos pequeños como joyería) y también puedo manejar productos grandes en mi estudio o en locación.",
        },
      ],
    },
    {
      category: "Pagos y Políticas",
      questions: [
        {
          question: "¿Cómo funcionan los pagos?",
          answer:
            "Solicito un anticipo del 50% para reservar la fecha, y el resto se paga al momento de la entrega. Acepto transferencias bancarias, efectivo, y tarjetas de crédito/débito.",
        },
        {
          question: "¿Qué pasa si necesito cancelar?",
          answer:
            "Entiendo que pueden surgir imprevistos. Si cancelas con más de 48 horas de anticipación, el anticipo es reembolsable. Para cancelaciones de último momento, podemos reprogramar sin costo adicional.",
        },
        {
          question: "¿Ofrecen garantía en su trabajo?",
          answer:
            "Sí, ofrezco garantía de satisfacción 100%. Si no estás completamente satisfecho con el resultado, trabajamos juntos hasta lograr exactamente lo que buscas.",
        },
        {
          question: "¿Los derechos de las fotos son míos?",
          answer:
            "Sí, recibes los derechos de uso personal y comercial de todas las fotografías entregadas. Yo retengo los derechos de autor para uso en mi portafolio y marketing.",
        },
      ],
    },
  ]

  const toggleFaq = (categoryIndex: number, questionIndex: number) => {
    const faqIndex = categoryIndex * 1000 + questionIndex
    setOpenFaq(openFaq === faqIndex ? null : faqIndex)
  }

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="space-y-12">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h2 className="font-condensed-black text-black text-2xl md:text-3xl lg:text-[32px] leading-tight">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const faqIndex = categoryIndex * 1000 + questionIndex
                  const isOpen = openFaq === faqIndex
                  return (
                    <div key={questionIndex} className="border-b border-gray-200">
                      <button
                        className="w-full py-6 text-left flex justify-between items-start group"
                        onClick={() => toggleFaq(categoryIndex, questionIndex)}
                      >
                        <span className="font-bold text-black text-base md:text-lg leading-relaxed pr-4 group-hover:text-gray-700 transition-colors duration-200">
                          {faq.question}
                        </span>
                        <svg
                          className={`w-6 h-6 text-gray-500 transition-transform duration-300 flex-shrink-0 mt-1 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? "max-h-96 pb-6" : "max-h-0"
                        }`}
                      >
                        <p className="font-regular text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
