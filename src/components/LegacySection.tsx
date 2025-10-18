"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const LegacySection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add event listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <section id="legacy" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ filter: "grayscale(100%)", backgroundImage: `url(/images/about-us/legacy.jpg)` }}
      />
      
      {/* Light Washed Out Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-65" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* LEGACY heading removed */}
          <h3 className="text-4xl md:text-6xl font-league-spartan font-bold leading-tight mb-6" style={{ color: 'rgb(76,74,75)' }}>
            Our Leadership
          </h3>
          <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: 'rgb(76,74,75)' }}></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-4 md:p-8 border-l-4 border-l-[rgb(181,50,30)]"
          >
            <p className="text-sm md:text-lg font-league-spartan font-medium mb-4 md:mb-6 leading-relaxed" style={{ color: 'rgb(76,74,75)' }}>
              Backed by 35+ years of multi-disciplinary expertise, our leadership has shaped award-winning projects across residential, commercial, hospitality, and institutional sectors. Opinion Chambers stands at the intersection of design intelligence, execution literacy, and client advocacy. We are committed to:
            </p>
            
            <ul className="space-y-2 md:space-y-4 mb-6 md:mb-8">
              <li className="flex items-start">
                <span className="mr-2 mt-0.5 md:mt-1 text-sm md:text-base" style={{ color: '#000000' }}>•</span>
                <span className="font-league-spartan font-medium text-xs md:text-base" style={{ color: 'rgb(76,74,75)' }}>
                  <span className="font-bold" style={{ color: '#000000' }}>Unbiased Advice</span> – no vendor influence, only your interests.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5 md:mt-1 text-sm md:text-base" style={{ color: '#000000' }}>•</span>
                <span className="font-league-spartan font-medium text-xs md:text-base" style={{ color: 'rgb(76,74,75)' }}>
                  <span className="font-bold" style={{ color: '#000000' }}>Clarity Before Concrete</span> – critical checks at the right stage.
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-0.5 md:mt-1 text-sm md:text-base" style={{ color: '#000000' }}>•</span>
                <span className="font-league-spartan font-medium text-xs md:text-base" style={{ color: 'rgb(76,74,75)' }}>
                  <span className="font-bold" style={{ color: '#000000' }}>Real-World Assurance</span> – what works, not just in renders.
                </span>
              </li>
            </ul>
            
            <p className="text-sm md:text-lg font-league-spartan font-medium mb-6 md:mb-8 leading-relaxed" style={{ color: 'rgb(76,74,75)' }}>
              At the heart of Opinion Chambers is a belief that experience is the sharpest filter against error. Leading our practice is Ar. Atul Gupta, an architect with over three decades of professional expertise and a reputation for balancing vision with pragmatism. A Fellow of the Indian Institute of Architects (FIIA), having an exposure of working with various Professional Bodies, Ar. Atul Gupta brings a rare blend of design intelligence, technical depth, and sustainability awareness.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mt-8 flex flex-col items-center justify-center"
          >
            <div className="relative w-3/5 md:w-3/4 mx-auto rounded-lg overflow-hidden flex justify-center items-center">
              <Image
                src="/images/about-us/atul gupta.jpg"
                alt="Ar. Atul Gupta"
                width={400}
                height={400}
                className="rounded-lg"
                style={{
                  maxHeight: isMobile ? '250px' : '400px',
                  margin: '0 auto',
                  objectFit: 'contain',
                  filter: 'grayscale(100%)'
                }}
                priority
              />
            </div>
            <div className="mt-4 md:mt-6 text-center">
              <h3 className="text-xl md:text-2xl font-league-spartan font-bold mb-1 md:mb-2" style={{ color: 'rgb(76,74,75)' }}>Architect (Dr.) Atul Gupta</h3>
              <p className="text-base md:text-lg font-league-spartan font-thin" style={{ color: 'rgb(76,74,75)' }}>
                <span className="font-medium">Founder, Opinion Chambers</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Career Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/40 backdrop-blur-sm rounded-lg p-5 md:p-8 lg:p-10 border border-[rgb(181,50,30)]/20 shadow-lg">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-league-spartan font-bold mb-4 md:mb-8" style={{ color: 'rgb(76,74,75)' }}>
              Professional Achievements
            </h3>

            <p className="text-sm md:text-base lg:text-lg font-league-spartan font-medium mb-6 md:mb-8 leading-relaxed" style={{ color: '#000000' }}>
              His career is marked by leadership roles within the profession, from serving on Council of Architecture panels to guiding professional bodies, mentoring the next generation of architects, and winning a number of Design Competitions, Acclamations & Awards.
            </p>

            <div className="grid md:grid-cols-3 gap-4 md:gap-8">
              <div className="bg-white/80 rounded-lg p-4 md:p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-league-spartan font-bold mb-2 md:mb-3 text-base md:text-lg" style={{ color: 'rgb(76,74,75)' }}>Design Excellence</h4>
                <p className="font-league-spartan font-medium text-xs md:text-sm" style={{ color: '#000000' }}>Award-winning architectural solutions across multiple sectors and scales</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 md:p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-league-spartan font-bold mb-2 md:mb-3 text-base md:text-lg" style={{ color: 'rgb(76,74,75)' }}>Professional Leadership</h4>
                <p className="font-league-spartan font-medium text-xs md:text-sm" style={{ color: '#000000' }}>Active roles in architectural councils and educational institutions</p>
              </div>
              <div className="bg-white/80 rounded-lg p-4 md:p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-league-spartan font-bold mb-2 md:mb-3 text-base md:text-lg" style={{ color: 'rgb(76,74,75)' }}>Industry Recognition</h4>
                <p className="font-league-spartan font-medium text-xs md:text-sm" style={{ color: '#000000' }}>Acknowledged expertise in sustainable design and technical execution</p>
              </div>
            </div>
            
            <div className="text-center mt-6 md:mt-10 rounded-lg p-4 md:p-6 border border-[rgb(181,50,30)]/20 bg-[rgb(181,50,30)]/10">
              <p className="text-base md:text-xl font-league-spartan font-bold leading-relaxed" style={{ color: 'rgb(76,74,75)' }}>
                With Opinion Chambers, you gain not just a second opinion, but a <span style={{ color: 'rgb(0,0,0)' }}>strategic partner</span> committed to making your project the best it can be.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Slogan Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative mt-16 mb-8 text-center"
        >
          <h3 
            className="text-3xl md:text-4xl font-league-spartan font-bold italic" 
            style={{ 
              color: 'rgb(76,74,75)', 
              lineHeight: '130%',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1), 0 0 8px rgba(0,0,0,0.2)'
            }}
          >
            Experience Does Matter.
          </h3>
        </motion.div>
      </div>
      <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-5 right-5"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
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

export default LegacySection;
