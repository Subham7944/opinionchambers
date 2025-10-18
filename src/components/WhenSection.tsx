"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const WhenSection = () => {
  const [showAllCards, setShowAllCards] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [animationType, setAnimationType] = useState({ x: 0, y: 30 });
  
  // Handle window resize to ensure proper display
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      const handleResize = () => {
        const desktop = window.innerWidth >= 768;
        setIsDesktop(desktop);
        
        // Set animation type based on screen size
        if (desktop) {
          setAnimationType({ x: 0, y: 30 }); // Desktop: Only fade in and slide up
          if (!showAllCards) {
            // Don't need to toggle if on desktop
            setShowAllCards(true);
          }
        } else {
          setAnimationType({ x: 50, y: 0 }); // Mobile: Side animation
        }
      };

      // Set initial state based on screen size
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [showAllCards]);
  const scenarios = [
    {
      title: "You need a fresh design perspective",
      description: "Unlock new creative ideas that can enhance your project's impact"
    },
    {
      title: "You want value additions in existing designs",
      description: "Refine and elevate current plans for better aesthetics, functionality, and efficiency"
    },
    {
      title: "You require expert guidance in material selection",
      description: "Choose finishes and products that suit your vision, performance needs, and budget"
    },
    {
      title: "You need a neutral mediator for vendor communication",
      description: "Facilitate smooth collaboration and resolve conflicts with unbiased expertise"
    },
    {
      title: "You have technical questions needing credible answers",
      description: "Get accurate, experience-backed solutions for complex design and construction challenges"
    },
    {
      title: "You're over budget or dissatisfied with your current plan",
      description: "Reassess and re-strategize for a more cost-effective and satisfying result"
    },
    {
      title: "You must ensure compliance with standards & regulations",
      description: "Avoid legal and technical pitfalls through proactive checks"
    },
    {
      title: "Your project is near completion but not meeting expectations",
      description: "Identify gaps, resolve issues, and bring your vision back on track"
    }
  ];

  return (
    <section 
      id="when" 
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/when/bg-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Elegant background overlay with washout effect and rust accent - INCREASED OPACITY */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.88) 100%), radial-gradient(ellipse at top right, rgba(181,50,30,0.15) 0%, rgba(181,50,30,0.05) 45%, rgba(181,50,30,0.05) 55%, rgba(181,50,30,0.15) 100%), radial-gradient(ellipse at bottom left, rgba(181,50,30,0.12) 0%, rgba(181,50,30,0.03) 50%, rgba(255,255,255,0.08) 70%)'
        }}
      ></div>
      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Title */}
            <div>
              <h3 className="text-4xl md:text-6xl font-league-spartan font-bold leading-tight mb-8" style={{ color: '#000000' }}>
                When to Seek a Second Opinion
              </h3>
              <p className="text-lg font-league-spartan leading-relaxed" style={{ lineHeight: '160%', color: 'rgb(60,60,60)', fontWeight: 400 }}>
                A second opinion isn&apos;t just for when things go wrong - it&apos;s a smart choice at any stage of your project to ensure the best possible outcome.
              </p>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative overflow-hidden group cursor-pointer"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/when/Gemini_Generated_Image_8lrk708lrk708lrk.png"
                    alt="When to seek second opinion"
                    fill
                    className="object-cover transition-all duration-500"
                  />
                  {/* Image Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.3) 100%)"
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scenarios Section */}
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-league-spartan font-bold mb-8" style={{ lineHeight: '120%', color: 'rgb(76,74,75)' }}>
              Consider Engaging Opinion Chambers When:
            </h3>
          </motion.div>

          {/* Scenarios Grid - First 4 items (always visible) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.slice(0, 4).map((scenario, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0, 
                  x: !isDesktop ? (index % 2 === 0 ? -animationType.x : animationType.x) : 0, 
                  y: isDesktop ? animationType.y : 0
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-90 p-6 border-l-4 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{ borderColor: 'rgb(181,50,30)' }}
              >
                <h4 className="font-league-spartan font-bold mb-3 text-lg" style={{ lineHeight: '130%', color: 'rgb(76,74,75)' }}>
                  {scenario.title}
                </h4>
                <p className="font-league-spartan font-thin leading-relaxed text-sm" style={{ lineHeight: '150%', color: '#000000' }}>
                  {scenario.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Scenarios Grid - Last 4 items (hidden on mobile) */}
          <motion.div 
            initial={{ opacity: 1, height: "auto" }}
            animate={{ 
              opacity: showAllCards || isDesktop ? 1 : 0,
              height: showAllCards || isDesktop ? "auto" : 0
            }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 overflow-hidden"
          >
            {scenarios.slice(4).map((scenario, index) => {
              const actualIndex = index + 4; // Adjust index for animation calculation
              return (
                <motion.div
                  key={actualIndex}
                  initial={{
                    opacity: 0, 
                    x: !isDesktop ? (actualIndex % 2 === 0 ? -animationType.x : animationType.x) : 0, 
                    y: isDesktop ? animationType.y : 0
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white bg-opacity-90 p-6 border-l-4 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02]"
                  style={{ borderColor: 'rgb(181,50,30)' }}
                >
                  <h4 className="font-league-spartan font-bold mb-3 text-lg" style={{ lineHeight: '130%', color: 'rgb(76,74,75)' }}>
                    {scenario.title}
                  </h4>
                  <p className="font-league-spartan font-thin leading-relaxed text-sm" style={{ lineHeight: '150%', color: '#000000' }}>
                    {scenario.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Read More Button - Only visible on mobile */}
          <div className="md:hidden flex justify-center mt-6 mb-10">
            <button 
              onClick={() => setShowAllCards(!showAllCards)}
              className="border-2 border-[#6f6e6f] text-[#6f6e6f] hover:border-[rgb(181,50,30)] hover:text-[rgb(181,50,30)] font-league-spartan font-medium py-3 px-12 transition-colors duration-300 text-base tracking-wide"
            >
              {showAllCards ? "READ LESS" : "READ MORE"}
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 md:p-12 shadow-2xl" style={{ borderRadius: '0px', backgroundColor: 'rgb(240,240,240)', boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05)' }}>
            <h3 className="text-2xl md:text-3xl font-league-spartan font-bold text-center" style={{ lineHeight: '130%', color: 'rgb(76,74,75)', fontStyle: 'italic', textShadow: '2px 2px 4px rgba(0,0,0,0.1), 0 0 8px rgba(0,0,0,0.2)' }}>
              It is always good to be well informed while taking decisions that <span style={{ color: 'rgb(76,74,75)' }}>MATTER</span>.
            </h3>
          </div>
        </motion.div>
      </div>
      
      {/* Logo positioned at bottom right */}
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

export default WhenSection;
