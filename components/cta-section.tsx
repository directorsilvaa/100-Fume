import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight, Shield, Star, CheckCircle } from "lucide-react";

export function CTASection() {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para transformar seu veículo?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Somos especialistas em películas e envelopamento, oferecendo soluções 
              personalizadas para proteção e estilo do seu veículo. Entre em contato 
              hoje mesmo e descubra como podemos ajudar.
            </p>

            <div className="grid gap-6 mb-8">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Shield className="h-8 w-8 text-blue-300" />
                <div>
                  <h3 className="font-semibold">Garantia de Qualidade</h3>
                  <p className="text-sm text-blue-200">Serviço profissional com materiais certificados</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <Star className="h-8 w-8 text-blue-300" />
                <div>
                  <h3 className="font-semibold">Experiência Comprovada</h3>
                  <p className="text-sm text-blue-200">Anos de expertise no mercado automotivo</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <CheckCircle className="h-8 w-8 text-blue-300" />
                <div>
                  <h3 className="font-semibold">Atendimento Personalizado</h3>
                  <p className="text-sm text-blue-200">Soluções sob medida para suas necessidades</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-blue-200 mt-1" />
                <div>
                  <p className="font-semibold">Telefone</p>
                  <p className="text-blue-100">(75) 98210-4848</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-blue-200 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-blue-100">contato@100porfume.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-blue-200 mt-1" />
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p className="text-blue-100">R. José Joaquim Seabra, 616 - Pilão, Feira de Santana - BA, 44002-000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-blue-200 mt-1" />
                <div>
                  <p className="font-semibold">Horário de Funcionamento</p>
                  <p className="text-blue-100">Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-6 py-2 rounded-full text-sm font-medium transform rotate-2">
              Resposta Rápida
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-blue-900">Solicite um Orçamento</h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              window.open('https://wa.me/5575982104848', '_blank');
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-gray-700 font-medium">Nome</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-gray-700 font-medium">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="service" className="text-gray-700 font-medium">Serviço de Interesse</label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="peliculas">Películas Automotivas</option>
                  <option value="envelopamento">Envelopamento</option>
                  <option value="ppf">Proteção de Pintura</option>
                  <option value="residencial">Películas Residenciais</option>
                  <option value="comercial">Comunicação Visual</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-gray-700 font-medium">Mensagem</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Descreva o que você precisa..."
                ></textarea>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-green-500 hover:bg-green-600 text-white group"
              >
                Solicitar via WhatsApp
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}