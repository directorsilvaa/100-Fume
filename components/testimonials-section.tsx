"use client";

import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TestimonialsSection() {
  const [autoPlay, setAutoPlay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay]);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            DEPOIMENTOS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa prioridade. Confira alguns depoimentos 
            de quem já utilizou nossos serviços.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 bg-white">
                      <CardContent className="pt-6">
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-6 line-clamp-4">"{testimonial.text}"</p>
                      </CardContent>
                      <CardFooter className="flex items-center gap-4 border-t pt-4">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="bg-white border-none shadow-lg hover:bg-blue-50" />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <CarouselNext className="bg-white border-none shadow-lg hover:bg-blue-50" />
            </div>
          </Carousel>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-2 h-2 p-0 rounded-full ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Carlos Silva",
    vehicle: "Honda Civic 2022",
    rating: 5,
    text: "Excelente trabalho! Instalaram a película no meu carro com perfeição. O atendimento foi ótimo e o resultado superou minhas expectativas.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Ana Oliveira",
    vehicle: "Jeep Compass 2023",
    rating: 5,
    text: "Fiz o envelopamento completo do meu carro e ficou incrível! Profissionais muito atenciosos e cuidadosos. Recomendo a todos.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Marcos Pereira",
    vehicle: "Toyota Corolla 2021",
    rating: 4,
    text: "Ótimo serviço de aplicação de película. Ambiente limpo, equipe profissional e preço justo. Voltarei com certeza para outros serviços.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Juliana Costa",
    vehicle: "Hyundai HB20 2022",
    rating: 5,
    text: "Instalei películas nas janelas da minha casa e no meu carro. Em ambos os casos o serviço foi impecável. Recomendo fortemente!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Roberto Almeida",
    vehicle: "Fiat Toro 2023",
    rating: 5,
    text: "Envelopei minha picape e ficou sensacional! Trabalho de altíssima qualidade e durabilidade. Já estou recomendando para todos os amigos.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Fernanda Santos",
    vehicle: "Volkswagen T-Cross 2022",
    rating: 4,
    text: "Fiz a aplicação de película de controle solar na minha casa e o resultado foi excelente. Reduziu muito o calor e melhorou o conforto.",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];