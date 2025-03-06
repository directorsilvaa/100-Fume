import Link from "next/link";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">100% FUMÊ</h3>
            <p className="text-gray-400 mb-4">
              Especialistas em películas e envelopamento automotivo, residencial e comercial.
              Qualidade e excelência em cada serviço.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:text-blue-400 hover:bg-gray-800"
                onClick={() => window.open('https://www.instagram.com/100porcentofumefsa/', '_blank')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/peliculas-automotivas" className="text-gray-400 hover:text-white transition-colors">
                  Películas Automotivas
                </Link>
              </li>
              <li>
                <Link href="/servicos/envelopamento" className="text-gray-400 hover:text-white transition-colors">
                  Envelopamento
                </Link>
              </li>
              <li>
                <Link href="/servicos/protecao-de-pintura" className="text-gray-400 hover:text-white transition-colors">
                  Proteção de Pintura
                </Link>
              </li>
              <li>
                <Link href="/servicos/peliculas-residenciais" className="text-gray-400 hover:text-white transition-colors">
                  Películas Residenciais
                </Link>
              </li>
              <li>
                <Link href="/servicos/comunicacao-visual" className="text-gray-400 hover:text-white transition-colors">
                  Comunicação Visual
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-400 hover:text-white transition-colors">
                  Galeria de Trabalhos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                <span className="text-gray-400">
                  R. José Joaquim Seabra, 616 - Pilão, Feira de Santana - BA, 44002-000
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">
                  (75) 98210-4848
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-gray-400">
                  contato@100porfume.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            100% FUMÊ. Todos os direitos reservados. © 2025
            <span className="text-gray-600">|</span>
            <a 
              href="https://www.introti.com.br" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              by introTi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}