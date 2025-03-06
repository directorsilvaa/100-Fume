"use client";

import dynamic from 'next/dynamic';
import React, { Suspense, useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Sun, RotateCw, AlertCircle, Info } from "lucide-react";
import { motion } from "framer-motion";

// Dynamically import Three.js components with no SSR
const ThreeComponents = dynamic(() => import('./three-components').then((mod) => mod.ThreeComponents), {
  ssr: false,
  loading: () => <ModelLoadingFallback />
});

const tintTypes = [
  { id: "standard", name: "Película Padrão", maxDarkness: 70 },
  { id: "premium", name: "Película Premium", maxDarkness: 85 },
  { id: "ceramic", name: "Película Cerâmica", maxDarkness: 95 }
];

function checkWebGLSupport() {
  if (typeof window === 'undefined') return false;
  
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || 
               canvas.getContext('webgl') || 
               canvas.getContext('experimental-webgl');
    
    if (!gl) return false;
    return true;
  } catch (e) {
    console.warn('WebGL support check failed:', e);
    return false;
  }
}

function ModelLoadingFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Carregando visualização 3D...</p>
      </div>
    </div>
  );
}

function StaticCarImage() {
  return (
    <div className="relative w-full h-full bg-gray-100 rounded-xl overflow-hidden">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gray-900/80 backdrop-blur-sm text-white z-10">
        <AlertCircle className="h-16 w-16 text-yellow-500 mb-4" />
        <h3 className="text-2xl font-bold mb-4">Visualização 3D Indisponível</h3>
        <p className="text-lg mb-4 text-center max-w-lg">
          Seu navegador ou dispositivo não suporta a visualização 3D. 
          Isso pode ocorrer devido a:
        </p>
        <ul className="space-y-2 text-sm mb-6">
          <li className="flex items-center gap-2">
            <Info className="h-4 w-4 text-yellow-500" />
            Hardware gráfico não compatível
          </li>
          <li className="flex items-center gap-2">
            <Info className="h-4 w-4 text-yellow-500" />
            Drivers desatualizados
          </li>
          <li className="flex items-center gap-2">
            <Info className="h-4 w-4 text-yellow-500" />
            Modo de compatibilidade do navegador
          </li>
        </ul>
        <p className="text-sm text-center text-gray-300">
          Sugerimos tentar em um navegador mais recente ou entrar em contato conosco para ver amostras reais.
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80"
        alt="Car preview"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  onError?: () => void;
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Error in component:', error, errorInfo);
    if (this.props.onError) {
      this.props.onError();
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.fallback || <StaticCarImage />;
    }
    return this.props.children;
  }
}

export function CarSimulatorSection() {
  const [selectedTint, setSelectedTint] = useState(tintTypes[0]);
  const [tintLevel, setTintLevel] = useState(50);
  const [autoRotate, setAutoRotate] = useState(true);
  const [hasWebGLError, setHasWebGLError] = useState(false);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    setIsWebGLSupported(checkWebGLSupport());
  }, []);

  if (!isWebGLSupported || hasWebGLError) {
    return <StaticCarImage />;
  }

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            SIMULADOR DE PELÍCULAS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
            Visualize as Películas em Seu Carro
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experimente diferentes níveis de escurecimento e tipos de películas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative aspect-[16/9]">
              <ErrorBoundary 
                onError={() => setHasWebGLError(true)}
                fallback={<StaticCarImage />}
              >
                <Suspense fallback={<ModelLoadingFallback />}>
                  <ThreeComponents 
                    tintLevel={tintLevel}
                    autoRotate={autoRotate}
                  />
                </Suspense>
              </ErrorBoundary>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white"
                onClick={() => setAutoRotate(!autoRotate)}
              >
                <RotateCw className={`h-4 w-4 ${autoRotate ? 'animate-spin' : ''}`} />
              </Button>
            </div>
          </div>

          <div className="space-y-8 bg-white p-6 rounded-2xl shadow-lg">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Sun className="h-5 w-5 text-blue-600" />
                Tipo de Película
              </h3>
              <div className="space-y-2">
                {tintTypes.map((tint) => (
                  <Button
                    key={tint.id}
                    variant={selectedTint.id === tint.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => {
                      setSelectedTint(tint);
                      setTintLevel(Math.min(tintLevel, tint.maxDarkness));
                    }}
                  >
                    {tint.name}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Nível de Escurecimento</h3>
              <div className="space-y-4">
                <Slider
                  value={[tintLevel]}
                  onValueChange={(value) => setTintLevel(value[0])}
                  max={selectedTint.maxDarkness}
                  step={5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Transparente</span>
                  <span>{tintLevel}%</span>
                  <span>Escuro</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Benefícios desta Configuração:</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>✓ Redução de {Math.round(tintLevel * 0.85)}% do calor solar</li>
                  <li>✓ Bloqueio de {Math.round(tintLevel * 0.99)}% dos raios UV</li>
                  <li>✓ Maior privacidade e conforto</li>
                  <li>✓ Proteção contra desbotamento</li>
                </ul>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Solicitar Orçamento com Esta Configuração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}