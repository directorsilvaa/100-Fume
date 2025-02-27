'use client';

import { ArrowRight, Shield, Star, TrendingUp, Users, ChevronDown, Instagram, Car } from 'lucide-react';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0B2447] via-[#19376D] to-[#0B2447]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 text-white overflow-hidden">
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div 
                className={`
                  inline-block bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm
                  transform transition-all duration-1000 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
              >
                <span className="text-gray-300 uppercase tracking-wider text-sm">Soluções Profissionais</span>
              </div>
              
              <h1 
                className={`
                  text-4xl md:text-6xl font-bold leading-tight
                  transform transition-all duration-1000 delay-300
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
              >
                Especialistas em{' '}
                <span className="text-[#A5D7E8] relative">
                  Películas
                  <span className="absolute -inset-1 bg-[#A5D7E8]/20 blur-lg -z-10"></span>
                </span>{' '}
                e{' '}
                <span className="text-[#A5D7E8] relative">
                  Envelopamento
                  <span className="absolute -inset-1 bg-[#A5D7E8]/20 blur-lg -z-10"></span>
                </span>
              </h1>
              
              <p 
                className={`
                  text-gray-300 text-lg md:text-xl max-w-xl
                  transform transition-all duration-1000 delay-500
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
              >
                Oferecemos soluções completas em personalização automotiva com películas e envelopamentos de alta qualidade.
              </p>
              
              <div 
                className={`
                  flex flex-wrap gap-4
                  transform transition-all duration-1000 delay-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
              >
                <button className="
                  bg-[#A5D7E8] hover:bg-[#A5D7E8]/80 text-[#0B2447] 
                  px-8 py-3 rounded-full font-medium 
                  transition-all transform hover:scale-105
                  shadow-[0_0_15px_rgba(165,215,232,0.5)]
                ">
                  Solicitar Orçamento
                </button>
                <button className="
                  flex items-center gap-2 text-[#A5D7E8] 
                  hover:text-[#A5D7E8]/80 transition-colors
                  group
                ">
                  <Instagram className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  <span className="relative">
                    Siga no Instagram
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#A5D7E8]/50 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div 
                className={`
                  grid grid-cols-3 gap-8 pt-8 border-t border-white/10
                  transform transition-all duration-1000 delay-1000
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
              >
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-[#A5D7E8] transition-colors">2500+</div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Projetos Realizados</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-[#A5D7E8] transition-colors">5000+</div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Clientes Satisfeitos</div>
                </div>
                <div className="group cursor-pointer">
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-[#A5D7E8] transition-colors">300+</div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Parceiros</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div 
              className={`
                relative h-full flex items-center justify-center
                transform transition-all duration-1000 delay-500
                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
              `}
            >
              <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/home.png"
                  alt="100% FUME - Especialistas em Películas e Envelopamento"
                  fill
                  className="object-contain md:object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2447]/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#A5D7E8] rounded-full blur-[120px] opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-[#A5D7E8] rounded-full blur-[150px] opacity-20 animate-pulse delay-1000" />
        </div>
      </section>
    </main>
  );
}