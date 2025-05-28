import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata = {
  title: "Términos de Uso | Fotografía y Caligrafía",
  description: "Conoce los términos y condiciones para el uso de nuestros servicios de fotografía y caligrafía.",
}

export default function TerminosPage() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <Navigation />
      <main className="pt-20">
        <section className="w-full bg-white py-20 md:py-32">
          <div className="max-w-[800px] mx-auto px-4">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="font-condensed-black text-black text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-tight">
                  Términos de Uso
                </h1>
                <div className="flex justify-center">
                  <div className="w-24 h-px bg-black"></div>
                </div>
                <p className="font-regular text-gray-600 text-base">Última actualización: Enero 2024</p>
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">1. Aceptación de Términos</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Al acceder y utilizar este sitio web y nuestros servicios, aceptas estar sujeto a estos Términos de
                    Uso. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros
                    servicios.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">2. Servicios Ofrecidos</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">Ofrecemos servicios profesionales de:</p>
                  <ul className="list-disc list-inside space-y-2 font-regular text-gray-600">
                    <li>Fotografía de retratos, bodas, eventos y productos</li>
                    <li>Caligrafía artística para eventos y proyectos personalizados</li>
                    <li>Consultoría en imagen y branding visual</li>
                    <li>Edición y retoque fotográfico profesional</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">3. Proceso de Contratación</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">Para contratar nuestros servicios:</p>
                  <ul className="list-disc list-inside space-y-2 font-regular text-gray-600">
                    <li>Solicita una cotización a través de nuestros canales oficiales</li>
                    <li>Revisaremos tu solicitud y te enviaremos una propuesta detallada</li>
                    <li>Una vez aceptada, se requiere un anticipo del 50% para reservar la fecha</li>
                    <li>Se firmará un contrato específico detallando todos los términos del servicio</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">4. Pagos y Facturación</h2>
                  <div className="space-y-3">
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Métodos de Pago:</strong> Aceptamos transferencias bancarias, efectivo, y tarjetas de
                      crédito/débito.
                    </p>
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Estructura de Pagos:</strong> 50% de anticipo para reservar la fecha, 50% restante al
                      momento de la entrega.
                    </p>
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Facturación:</strong> Todos los servicios incluyen factura fiscal mexicana.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">5. Derechos de Autor y Uso de Imágenes</h2>
                  <div className="space-y-3">
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Derechos del Cliente:</strong> Recibes derechos de uso personal y comercial de todas las
                      fotografías entregadas.
                    </p>
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Derechos del Fotógrafo:</strong> Retenemos los derechos de autor para uso en portafolio,
                      marketing y promoción, siempre respetando tu privacidad.
                    </p>
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Uso en Portafolio:</strong> Solo utilizamos fotografías en nuestro portafolio con
                      consentimiento explícito del cliente.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">6. Cancelaciones y Reprogramaciones</h2>
                  <div className="space-y-3">
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Cancelación por el Cliente:</strong> Con más de 48 horas de anticipación, el anticipo es
                      reembolsable. Cancelaciones de último momento pueden reprogramarse sin costo adicional.
                    </p>
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Cancelación por Fuerza Mayor:</strong> En caso de condiciones climáticas adversas o
                      emergencias, reprogramaremos sin costo adicional.
                    </p>
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Cancelación por el Fotógrafo:</strong> En caso de emergencia, se reembolsará el 100% del
                      anticipo y se ofrecerá reprogramación prioritaria.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">7. Entrega y Garantías</h2>
                  <div className="space-y-3">
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Tiempos de Entrega:</strong> Sesiones personales 7-10 días, bodas 2-3 semanas, productos
                      5-7 días.
                    </p>
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Formato de Entrega:</strong> Galería online privada con descarga en alta resolución.
                    </p>
                    <p className="font-regular text-gray-600 leading-relaxed">
                      <strong>Garantía de Satisfacción:</strong> Trabajamos hasta lograr tu completa satisfacción con el
                      resultado final.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">8. Limitación de Responsabilidad</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Nuestra responsabilidad se limita al valor del contrato. No somos responsables por:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-regular text-gray-600">
                    <li>Daños indirectos o consecuenciales</li>
                    <li>Pérdida de ganancias o oportunidades comerciales</li>
                    <li>Eventos fuera de nuestro control (fuerza mayor)</li>
                    <li>Fallas de terceros (venues, otros proveedores)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">9. Uso del Sitio Web</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Al utilizar nuestro sitio web, te comprometes a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-regular text-gray-600">
                    <li>Proporcionar información veraz y actualizada</li>
                    <li>No utilizar el sitio para actividades ilegales</li>
                    <li>Respetar los derechos de autor de todo el contenido</li>
                    <li>No intentar acceder a áreas restringidas del sitio</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">10. Modificaciones</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
                    vigor inmediatamente después de su publicación en el sitio web. Es tu responsabilidad revisar
                    periódicamente estos términos.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">11. Ley Aplicable</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta en los tribunales
                    competentes de Monterrey, Nuevo León.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">12. Contacto</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Para preguntas sobre estos términos, contáctanos:
                  </p>
                  <div className="bg-gray-50 p-6 space-y-2">
                    <p className="font-regular text-gray-600">
                      <strong>Email:</strong> hola@tuemail.com
                    </p>
                    <p className="font-regular text-gray-600">
                      <strong>Teléfono:</strong> +52 81 1234 5678
                    </p>
                    <p className="font-regular text-gray-600">
                      <strong>Dirección:</strong> Monterrey, Nuevo León, México
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
