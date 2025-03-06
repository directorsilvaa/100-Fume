"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare,
  Home,
  Info,
  Users,
  Briefcase,
  LayoutGrid,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-[#2a3990] text-white py-4 px-4 md:px-12 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          100% FUMÊ
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-blue-800"
            onClick={() => scrollToSection('hero')}
          >
            <Home className="h-5 w-5 mr-1" />
            Início
          </Button>

          <Button 
            variant="ghost" 
            className="text-white hover:bg-blue-800"
            onClick={() => scrollToSection('categories')}
          >
            <Info className="h-5 w-5 mr-1" />
            Áreas de Atuação
          </Button>

          <Button 
            variant="ghost" 
            className="text-white hover:bg-blue-800"
            onClick={() => scrollToSection('services')}
          >
            <LayoutGrid className="h-5 w-5 mr-1" />
            Serviços
          </Button>

          <Button 
            variant="ghost" 
            className="text-white hover:bg-blue-800"
            onClick={() => scrollToSection('testimonials')}
          >
            <Users className="h-5 w-5 mr-1" />
            Depoimentos
          </Button>

          <Button 
            variant="ghost" 
            className="text-white hover:bg-blue-800"
            onClick={() => scrollToSection('contact')}
          >
            <Briefcase className="h-5 w-5 mr-1" />
            Contato
          </Button>

          <Button 
            className="bg-green-500 hover:bg-green-600 text-white rounded-full"
            onClick={() => window.open('https://wa.me/5577991728188', '_blank')}
          >
            <MessageSquare className="h-5 w-5 mr-2" />
            Atendimento WhatsApp
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[#2a3990] shadow-lg lg:hidden"
            >
              <div className="flex flex-col p-4 space-y-2">
                <Button 
                  variant="ghost" 
                  className="text-white w-full justify-start" 
                  onClick={() => scrollToSection('hero')}
                >
                  <Home className="h-5 w-5 mr-2" />
                  Início
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white w-full justify-start" 
                  onClick={() => scrollToSection('categories')}
                >
                  <Info className="h-5 w-5 mr-2" />
                  Áreas de Atuação
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white w-full justify-start" 
                  onClick={() => scrollToSection('services')}
                >
                  <LayoutGrid className="h-5 w-5 mr-2" />
                  Serviços
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white w-full justify-start" 
                  onClick={() => scrollToSection('testimonials')}
                >
                  <Users className="h-5 w-5 mr-2" />
                  Depoimentos
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white w-full justify-start" 
                  onClick={() => scrollToSection('contact')}
                >
                  <Briefcase className="h-5 w-5 mr-2" />
                  Contato
                </Button>
                <Button 
                  className="bg-green-500 hover:bg-green-600 text-white w-full justify-start"
                  onClick={() => window.open('https://wa.me/5577991728188', '_blank')}
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Atendimento WhatsApp
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}