
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas." subheadline="Digitaliza tu negocio con una web lista en un día y soporte ininterrumpido." cta1="Empieza Ahora" />
<How step1Title="Contáctanos" step1Desc="Habla con nosotros sobre tu negocio." step2Title="Creamos tu web" step2Desc="Desarrollamos una tienda online en 24 horas." step3Title="Vende rápido" step3Desc="Comienza a vender online con soporte 24/7." />
<Aboutus headline="WebGo: Ventas Digitales Sin Esfuerzo" subheadline="Transforma recomendaciones en ventas online sin complicaciones ni tiempo extra." beneficiotitulo1="Automatización Total" beneficio1="Gestiona ventas sin esfuerzo ni tiempo." beneficiotitulo2="Proyección Asegurada" beneficio2="Diferénciate y escala tu negocio." />
<Services heading="Transforma Recomendaciones en Ingresos" description="Digitalizamos tus ventas sin complicaciones ni pérdida de tiempo." services={[{"name":"Desarrollo Express","icon":"rocket","description":"Web lista en 24 horas, garantizado."},{"name":"SEO Optimización","icon":"search","description":"Atrae clientes con búsqueda orgánica."},{"name":"Gestión de Contenidos","icon":"content","description":"Contenido que engancha y vende."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"Integración E-commerce","icon":"cart","description":"Vende online fácilmente."},{"name":"Marketing Digital","icon":"bullhorn","description":"Llega a más clientes potenciales."}]} />
<BeforeAndAfter subheadline="Transformamos tus ideas en sitios web impactantes y memorables." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a vender en línea si solo vendo por recomendaciones?","respuesta":"WebGo transforma tus recomendaciones en ventas en línea. Creamos un sitio web atractivo y fácil de usar que muestra tus productos o servicios. Así, tus clientes actuales pueden compartir tus productos fácilmente, y nuevos clientes pueden encontrarte y comprar en línea sin complicaciones."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo lo soluciona WebGo?","respuesta":"En WebGo, nos encargamos de todo. Diseñamos, gestionamos y actualizamos tu sitio web por ti, para que puedas concentrarte en lo que haces mejor: tu negocio. Olvídate del estrés técnico, nosotros lo hacemos por ti."},{"pregunta":"¿Qué beneficios obtendré al digitalizar mis ventas con WebGo?","respuesta":"Con WebGo, ampliarás tu alcance más allá de las recomendaciones. Ganarás nuevos clientes a través de un sitio web optimizado para SEO, aumentando tus ventas y presencia en línea sin esfuerzo adicional."},{"pregunta":"¿Cómo WebGo me ayuda a generar ventas online si no sé cómo hacerlo?","respuesta":"WebGo te guía en cada paso. Creamos una estrategia digital personalizada y un sitio web optimizado que atrae tráfico y convierte visitas en ventas. Así, puedes empezar a vender online sin necesidad de ser un experto."},{"pregunta":"¿Qué hace diferente a WebGo de otras empresas de diseño web?","respuesta":"WebGo se especializa en pequeños negocios como el tuyo. No solo diseñamos sitios web, sino que también te ayudamos a generar ventas con estrategias probadas y soporte continuo para que siempre estés un paso adelante en el mundo digital."}]} />
<BookAppointment 
                      heading="Digitaliza Tus Ventas y Multiplica Tus Ingresos" 
                      description="Transforma tu negocio tradicional en una máquina de ventas online con WebGo. Deja las recomendaciones atrás y domina el mundo digital hoy mismo."
                      formPostUrl="api/contact-us"
                      projectId="XAY2l9jo5jTGpTKCg4Hn"
                    />
<Footer />
    </main>
  );
}
