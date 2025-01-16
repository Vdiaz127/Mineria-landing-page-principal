"use client";

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
  Users,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const divisions = [
    {
      title: "UNEG PowerTech",
      description: "Equipos y maquinaria avanzada para maximizar productividad",
      icon: <Cog className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "UNEG Essentials",
      description: "Herramientas de precisión diseñadas para minería moderna",
      icon: <HardHat className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "UNEG Consultores",
      description: "Asesoría en normativas legales y optimización administrativa",
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    },
    {
      title: "UNEG Innovate",
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
      title: "Presencia",
      value: "4 países",
      description: "Perú, Chile, México y Colombia",
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
      content: "UNEG-MINERÍA ha transformado completamente nuestra eficiencia operativa con su tecnología de vanguardia.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Ana María Vega",
      role: "Gerente de Proyectos, MinesTech",
      content: "La asesoría de UNEG Consultores fue fundamental para optimizar nuestros procesos administrativos.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Miguel Sánchez",
      role: "CEO, Minerales del Pacífico",
      content: "Las soluciones de UNEG Innovate nos permitieron modernizar nuestra infraestructura de manera sostenible.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1578319439584-104c94d37305?w=1920&h=1080&fit=crop"
          alt="Mining Technology"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Impulsando la Minería del Futuro en Latinoamérica
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Soluciones integrales en maquinaria, asesoría, herramientas y diseño
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Explora nuestras divisiones
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Contáctanos
            </Button>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-20 bg-gray-50">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p>+51 123 456 789</p>
              <p>contacto@uneg-mineria.com</p>
              <p>Av. Minería 123, Lima, Perú</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Divisiones</h3>
              <ul className="space-y-2">
                <li>UNEG PowerTech</li>
                <li>UNEG Essentials</li>
                <li>UNEG Consultores</li>
                <li>UNEG Innovate</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
              <ul className="space-y-2">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Consulta Rápida</h3>
              <form
                className="space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = {
                    email: e.target.email.value,
                    message: e.target.message.value,
                    source: "Landing Page Home",
                  };

                  const response = await fetch('/api', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                  });

                  if (response.ok) {
                    alert("Consulta enviada con éxito");
                    e.target.reset();
                  } else {
                    alert("Hubo un problema al enviar tu consulta");
                  }
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                  rows={3}
                  required
                />
                <input type="hidden" name="source" value="Landing Page Home" />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Enviar
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>© 2024 UNEG-MINERÍA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}