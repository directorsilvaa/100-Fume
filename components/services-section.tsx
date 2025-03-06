"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Home, 
  Building2, 
  Shield, 
  Sun, 
  Palette,
  ArrowRight,
  ChevronRight,
  Star
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const handleWhatsAppClick = (service: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre o serviço de ${service.toLowerCase()}`);
    window.open(`https://wa.me/5575982104848?text=${message}`, '_blank');
  };

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-purple-400 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            NOSSOS SERVIÇOS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
            Soluções Completas para Seu Veículo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Oferecemos uma ampla gama de soluções para veículos, residências e empresas, 
            com foco em qualidade e satisfação do cliente.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  selectedCategory === category.id 
                    ? "bg-blue-700 hover:bg-blue-800 text-white" 
                    : "hover:border-blue-700 hover:text-blue-700"
                )}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card 
                  className={cn(
                    "group border-none overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white rounded-2xl",
                    hoveredService === index ? "ring-2 ring-blue-500" : ""
                  )}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <CardHeader className={cn(
                    "pb-2 relative z-10",
                    "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r",
                    service.color === "blue" && "after:from-blue-600 after:to-blue-400",
                    service.color === "green" && "after:from-emerald-600 after:to-emerald-400",
                    service.color === "amber" && "after:from-amber-600 after:to-amber-400",
                    service.color === "purple" && "after:from-purple-600 after:to-purple-400",
                    service.color === "red" && "after:from-red-600 after:to-red-400",
                    service.color === "indigo" && "after:from-indigo-600 after:to-indigo-400",
                  )}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors",
                        service.color === "blue" && "bg-blue-100 text-blue-700 group-hover:bg-blue-700 group-hover:text-white",
                        service.color === "green" && "bg-emerald-100 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white",
                        service.color === "amber" && "bg-amber-100 text-amber-700 group-hover:bg-amber-700 group-hover:text-white",
                        service.color === "purple" && "bg-purple-100 text-purple-700 group-hover:bg-purple-700 group-hover:text-white",
                        service.color === "red" && "bg-red-100 text-red-700 group-hover:bg-red-700 group-hover:text-white",
                        service.color === "indigo" && "bg-indigo-100 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white",
                      )}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-bold transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative h-52 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      <Image 
                        src={service.image} 
                        alt={service.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                      {service.rating && (
                        <div className="absolute bottom-4 left-4 z-20 flex items-center bg-white/90 rounded-full px-3 py-1 text-sm font-medium text-gray-900">
                          <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                          <span>{service.rating}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 line-clamp-3">
                        {service.longDescription}
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <Button 
                      variant="outline" 
                      className={cn(
                        "w-full border-2 transition-colors",
                        service.color === "blue" && "border-blue-200 hover:bg-blue-700 hover:text-white hover:border-blue-700",
                        service.color === "green" && "border-emerald-200 hover:bg-emerald-700 hover:text-white hover:border-emerald-700",
                        service.color === "amber" && "border-amber-200 hover:bg-amber-700 hover:text-white hover:border-amber-700",
                        service.color === "purple" && "border-purple-200 hover:bg-purple-700 hover:text-white hover:border-purple-700",
                        service.color === "red" && "border-red-200 hover:bg-red-700 hover:text-white hover:border-red-700",
                        service.color === "indigo" && "border-indigo-200 hover:bg-indigo-700 hover:text-white hover:border-indigo-700",
                      )}
                      onClick={() => handleWhatsAppClick(service.title)}
                    >
                      Saiba mais <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center">
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-70 group-hover:opacity-100 blur transition duration-300" />
            <Button 
              className="relative bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 h-auto text-lg font-medium"
              onClick={() => handleWhatsAppClick('todos os serviços')}
            >
              Ver todos os serviços
              <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const categories = [
  { id: "all", name: "Todos", icon: <Sun className="h-4 w-4" /> },
  { id: "auto", name: "Automotivo", icon: <Car className="h-4 w-4" /> },
  { id: "residential", name: "Residencial", icon: <Home className="h-4 w-4" /> },
  { id: "commercial", name: "Comercial", icon: <Building2 className="h-4 w-4" /> }
];

const services = [
  {
    icon: <Car className="h-7 w-7" />,
    title: "Películas Automotivas",
    description: "Proteção solar e privacidade",
    color: "blue",
    category: "auto",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1619883096330-d2f5e0a4d992?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    longDescription: "Nossas películas automotivas oferecem proteção contra raios UV, redução de calor e maior privacidade, além de um visual elegante para seu veículo. Trabalhamos com as melhores marcas do mercado."
  },
  {
    icon: <Palette className="h-7 w-7" />,
    title: "Envelopamento",
    description: "Transforme o visual do seu veículo",
    color: "amber",
    category: "auto",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    longDescription: "Com nosso serviço de envelopamento, você pode mudar completamente a cor e o estilo do seu veículo sem danificar a pintura original, com opções de cores e acabamentos personalizados."
  },
  {
    icon: <Shield className="h-7 w-7" />,
    title: "Proteção de Pintura",
    description: "Mantenha seu veículo como novo",
    color: "green",
    category: "auto",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    longDescription: "Nossa película de proteção de pintura (PPF) protege seu veículo contra arranhões, lascas, manchas e danos causados por pedras e detritos da estrada, preservando o valor do seu investimento."
  },
  {
    icon: <Home className="h-7 w-7" />,
    title: "Películas Residenciais",
    description: "Conforto e economia para sua casa",
    color: "purple",
    category: "residential",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    longDescription: "Nossas películas residenciais reduzem o calor, bloqueiam os raios UV e proporcionam maior privacidade, além de ajudar a economizar energia e proteger seus móveis contra desbotamento."
  },
  {
    icon: <Sun className="h-7 w-7" />,
    title: "Controle Solar",
    description: "Reduza o calor e proteja ambientes",
    color: "red",
    category: "commercial",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    longDescription: "Nossas soluções de controle solar ajudam a reduzir o calor, proteger contra raios UV e diminuir o ofuscamento, criando ambientes mais confortáveis e reduzindo custos com ar condicionado."
  },
  {
    icon: <Building2 className="h-7 w-7" />,
    title: "Comunicação Visual",
    description: "Destaque sua empresa no mercado",
    color: "indigo",
    category: "commercial",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    longDescription: "Oferecemos soluções completas de comunicação visual para empresas, incluindo fachadas, letreiros, adesivos e personalização de frotas, ajudando a fortalecer sua marca no mercado."
  }
];