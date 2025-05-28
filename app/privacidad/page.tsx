import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export const metadata = {
  title: "Política de Privacidad | Fotografía y Caligrafía",
  description: "Conoce cómo protegemos y manejamos tu información personal en nuestros servicios de fotografía.",
}

export default function PrivacidadPage() {
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
                  Política de Privacidad
                </h1>
                <div className="flex justify-center">
                  <div className="w-24 h-px bg-black"></div>
                </div>
                <p className="font-regular text-gray-600 text-base">Última actualización: Enero 2024</p>
              </div>

              <div className="prose prose-lg max-w-none space-y-8">
                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">1. Información que Recopilamos</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Recopilamos información que nos proporcionas directamente cuando:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-regular text-gray-600">
                    <li>Completas formularios de contacto en nuestro sitio web</li>
                    <li>Solicitas cotizaciones para servicios fotográficos</li>
                    <li>Te suscribes a nuestro newsletter</li>
                    <li>Participas en sesiones fotográficas</li>
                    <li>Nos contactas por teléfono, email o redes sociales</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">2. Cómo Utilizamos tu Información</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Utilizamos la información recopilada para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-regular text-gray-600">
                    <li>Proporcionar y mejorar nuestros servicios fotográficos</li>
                    <li>Comunicarnos contigo sobre proyectos y servicios</li>
                    <li>Procesar pagos y gestionar contratos</li>
                    <li>Enviar actualizaciones sobre tu proyecto</li>
                    <li>Mejorar nuestro sitio web y experiencia del usuario</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">3. Protección de Fotografías</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Respetamos completamente tu privacidad en cuanto a las fotografías:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-regular text-gray-600">
                    <li>Solo utilizamos fotografías en nuestro portafolio con tu consentimiento explícito</li>
                    <li>Todas las galerías privadas están protegidas con contraseña</li>
                    <li>Puedes solicitar que retiremos tus fotografías de nuestro portafolio en cualquier momento</li>
                    <li>Las fotografías de bodas y eventos privados nunca se publican sin autorización</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">4. Compartir Información</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    No vendemos, intercambiamos o transferimos tu información personal a terceros, excepto:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-regular text-gray-600">
                    <li>Cuando sea necesario para completar una transacción que hayas solicitado</li>
                    <li>Para cumplir con la ley o responder a procesos legales</li>
                    <li>
                      Con proveedores de servicios que nos ayudan a operar nuestro negocio (bajo acuerdos de
                      confidencialidad)
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">5. Seguridad de Datos</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Implementamos medidas de seguridad apropiadas para proteger tu información personal:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-regular text-gray-600">
                    <li>Encriptación SSL para todas las transmisiones de datos</li>
                    <li>Almacenamiento seguro en servidores protegidos</li>
                    <li>Acceso limitado solo a personal autorizado</li>
                    <li>Copias de seguridad regulares y seguras</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">6. Tus Derechos</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">Tienes derecho a:</p>
                  <ul className="list-disc list-inside space-y-2 font-regular text-gray-600">
                    <li>Acceder a la información personal que tenemos sobre ti</li>
                    <li>Solicitar correcciones a tu información personal</li>
                    <li>Solicitar la eliminación de tu información personal</li>
                    <li>Retirar el consentimiento para el uso de tus fotografías</li>
                    <li>Recibir una copia de tu información en formato portable</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">7. Cookies y Tecnologías Similares</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Nuestro sitio web utiliza cookies para mejorar tu experiencia. Estas cookies nos ayudan a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-regular text-gray-600">
                    <li>Recordar tus preferencias</li>
                    <li>Analizar el tráfico del sitio web</li>
                    <li>Personalizar contenido</li>
                    <li>Mejorar la funcionalidad del sitio</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">8. Contacto</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Si tienes preguntas sobre esta Política de Privacidad o quieres ejercer tus derechos, contáctanos:
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

                <div className="space-y-4">
                  <h2 className="font-condensed-black text-black text-2xl">9. Cambios a esta Política</h2>
                  <p className="font-regular text-gray-600 leading-relaxed">
                    Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios
                    significativos publicando la nueva política en esta página y actualizando la fecha de "última
                    actualización".
                  </p>
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
