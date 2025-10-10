"use client";

import { motion } from "framer-motion";
import BlurText from "./ui/BlurText";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const WhatSection = () => {
  const sections = [
    {
      id: 1,
      title: "Detect Risks Early",
      subtitle: "PROACTIVE RISK ASSESSMENT",
      image: "/images/what/risk.jpg"
    },
    {
      id: 2,
      title: "Offer Practical Alternatives",
      subtitle: "INNOVATIVE DESIGN SOLUTIONS",
      image: "/images/what/practical-alternative.jpg"
    },
    {
      id: 3,
      title: "Optimize Resources & Costs",
      subtitle: "STRATEGIC VALUE ENGINEERING",
      image: "/images/what/optimize-resource.jpg"
    },
    {
      id: 4,
      title: "Optimize Time",
      subtitle: "EFFICIENT PROJECT DELIVERY",
      image: "/images/what/optimize-time.jpg"
    }
  ];

  return (
    <section id="what" className="py-16 md:py-24 bg-white relative">      
      {/* Background with washout effect - now covering the entire section */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(/images/what/what-bg1.jpg)',
          opacity: 0.8,  /* Increased opacity for more visibility */
          filter: 'brightness(1.1) contrast(1.1)'
        }}
      ></div>
      
      {/* Overlay gradient */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.4) 100%)'
        }}
      ></div>
      {/* Section Header with Blur Background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12 mb-16">
        <div className="absolute inset-0 bg-white/30 rounded-xl shadow-lg" style={{ backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}></div>
        <div className="flex flex-col md:flex-row items-start relative p-6">
          {/* Vertical divider line */}
          <div className="hidden md:block absolute left-1/2 top-12 bottom-12 transform -translate-x-1/2 w-px" 
            style={{ 
              background: 'linear-gradient(to bottom, rgba(181,50,30,0) 0%, rgba(181,50,30,0.7) 30%, rgba(181,50,30,0.7) 70%, rgba(181,50,30,0) 100%)'
            }}>
          </div>
          {/* Left Column - Text Content */}
          <div className="md:w-1/2">
            <div className="pr-8">
              <BlurText
                text="What We Do"
                delay={100}
                animateBy="words"
                direction="top"
                className="pt-8 pl-4 text-4xl md:text-6xl font-league-spartan font-bold leading-tight text-rust"
              />
              
              <div className="mt-6 max-w-xl">
                <p className="text-lg font-league-spartan leading-relaxed mb-4 relative pl-4 border-l-2" 
                   style={{ lineHeight: '150%', color: '#000000', fontWeight: 500, borderColor: 'rgba(181,50,30,0.5)' }}>
                  Whether it is a <span className="font-bold" style={{ color: 'rgb(181,50,30)' }}>new build</span>, {" "}
                  <span className="font-bold" style={{ color: 'rgb(181,50,30)' }}>renovation</span>, or {" "}
                  <span className="font-bold" style={{ color: 'rgb(181,50,30)' }}>interior work</span>, {" "}
                  we help you with our insights.
                </p>
                <p className="text-lg font-league-spartan leading-relaxed relative pl-4 border-l-2" 
                   style={{ lineHeight: '160%', color: '#000000', fontWeight: 500, borderColor: 'rgba(181,50,30,0.5)' }}>
                  We bring a fresh set of expert eyes to review your <span className="font-bold" style={{ color: 'rgb(76,74,75)' }}>drawings</span>, {" "}
                  <span className="font-bold" style={{ color: 'rgb(76,74,75)' }}>details</span>, and {" "}
                  <span className="font-bold" style={{ color: 'rgb(76,74,75)' }}>site execution</span>.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Description */}
          <div className="md:w-1/2 pt-12 md:pt-8 pl-0 md:pl-8">
            <div className="pl-4">
            <h4 className="text-2xl font-league-spartan font-bold mb-6" style={{ lineHeight: '130%', color: 'rgb(76,74,75)' }}>
              Second Opinion: A Fresh Perspective for Your Project&apos;s Success
            </h4>
            <p className="text-lg font-league-spartan leading-relaxed mb-6" style={{ lineHeight: '150%', color: 'rgb(76,74,75)', fontWeight: 500 }}>
              A Second Opinion Consultation is more than just a review—it&apos;s a strategic checkpoint to ensure your architectural or interior design project is on the right track. With an independent, unbiased perspective, we evaluate your plans and ideas against functionality, aesthetics, and quality benchmarks, while keeping your goals at the center.
            </p>
            <p className="text-lg font-league-spartan leading-relaxed" style={{ lineHeight: '150%', color: 'rgb(76,74,75)', fontWeight: 500 }}>
              Most projects look flawless on paper, but once construction begins, time, money, and quality often slip away. <span className="font-bold" style={{ color: 'rgb(181,50,30)' }}>We exist to make sure that doesn&apos;t happen.</span>
            </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slogan with text effect */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-10"
        >
          <h2 
            className="text-2xl md:text-3xl font-league-spartan font-bold italic pb-1" 
            style={{ 
              color: 'rgb(76,74,75)',
              textShadow: '2px 2px 6px rgba(0,0,0,0.25)'
            }}
          >
            We provide <span style={{ color: 'rgb(181,50,30)' }}>Customised Project Specific Opinions</span>
          </h2>
          
          {/* Fading underline effect */}
          <div 
            className="h-0.5 mx-auto" 
            style={{ 
              width: '80%',
              maxWidth: '600px',
              background: 'linear-gradient(to right, rgba(181,50,30,0) 0%, rgba(181,50,30,0.8) 30%, rgba(181,50,30,0.8) 70%, rgba(181,50,30,0) 100%)',
              marginTop: '5px'
            }}
          ></div>
        </motion.div>
      </div>
      
      {/* 3D Cards in a single row */}
      <div className="relative mt-0 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Desktop view: Same size fixed width cards with reduced spacing */}
          <div className="hidden lg:grid grid-cols-4 gap-3 mt-8">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: section.id * 0.1 }}
              >
                <CardContainer className="inter-var">
                  <CardBody className="relative group/card bg-white/90 dark:hover:shadow-2xl dark:hover:shadow-rust/[0.1] border-black/[0.1] w-full h-[380px] rounded-xl p-6 border shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-700 dark:text-white font-league-spartan"
                      style={{ color: 'rgb(76,74,75)' }}
                    >
                      {section.title}
                    </CardItem>
                    
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-sm uppercase tracking-wider font-league-spartan font-medium mt-2"
                      style={{ color: 'rgb(181,50,30)' }}
                    >
                      {section.subtitle}
                    </CardItem>
                    
                    <CardItem
                      translateZ="100"
                      rotateX={5}
                      rotateZ={-5}
                      className="w-full mt-6"
                    >
                      <div className="relative h-48 w-full rounded-xl overflow-hidden group-hover/card:shadow-xl">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardItem>
                    
                    <div className="flex justify-between items-center mt-6">
                      {/* Our Goal Text */}
                      <CardItem
                        translateZ={20}
                        translateX={5}
                      >
                        <span className="font-bold italic text-lg" style={{ color: 'rgb(181,50,30)' }}>our goal</span>
                      </CardItem>
                      
                      {/* Logo */}
                      <CardItem
                        translateZ={20}
                        translateX={-5}
                      >
                        <Image 
                          src="/images/2nd logo small.png"
                          alt="Opinion Chambers Logo"
                          width={40}
                          height={40}
                          className="shadow-md"
                        />
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 md:p-12 shadow-2xl bg-white/90" style={{ boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)', backdropFilter: 'blur(5px)' }}>
            <h3 className="text-xl font-league-spartan font-bold mb-6" style={{ lineHeight: '130%', color: 'rgb(76,74,75)' }}>
              Our Mission: Protect Your Vision & Investment
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-league-spartan font-bold mb-2" style={{ color: 'rgb(76,74,75)' }}>Ensure Compliance</h4>
                <p className="text-sm font-league-spartan" style={{ color: '#000000', fontWeight: 500 }}>Verify constructability and regulatory requirements</p>
              </div>
              <div>
                <h4 className="font-league-spartan font-bold mb-2" style={{ color: 'rgb(76,74,75)' }}>Superior Finishes</h4>
                <p className="text-sm font-league-spartan" style={{ color: '#000000', fontWeight: 500 }}>Deliver exceptional quality without compromise</p>
              </div>
              <div>
                <h4 className="font-league-spartan font-bold mb-2" style={{ color: 'rgb(76,74,75)' }}>Design Efficiency</h4>
                <p className="text-sm font-league-spartan" style={{ color: '#000000', fontWeight: 500 }}>Value addition in Space and Functionality</p>
              </div>
            </div>
            <div>
              <p className="text-3xl font-league-spartan font-bold italic mb-2" style={{ color: 'rgb(181,50,30)' }}>
                WE ADD VALUE.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Logo positioned at bottom right */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-5 right-5 z-10"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
            <Image
              src="/images/hero/LOGO (1).jpg"
              alt="Opinion Chambers Logo"
              width={120}
              height={120}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div> */}
      </div>
      {/* Logo positioned at bottom right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="absolute bottom-8 right-8 z-50"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-opacity-80 p-2">
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

export default WhatSection;