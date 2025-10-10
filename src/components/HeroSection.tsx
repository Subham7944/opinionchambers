"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Threads from "./ui/ThreadsWrapper";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Bottom Layer with improved clarity */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7, /* Increased opacity for better visibility */
          filter: 'contrast(1.05) brightness(1.05)' /* Subtle enhancement for clarity */
        }}
      />
      
      {/* Threads Effect - Top Interactive Layer with high z-index to ensure it gets mouse events */}
      <div className="absolute inset-0" style={{ zIndex: 100 }}>
        {typeof window !== 'undefined' && (
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Threads
              amplitude={1}
              distance={0.6}
              enableMouseInteraction={true}
              color={[0.95, 0.25, 0.15]} /* Very bright rust color for maximum visibility */
            />
          </div>
        )}
      </div>
      
      {/* Subtle Overlay - Just enough for text readability */}
      <div 
        className="absolute inset-0 z-20"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.3) 30%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0.25) 100%)',
          pointerEvents: 'none',
          backdropFilter: 'blur(1px)' /* Very subtle blur for depth without obscuring details */
        }}
      />
      
      {/* Enhanced Architectural Line Patterns - Matrix Effect */}
      {/* <div className="absolute inset-0 opacity-[0.04] z-30" 
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(76,74,75,0.5) 1px, transparent 1px),
            linear-gradient(0deg, rgba(76,74,75,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none'
        }}>
      </div> */}
      
      {/* Architectural Blueprint Lines */}
      {/* <div className="absolute inset-0 opacity-[0.08] z-30" style={{ pointerEvents: 'none' }}>
        Horizontal blueprint lines
        <div className="absolute top-[20%] left-0 w-full h-[2px]" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(76,74,75,0.6) 20%, rgba(76,74,75,0.6) 80%, transparent 100%)'}}></div>
        <div className="absolute top-[40%] left-0 w-full h-[2px]" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(76,74,75,0.5) 30%, rgba(76,74,75,0.5) 70%, transparent 100%)'}}></div>
        <div className="absolute top-[60%] left-0 w-full h-[2px]" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(76,74,75,0.6) 25%, rgba(76,74,75,0.6) 75%, transparent 100%)'}}></div>
        <div className="absolute top-[80%] left-0 w-full h-[2px]" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(76,74,75,0.5) 15%, rgba(76,74,75,0.5) 85%, transparent 100%)'}}></div>
        
        Vertical blueprint lines
        <div className="absolute top-0 left-[15%] w-[2px] h-full" style={{background: 'linear-gradient(0deg, transparent 0%, rgba(76,74,75,0.5) 20%, rgba(76,74,75,0.5) 80%, transparent 100%)'}}></div>
        <div className="absolute top-0 left-[35%] w-[2px] h-full" style={{background: 'linear-gradient(0deg, transparent 0%, rgba(76,74,75,0.6) 30%, rgba(76,74,75,0.6) 70%, transparent 100%)'}}></div>
        <div className="absolute top-0 left-[65%] w-[2px] h-full" style={{background: 'linear-gradient(0deg, transparent 0%, rgba(76,74,75,0.5) 25%, rgba(76,74,75,0.5) 75%, transparent 100%)'}}></div>
        <div className="absolute top-0 left-[85%] w-[2px] h-full" style={{background: 'linear-gradient(0deg, transparent 0%, rgba(76,74,75,0.6) 15%, rgba(76,74,75,0.6) 85%, transparent 100%)'}}></div>
      </div> */}
      
      {/* Additional Architectural Accent Lines */}
      {/* <div className="absolute bottom-0 left-[50%] top-0 z-30" style={{width: '2px', background: 'linear-gradient(0deg, transparent, rgba(76,74,75,0.3) 30%, rgba(76,74,75,0.3) 70%, transparent)', opacity: '0.4', pointerEvents: 'none'}}></div> */}
      
      {/* Main Content - Two Column Layout */}
      <div className="relative z-40 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[70vh]">
          
          {/* Left Column - Main Branding (Left Aligned) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start text-left md:pl-4 lg:pl-8"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <p className="font-league-spartan font-medium text-xl md:text-2xl pl-4 italic tracking-widest" style={{ color: '#000000', letterSpacing: '0.075em', fontWeight: 400 }}>
                We See What Others Miss
              </p>
            </motion.div>

            {/* Main Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="pl-(-2) leading-tight">
                <div className="flex justify-start mb-2">
                  <Image 
                    src="/images/hero/opinion.png" 
                    alt="Opinion"
                    width={300}
                    height={100}
                    className="h-auto w-auto object-contain"
                    priority
                  />
                </div>
                <div className="flex justify-start">
                  <Image 
                    src="/images/hero/chambers.png" 
                    alt="Chambers"
                    width={400}
                    height={100}
                    className="h-auto w-auto object-contain"
                  />
                </div>
              </h1>
              
              {/* Underline */}
              <div className="w-3/4 mt-6 mb-8">
                <div className="h-0.5" style={{ backgroundColor: 'rgb(181,50,30)', width: '100%' }}></div>
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-left"
            >
              <p className="font-league-spartan font-medium text-lg md:text-xl uppercase tracking-wider leading-relaxed" style={{ color: 'rgb(76,74,75)', letterSpacing: '0.05em' }}>
                INDEPENDENT 2ND OPINION CONSULTING<br />
                FOR ARCHITECTURE & INTERIORS
              </p>
              <p className="font-league-spartan text-lg md:text-xl mt-6 leading-relaxed" style={{ color: '#000000', maxWidth: '90%', fontWeight: 500 }}>
                From Paper to reality, we ensure your project&apos;s journey is smooth,
                efficient, and true to its design.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Strategic Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="text-left max-w-md lg:max-w-lg relative z-10 bg-white bg-opacity-50 rounded-lg shadow-md py-10 px-8 backdrop-blur-sm border-l-4" style={{ borderColor: 'rgb(181,50,30)' }}>
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-6 px-2"
              >
                {/* Title */}
                <h2 className="text-xl md:text-2xl font-league-spartan font-bold leading-tight tracking-wide" style={{ color: 'rgb(76,74,75)', letterSpacing: '0.02em' }}>
                  The Strategic Checkpoint<br/>
                  <span style={{ color: 'rgb(181,50,30)' }}>Your Project Deserves</span>
                </h2>
                
                {/* Divider */}
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '40%' }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="h-px ml-0"
                  style={{ backgroundColor: 'rgb(181,50,30)' }}
                />
                
                <p className="font-league-spartan text-base md:text-lg leading-relaxed" style={{ color: '#000000', fontWeight: 500, letterSpacing: '0.01em' }}>
                  At <span className="font-bold" style={{ color: 'rgb(181,50,30)' }}>Opinion Chambers</span>, we specialize in one thing: providing an <span className="font-bold" style={{ color: 'rgb(181,50,30)' }}>independent second opinion</span> on architecture and interior projects.
                </p>
                
                <p className="font-league-spartan text-base md:text-lg leading-relaxed" style={{ color: "#000000", fontWeight: 500, letterSpacing: '0.01em' }}>
                  Most projects look flawless on paper, but once construction begins, time, money, and quality often slip away. <span className="font-bold" style={{ color: 'rgb(181,50,30)' }}>We exist to make sure that doesn&apos;t happen.</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Logo positioned at bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 right-8 z-50"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-opacity-80 p-2 shadow-lg">
          <Image
            src="/images/hero/LOGO (1).jpg"
            alt="Opinion Chambers Logo"
            width={120}
            height={120}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
