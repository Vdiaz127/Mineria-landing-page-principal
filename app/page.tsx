"use client";
import { Toaster, toast } from 'sonner';
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Building2,
  Cog,
  GraduationCap,
  HardHat,
  Lightbulb,
  MapPin,
  Trophy,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Script from 'next/script';


export default function Home() {
  
  // Especifica el tipo de elemento HTML para las referencias
  const divisionsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Funciones para desplazarse a las secciones
  const scrollToDivisions = () => {
    divisionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const divisions = [
    {
      title: "LSM PowerTech",
      description: "Equipos y maquinaria avanzada para maximizar productividad",
      icon: <Cog className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "LSM Essentials",
      description: "Herramientas de precisión diseñadas para minería moderna",
      icon: <HardHat className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "LSM Consultores",
      description: "Asesoría en normativas legales y optimización administrativa",
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "LSM Innovate",
      description: "Soluciones innovadoras en diseño arquitectónico y de infraestructura minera",
      icon: <Lightbulb className="w-12 h-12 text-blue-600" />,
    },
  ];

  const achievements = [
    {
      title: "Empresa Ejemplar del Año (2024)",
      description: "Reconocimiento a la excelencia empresarial",
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Premio al Cuidado del Medioambiente",
      description: "Compromiso con la sostenibilidad",
      icon: <Trophy className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Reconocimiento a la Innovación",
      description: "Líderes en minería sostenible",
      icon: <Trophy className="w-8 h-8 text-blue-500" />,
    },
  ];

  const stats = [
    {
      title: "Empleados",
      value: "5,000+",
      description: "Profesionales especializados",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "En todos los continentes", 
      value: "Asociaciones",
      description: "Contamos con una red global de aliados estratégicos", 
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Valor en bolsa",
      value: "$1.2B",
      description: "Capitalización de mercado",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
    },
  ];

  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Director de Operaciones, Minera del Sur",
      content: "Latin Silver Mines ha transformado completamente nuestra eficiencia operativa con su tecnología de vanguardia.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Ana María Vega",
      role: "Gerente de Proyectos, MinesTech",
      content: "La asesoría de Latin Silver Mines Consultores fue fundamental para optimizar nuestros procesos administrativos.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Miguel Sánchez",
      role: "CEO, Minerales del Pacífico",
      content: "Las soluciones de Latin Silver Mines Innovate nos permitieron modernizar nuestra infraestructura de manera sostenible.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  ];

  return (
    
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden"> 
        <Image
          src="/images/fondo-minera2.webp"
          alt="Mining Technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Latin Silver Mines Ltd.
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Impulsando la Minería del Futuro en Latinamérica
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Soluciones integrales en maquinaria, asesoría, herramientas y diseño
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={scrollToDivisions}>
              Explora nuestras divisiones
            </Button>
            <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/70" onClick={scrollToContact}>
              Contáctanos
            </Button>
          </div>
        </div>
      </section>


      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">¿Quiénes somos?</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              En Latin Silver Mines , somos una empresa líder en Latinamérica especializada en soluciones integrales para la industria minera. Con más de una década de experiencia, combinamos innovación tecnológica, excelencia en servicios y un compromiso con el desarrollo sostenible. Nuestro objetivo es transformar la minería mediante herramientas avanzadas, asesoría estratégica y diseños vanguardistas que impulsen la productividad y el cuidado del medioambiente.
            </p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Estamos presentes en Venezuela, Perú, Chile, México y Colombia, apoyando a empresas mineras a optimizar sus operaciones y superar los desafíos del sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-blue-50 border-none hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Target className="w-12 h-12 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-center text-blue-800">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  Proveer soluciones integrales y sostenibles que transformen la industria minera en Latinamérica, combinando tecnología avanzada, asesoría experta y diseños innovadores para maximizar la eficiencia operativa y el desarrollo responsable.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-none hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Lightbulb className="w-12 h-12 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-center text-blue-800">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-center leading-relaxed">
                  Ser reconocidos como el socio estratégico líder en la transformación de la minería en Latinamérica, destacándonos por nuestra innovación, compromiso ambiental y excelencia en el servicio, creando un impacto positivo en las comunidades y el sector industrial.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* International Presence Section */}
      <section className="relative py-32">
        <Image
          src="/images/presencia.webp"
          alt="Presencia en Venezuela, Perú, Chile, México y Colombia"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Sedes en 5 Países</h2>
          <p className="text-2xl font-light">Venezuela, Perú, Chile, México y Colombia</p>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-20 bg-gray-50" ref={divisionsRef}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Nuestras Divisiones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {divisions.map((division, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{division.icon}</div>
                  <CardTitle className="text-xl text-center">{division.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{division.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Reconocimientos que Respaldan Nuestra Excelencia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">{achievement.icon}</div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                <h4 className="text-xl mb-2">{stat.title}</h4>
                <p className="text-blue-100">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="mx-4">
                    <CardContent className="flex flex-col items-center p-6">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={96}
                          height={96}
                          className="object-cover"
                        />
                      </div>
                      <p className="text-lg text-center mb-4">{testimonial.content}</p>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

       {/* Contact Section */}
       <section className="py-20 bg-gray-100" ref={contactRef}>
       <Toaster position="bottom-center"/>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4">¿Estás interesado en nuestros servicios?</h2>
            <p className="text-lg text-gray-700">
              Contáctanos y te responderemos lo antes posible.
            </p>
          </div>
          <form
            className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;

              const formData = {
                email: (form.email as HTMLInputElement).value,
                message: (form.message as HTMLTextAreaElement).value,
                source: "Landing Page Contact Section",
              };

              const response = await fetch("/api", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });

              if (response.ok) {
                toast.success("Consulta enviada con éxito");
                form.reset();
              } else {
                toast.error("Hubo un problema al enviar tu consulta");
              }
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              className="w-full p-3 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            />
            <input type="hidden" name="source" value="Landing Page Contact Section" />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
              Enviar
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-4">Informacion adicional de contacto</h3>
              <p>+51 123 456 789</p>
              <p>contacto@LSM.com</p>
              <p>Edificio General de Seguros, Avenida Las Américas, Puerto Ordaz, Estado Bolívar - Venezuela</p>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-4">Divisiones</h3>
              <ul className="space-y-2">
                <li>LSM PowerTech</li>
                <li>LSM Essentials</li>
                <li>LSM Consultores</li>
                <li>LSM Innovate</li>
              </ul>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
              <ul className="space-y-2">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>© 2025 Latin Silver Mines Ltd. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>


      {/* Scripts del Chatbot */}
      <div className="fixed bottom-4 right-4 z-50">
      <Script 
          src="https://cdn.botpress.cloud/webchat/v2.2/inject.js" 
          strategy="lazyOnload" 
          onLoad={() => console.log('Script de Botpress cargado.')} 
        />
        <Script 
          src="https://files.bpcontent.cloud/2025/01/22/01/20250122015906-R8A5XB8X.js" 
          strategy="lazyOnload" 
          onLoad={() => console.log('Script adicional del chatbot cargado.')} 
        />
      </div>
     
    
    </main>
  );
}