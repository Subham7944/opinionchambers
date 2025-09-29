"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Shield, Target, Zap, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background with Gradient Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            filter: "brightness(0.4) contrast(1.1)"
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(20,20,20,0.4) 50%, rgba(0,0,0,0.7) 100%)"
          }}
        />
        {/* Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(0,163,255,0.1) 50%, transparent 70%)",
            animation: "shimmer 3s ease-in-out infinite alternate"
          }}
        />
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300A3FF' fill-opacity='0.5'%3E%3Cpath d='M0 0h40v1H0zM0 20h40v1H0z'/%3E%3Cpath d='M0 0v40h1V0zM20 0v40h1V0z'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>
      

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
              <div className="relative inline-block">
                <span 
                  className="text-white"
                  style={{
                    textShadow: "0 0 20px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.8)",
                    filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.6))"
                  }}
                >
                  SECOND
                </span>
              </div>
              <br />
              <div className="relative inline-block">
                <span 
                  className="text-[#00A3FF] font-black"
                  style={{
                    textShadow: "0 0 10px rgba(0,163,255,0.4), 2px 2px 4px rgba(0,0,0,0.6)",
                    filter: "drop-shadow(0 0 5px rgba(0,163,255,0.3))"
                  }}
                >
                  OPINION
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A3FF] to-transparent animate-pulse" />
              </div>
              <br />
              <span 
                className="text-white font-light tracking-widest text-2xl md:text-4xl lg:text-5xl"
                style={{
                  textShadow: "2px 2px 8px rgba(0,0,0,0.9)"
                }}
              >
                CONSULTANTS
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-5xl mx-auto"
          >
            <p className="text-2xl md:text-3xl text-white mb-4 font-normal leading-relaxed">
              <span className="text-[#00A3FF] font-medium">REDEFINING EXCELLENCE</span> through expert insight
            </p>
            <p 
              className="text-lg md:text-xl text-gray-300 font-light leading-relaxed"
              style={{
                textShadow: "1px 1px 3px rgba(0,0,0,0.8)"
              }}
            >
              We don't just review projects — we <span className="text-[#00A3FF] font-medium animate-neon">transform visions into reality</span> with precision, innovation, and uncompromising standards.
            </p>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12"
          >
            <div className="flex items-center space-x-3 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-[#00A3FF]/20">
              <Zap className="h-6 w-6 text-[#00A3FF] animate-pulse" />
              <span className="font-semibold text-white text-sm md:text-base">PRECISION INSIGHTS</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <Star className="h-6 w-6 text-white" />
              <span className="font-semibold text-white text-sm md:text-base">35+ YEARS MASTERY</span>
            </div>
            <div className="flex items-center space-x-3 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-[#00A3FF]/20">
              <Target className="h-6 w-6 text-[#00A3FF]" />
              <span className="font-semibold text-white text-sm md:text-base">UNBIASED TRUTH</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("#contact")}
              className="group relative px-8 py-4 bg-[#00A3FF] text-white font-bold text-lg uppercase tracking-wider hover:bg-[#0085D1] transition-all duration-300 transform hover:scale-105"
              style={{
                borderRadius: '0px',
                boxShadow: '0 0 20px rgba(0,163,255,0.4), 0 4px 15px rgba(0,0,0,0.3)'
              }}
            >
              <span className="relative z-10">GET EXPERT INSIGHT</span>
              <ArrowRight className="ml-3 h-5 w-5 inline-block group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse" />
            </button>
            <button
              onClick={() => scrollToSection("#what")}
              className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
              style={{
                borderRadius: '0px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              }}
            >
              EXPLORE SERVICES
            </button>
          </motion.div>

          {/* Scroll Indicator */}
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
