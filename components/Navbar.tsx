'use client';

import { useState, useEffect } from 'react';
import { Car, MapPin, Building2, Home, Phone, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      label: 'Carros',
      href: '/carros',
      icon: <Car className="h-5 w-5" />,
      submenu: [
        { label: 'Películas Automotivas', href: '/carros/peliculas' },
        { label: 'Insulfilm', href: '/carros/insulfilm' },
        { label: 'Envelopamento', href: '/carros/envelopamento' },
      ]
    },
    {
      label: 'Casas',
      href: '/casas',
      icon: <Home className="h-5 w-5" />,
      submenu: [
        { label: 'Películas Residenciais', href: '/casas/peliculas' },
        { label: 'Proteção Solar', href: '/casas/protecao-solar' },
        { label: 'Películas Decorativas', href: '/casas/decorativas' },
      ]
    },
    {
      label: 'Empresas',
      href: '/empresas',
      icon: <Building2 className="h-5 w-5" />,
      submenu: [
        { label: 'Películas Comerciais', href: '/empresas/peliculas' },
        { label: 'Controle Solar', href: '/empresas/controle-solar' },
        { label: 'Segurança', href: '/empresas/seguranca' },
      ]
    },
    {
      label: 'Onde Aplicar',
      href: '/onde-aplicar',
      icon: <MapPin className="h-5 w-5" />,
    },
  ];

  return (
    <div className="fixed w-full z-50">
      {/* Main Navbar */}
      <nav className={`
        w-full transition-all duration-300 backdrop-blur-lg
        ${isScrolled 
          ? 'bg-[#283593]/95 shadow-lg py-3' 
          : 'bg-[#283593] py-4'
        }
      `}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center transform hover:scale-105 transition-transform"
            >
              <span className="text-2xl font-bold text-white">100% FUME</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg
                      text-white hover:bg-white/10 transition-all
                      ${activeDropdown === item.label ? 'bg-white/10' : ''}
                    `}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {item.submenu && (
                      <ChevronDown className={`
                        h-4 w-4 transition-transform duration-200
                        ${activeDropdown === item.label ? 'rotate-180' : ''}
                      `} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className={`
                      absolute top-full left-0 mt-2 w-64
                      bg-white rounded-lg shadow-lg overflow-hidden
                      transition-all duration-200 origin-top-left
                      ${activeDropdown === item.label 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95 pointer-events-none'
                      }
                    `}>
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link 
                href="/atendimento" 
                className="
                  flex items-center gap-2 ml-4 bg-green-600 
                  hover:bg-green-700 text-white px-6 py-2 
                  rounded-full transition-all transform 
                  hover:scale-105 shadow-lg
                "
              >
                <Image 
                  src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" 
                  alt="WhatsApp" 
                  width={20} 
                  height={20} 
                />
                <span className="font-medium">Atendimento WhatsApp</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`
            lg:hidden overflow-hidden transition-all duration-300
            ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}
          `}>
            <div className="py-4 space-y-2">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-3 text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                  </Link>
                  {item.submenu && (
                    <div className="pl-12 mt-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-2 text-white/80 hover:text-white transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link 
                href="/atendimento" 
                className="flex items-center gap-2 mx-4 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg transition-colors"
              >
                <Image 
                  src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png" 
                  alt="WhatsApp" 
                  width={20} 
                  height={20} 
                />
                Atendimento WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}