"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { CategoriesSection } from "@/components/categories-section";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { useEffect, useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Animated background shapes
const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient orbs - Responsive sizes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-0 left-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-[50px] md:blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-[60px] md:blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.12, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        className="absolute top-1/3 right-1/3 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-[45px] md:blur-[90px]"
      />

      {/* Animated lines - Hide on mobile */}
      <div className="hidden md:block">
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M0 100 Q 250 50 500 100 T 1000 100"
            stroke="url(#gradient1)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.path
            d="M0 200 Q 250 150 500 200 T 1000 200"
            stroke="url(#gradient2)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30" />
    </div>
  );
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.main 
      initial="initial"
      animate="animate"
      className="relative overflow-hidden"
    >
      <BackgroundShapes />

      {/* Content */}
      <div className="relative z-10 backdrop-blur-[2px]">
        <motion.div {...fadeInUp}>
          <Navbar />
        </motion.div>

        <motion.div 
          variants={staggerChildren}
          className="space-y-16 md:space-y-24 lg:space-y-32"
        >
          <motion.div variants={fadeInUp} id="hero">
            <HeroSection />
          </motion.div>

          <motion.div variants={fadeInUp} id="categories">
            <CategoriesSection />
          </motion.div>

          <motion.div variants={fadeInUp} id="services">
            <ServicesSection />
          </motion.div>

          <motion.div variants={fadeInUp} id="testimonials">
            <TestimonialsSection />
          </motion.div>

          <motion.div variants={fadeInUp} id="contact">
            <CTASection />
          </motion.div>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="mt-16 md:mt-24"
        >
          <Footer />
        </motion.div>

        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-blue-600 transform origin-left z-50"
          style={{ scaleX }}
        />

        {/* Scroll to top button */}
        <AnimatePresence>
          {showScrollButton && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-24 right-4 md:bottom-8 md:right-24 bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 group z-50"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 md:h-6 md:w-6 transform group-hover:-translate-y-1 transition-transform duration-200" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 10l7-7m0 0l7 7m-7-7v18" 
                />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating WhatsApp Button */}
        <FloatingWhatsApp />
      </div>
    </motion.main>
  );
}