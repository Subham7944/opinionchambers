"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhenSection = () => {
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

  // Utility function for future use if needed
  // const scrollToSection = (href: string) => {
  //   const element = document.querySelector(href);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

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
      {/* Elegant background overlay with washout effect and rust accent */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.65) 50%, rgba(255,255,255,0.75) 100%), radial-gradient(ellipse at top right, rgba(181,50,30,0.15) 0%, rgba(181,50,30,0.05) 45%, rgba(181,50,30,0.05) 55%, rgba(181,50,30,0.15) 100%), radial-gradient(ellipse at bottom left, rgba(181,50,30,0.12) 0%, rgba(181,50,30,0.03) 50%, rgba(255,255,255,0.08) 70%)'
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
              <h3 className="text-4xl md:text-6xl font-league-spartan font-bold leading-tight mb-8" style={{ color: 'rgb(76,74,75)' }}>
                When to Seek a <span style={{ color: 'rgb(181,50,30)' }}>Second Opinion</span>
              </h3>
              <p className="text-lg font-league-spartan font-thin leading-relaxed" style={{ lineHeight: '150%', color: 'rgb(76,74,75)' }}>
                A second opinion isn&apos;t just for when things go wrong—it&apos;s a smart choice at any stage of your project to ensure the best possible outcome.
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

          {/* Scenarios Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {scenarios.map((scenario, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-80 p-6 border-l-4 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02]"
                style={{ borderColor: 'rgb(181,50,30)' }}
              >
                <h4 className="font-league-spartan font-bold mb-3 text-lg" style={{ lineHeight: '130%', color: 'rgb(76,74,75)' }}>
                  {scenario.title}
                </h4>
                <p className="font-league-spartan font-thin leading-relaxed text-sm" style={{ lineHeight: '150%', color: 'rgb(76,74,75)' }}>
                  {scenario.description}
                </p>
              </motion.div>
            ))}
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
            <h3 className="text-2xl md:text-3xl font-league-spartan font-bold text-center" style={{ lineHeight: '130%', color: 'rgb(76,74,75)', fontStyle: 'italic', textShadow: '2px 2px 4px rgba(0,0,0,0.1), 0 0 8px rgba(181,50,30,0.2)' }}>
              It is always good to be well informed while taking decisions that <span style={{ color: 'rgb(181,50,30)' }}>MATTER</span>.
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
