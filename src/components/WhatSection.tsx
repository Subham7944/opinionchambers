"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertTriangle, CheckCircle, TrendingUp, Clock } from "lucide-react";
import BlurText from "./ui/BlurText";

const WhatSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  
  const sections = [
    {
      id: 1,
      number: "[1]",
      title: "Detect Risks Early",
      subtitle: "PROACTIVE RISK ASSESSMENT",
      description: "Our expert analysis identifies potential structural, design, and execution risks before they escalate into costly problems. We scrutinize every detail from foundation to finishes, ensuring your project stays on track from day one.",
      highlights: [
        "Structural integrity evaluation",
        "Code compliance verification",
        "Material compatibility assessment",
        "Construction feasibility analysis"
      ],
      image: "/images/risk.jpg",
      icon: <AlertTriangle className="h-8 w-8 text-[#00A3FF]" />
    },
    {
      id: 2,
      number: "[2]",
      title: "Offer Practical Alternatives",
      subtitle: "INNOVATIVE DESIGN SOLUTIONS",
      description: "When challenges arise, we don't just identify problems—we deliver actionable solutions. Our creative alternatives enhance functionality, aesthetics, and value while respecting your original vision and budget constraints.",
      highlights: [
        "Creative space optimization",
        "Cost-effective material alternatives",
        "Enhanced functionality solutions",
        "Aesthetic improvement recommendations"
      ],
      image: "/images/practical-alternative.jpg",
      icon: <CheckCircle className="h-8 w-8 text-[#00A3FF]" />
    },
    {
      id: 3,
      number: "[3]",
      title: "Optimize Resources & Costs",
      subtitle: "STRATEGIC VALUE ENGINEERING",
      description: "Maximize your investment through intelligent resource allocation and cost optimization. We identify opportunities to reduce expenses without compromising quality, ensuring every dollar contributes to your project's success.",
      highlights: [
        "Budget optimization strategies",
        "Material cost analysis",
        "Labor efficiency improvements",
        "Value engineering solutions"
      ],
      image: "/images/optimize-resource.jpg",
      icon: <TrendingUp className="h-8 w-8 text-[#00A3FF]" />
    },
    {
      id: 4,
      number: "[4]",
      title: "Optimize Time",
      subtitle: "EFFICIENT PROJECT DELIVERY",
      description: "Time is money in construction. Our streamlined processes and strategic planning eliminate delays, optimize workflows, and ensure your project delivers on schedule without sacrificing quality or attention to detail.",
      highlights: [
        "Timeline optimization",
        "Workflow efficiency analysis",
        "Milestone planning",
        "Delivery acceleration strategies"
      ],
      image: "/images/optimize-time.jpg",
      icon: <Clock className="h-8 w-8 text-[#00A3FF]" />
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((_, index) => 
        document.getElementById(`section-${index}`)
      );
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  return (
    <section id="what" className="bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-2xl md:text-2xl font-bold text-black mb-6" style={{ lineHeight: '120%' }}>
                # WHAT -
              </h2>
              <BlurText
                text="What We Do"
                delay={100}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-6xl font-bold text-black leading-tight"
              />
            </div>
            
            {/* Right Column - Description */}
            <div className="lg:pt-4">
              <h4 className="text-2xl font-bold text-black mb-6" style={{ lineHeight: '130%' }}>
                Second Opinion: A Fresh Perspective for Your Project's Success
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed mb-6" style={{ lineHeight: '150%', fontWeight: 400 }}>
                A Second Opinion Consultation is more than just a review—it's a strategic checkpoint to ensure your architectural or interior design project is on the right track. With an independent, unbiased perspective, we evaluate your plans and ideas against functionality, aesthetics, and quality benchmarks, while keeping your goals at the center.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ lineHeight: '150%', fontWeight: 400 }}>
                Most projects look flawless on paper, but once construction begins, time, money, and quality often slip away. We exist to make sure that doesn't happen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sticky Sections */}
      <div className="relative">
        {sections.map((section, index) => (
          <div key={section.id} id={`section-${index}`} className="min-h-[70vh] flex items-center py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Sticky Text */}
                <div className="lg:sticky lg:top-20">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-4xl font-bold text-[#00A3FF]" style={{ fontFamily: 'monospace' }}>
                        {section.number}
                      </span>
                      <div className="flex-shrink-0">
                        {section.icon}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-medium text-[#333333] mb-2" style={{ lineHeight: '130%' }}>
                        {section.subtitle}
                      </h3>
                      <h2 className="text-3xl md:text-4xl font-bold text-black mb-6" style={{ lineHeight: '120%' }}>
                        {section.title}
                      </h2>
                    </div>
                    
                    <p className="text-base text-[#444444] leading-relaxed mb-8" style={{ lineHeight: '150%', fontWeight: 400 }}>
                      {section.description}
                    </p>
                    
                    <div className="space-y-3">
                      {section.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-[#00A3FF] rounded-full flex-shrink-0" />
                          <span className="text-[#444444] text-sm" style={{ lineHeight: '150%', fontWeight: 400 }}>
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-6">
                      <button 
                        className="px-6 py-3 bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-[#333333] transition-all duration-300 transform hover:scale-105"
                        style={{
                          borderRadius: '0px',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right Column - Image */}
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden"
                    style={{ borderRadius: '0px' }}
                  >
                    <div className="aspect-[4/3] relative">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover"
                        style={{ borderRadius: '0px' }}
                      />
                      {/* Image Overlay */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)"
                        }}
                      />
                      {/* Number Overlay */}
                      <div className="absolute top-6 right-6">
                        <span 
                          className="text-6xl font-bold text-[#00A3FF] opacity-80"
                          style={{ 
                            fontFamily: 'monospace',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                          }}
                        >
                          {section.number}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-black text-white p-8 md:p-12" style={{ borderRadius: '0px' }}>
            <h3 className="text-xl font-medium mb-6" style={{ lineHeight: '130%' }}>
              Our Mission: Protect Your Vision & Investment
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-medium text-white mb-2">Ensure Compliance</h4>
                <p className="text-gray-300 text-sm">Verify constructability and regulatory requirements</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Superior Finishes</h4>
                <p className="text-gray-300 text-sm">Deliver exceptional quality without compromise</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Design Efficiency</h4>
                <p className="text-gray-300 text-sm">Value addition in Space and Functionality</p>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#00A3FF] mb-2">
                WE ADD VALUE.
              </p>
              <p className="text-lg text-gray-300">
                Every project deserves expert insight. Every vision deserves protection.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatSection;
