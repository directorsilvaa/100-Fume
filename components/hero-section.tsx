"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.05,
            ease: "easeInOut"
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-[#0a1a40] to-[#1e3a8a] text-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-blue-700 bg-opacity-50 px-3 md:px-4 py-2 rounded-lg mb-4 md:mb-6 text-sm md:text-base"
            >
              <TypewriterText text="SOLUÇÕES PROFISSIONAIS" />
            </motion.div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <TypewriterText 
                text="Especialistas em "
                delay={1}
              />
              <span className="text-blue-200">
                <TypewriterText 
                  text="Películas e Envelopamento"
                  delay={2}
                />
              </span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
              className="text-base md:text-lg mb-6 md:mb-8"
            >
              Oferecemos soluções completas em personalização automotiva com películas e envelopamentos de alta qualidade.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button 
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white text-sm md:text-base"
                onClick={() => window.open('https://wa.me/5575982104848', '_blank')}
              >
                Solicitar Orçamento
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto border-white bg-white text-black hover:bg-blue-50 text-sm md:text-base"
                onClick={() => window.open('https://www.instagram.com/100porcentofumefsa/', '_blank')}
              >
                <Instagram className="mr-2 h-4 md:h-5 w-4 md:w-5" />
                Siga no Instagram
              </Button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative h-[200px] sm:h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl mt-6 md:mt-0"
          >
            <Image
              src="/hero.png"
              alt="100% FUMÊ - Loja e serviços"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}