"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Car, Building, Package, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("car");
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const handleWhatsAppClick = (category: string) => {
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre os serviços de ${category.toLowerCase()}`);
    window.open(`https://wa.me/5575982104848?text=${message}`, '_blank');
  };

  return (
    <div className="py-24 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            ÁREAS DE ATUAÇÃO
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
            Soluções Completas para Todas as Necessidades
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Conheça nossas principais áreas de atuação e descubra como podemos 
            atender às suas necessidades específicas com excelência.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                className={cn(
                  "gap-2 text-lg font-medium px-6 py-6 h-auto rounded-full transition-all duration-300 relative overflow-hidden",
                  activeCategory === category.id 
                    ? "bg-blue-700 hover:bg-blue-800 text-white shadow-lg" 
                    : "border-2 border-blue-200 text-blue-700 hover:border-blue-700 hover:bg-blue-50"
                )}
                onClick={() => setActiveCategory(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {category.icon}
                {category.name}
                {hoveredCategory === category.id && (
                  <motion.div
                    layoutId="hoverBackground"
                    className="absolute inset-0 bg-blue-100 opacity-20"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              {categories.map((category) => (
                activeCategory === category.id && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-3xl font-bold text-blue-900">{category.title}</h3>
                    <p className="text-lg text-gray-600">{category.description}</p>
                    
                    <div className="space-y-4 mt-8">
                      {category.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 group"
                        >
                          <div className="bg-blue-100 text-blue-700 rounded-full p-1 mt-1 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                              {feature.title}
                            </h4>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Button 
                        className="mt-6 bg-blue-700 hover:bg-blue-800 text-white rounded-full px-6 py-6 h-auto text-lg font-medium group"
                        onClick={() => handleWhatsAppClick(category.name)}
                      >
                        Saiba mais sobre {category.name.toLowerCase()}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
          
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              {categories.map((category) => (
                activeCategory === category.id && (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-300"
                    />
                    <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 group-hover:scale-[1.02]">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-2xl transform transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <motion.div 
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-70 group-hover:opacity-100 blur transition duration-300" />
            <Button 
              className="relative bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 py-6 h-auto text-lg font-medium group"
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
  {
    id: "car",
    name: "Carro",
    icon: <Car className="h-6 w-6" />,
    title: "Soluções Completas para Veículos",
    description: "Oferecemos uma ampla gama de serviços para personalização, proteção e valorização do seu veículo, utilizando materiais de alta qualidade e técnicas avançadas de aplicação.",
    image: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        title: "Películas Automotivas",
        description: "Proteção solar, privacidade e conforto térmico para seu veículo."
      },
      {
        title: "Envelopamento",
        description: "Transforme a aparência do seu carro com cores e texturas exclusivas."
      },
      {
        title: "Proteção de Pintura (PPF)",
        description: "Filme transparente que protege contra arranhões, pedras e intempéries."
      },
      {
        title: "Insulfilm",
        description: "Controle de temperatura e proteção UV com películas de alta performance."
      }
    ]
  },
  {
    id: "architecture",
    name: "Arquitetura",
    icon: <Building className="h-6 w-6" />,
    title: "Soluções para Residências e Empresas",
    description: "Transforme seus espaços com nossas soluções de controle solar, privacidade e estética para residências e estabelecimentos comerciais, melhorando o conforto e a eficiência energética.",
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        title: "Películas Residenciais",
        description: "Controle solar, privacidade e proteção UV para sua casa."
      },
      {
        title: "Películas Decorativas",
        description: "Transforme vidros comuns em superfícies decorativas e funcionais."
      },
      {
        title: "Películas de Segurança",
        description: "Proteção contra estilhaços e maior resistência a impactos."
      },
      {
        title: "Fachadas Comerciais",
        description: "Soluções personalizadas para fachadas de lojas e empresas."
      }
    ]
  },
  {
    id: "distribution",
    name: "Distribuição de Película",
    icon: <Package className="h-6 w-6" />,
    title: "Fornecimento para Profissionais",
    description: "Somos distribuidores oficiais das melhores marcas de películas do mercado, oferecendo produtos de qualidade, suporte técnico e treinamentos para instaladores e revendedores.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: [
      {
        title: "Venda no Atacado",
        description: "Fornecimento para instaladores e revendedores com preços competitivos."
      },
      {
        title: "Treinamentos Especializados",
        description: "Capacitação técnica para instalação profissional de películas."
      },
      {
        title: "Ferramentas e Acessórios",
        description: "Equipamentos profissionais para instalação de películas."
      },
      {
        title: "Suporte Técnico",
        description: "Assistência especializada para nossos parceiros e revendedores."
      }
    ]
  }
];