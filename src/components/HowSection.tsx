"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GlareCard } from "@/components/ui/glare-card";
import { FileSearch, Lightbulb, Shield, TrendingUp, Eye, Cog } from "lucide-react";
import { motion } from "framer-motion";

const HowSection = () => {
  const methods = [
    {
      icon: <FileSearch className="h-12 w-12 text-white" />,
      title: "Review Plans & Designs",
      description: "Carefully examine architectural and interior layouts to identify potential design flaws, functionality gaps, or execution challenges before work begins.",
      backgroundImage: "/images/how/pexels-cottonbro-8382256.jpg"
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-white" />,
      title: "Offer Alternative Solutions",
      description: "Present creative and practical options for layouts, material choices, technology integration, and time optimization, ensuring you have the best possible approach.",
      backgroundImage: "/images/how/pexels-energepic-com-27411-313691.jpg"
    },
    {
      icon: <Shield className="h-12 w-12 text-white" />,
      title: "Ensure Compliance",
      description: "Verify that your project aligns with legal requirements, building codes, and technical standards, reducing the risk of costly delays or revisions.",
      backgroundImage: "/images/how/pexels-shkrabaanthony-5816291.jpg"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-white" />,
      title: "Maximize Value",
      description: "Recommend strategies to achieve cost-effectiveness without compromising quality, so you get the most out of every investment.",
      backgroundImage: "/images/how/growth.jpg"
    }
  ];

  const stages = [
    {
      number: "01",
      title: "Concept Design Stage",
      description: "Validating ideas & layouts",
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "02",
      title: "Design Development Stage",
      description: "Suggesting functional & aesthetic improvements",
      color: "bg-green-100 text-green-600"
    },
    {
      number: "03",
      title: "Execution",
      description: "Preventing errors & ensuring quality. Time management",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section id="how" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
                # HOW -
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold text-black leading-tight">
                Our Methods
              </h3>
            </div>
            
            {/* Right Column - Description */}
            <div className="lg:pt-4">
              <h4 className="text-2xl font-bold text-black mb-6" style={{ lineHeight: '130%' }}>
                From Idea to Execution – We analyze things differently.
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed mb-6" style={{ lineHeight: '150%', fontWeight: 400 }}>
                As your Second Opinion Consultants, we act as a trusted, independent partner—reviewing, refining, and strengthening your project at every stage. Our goal is to ensure that your vision is executed flawlessly, cost-effectively, and in full compliance with standards.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ lineHeight: '150%', fontWeight: 400 }}>
                From concept validation to final handover, we make sure your project is not only well-designed on paper but also successful in reality.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Methods Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-80 overflow-hidden rounded-lg group hover:scale-105 transition-all duration-300">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${method.backgroundImage})` }}
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-40 transition-all duration-300" />
                
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-center text-white">
                  <div className="mb-6">
                    {method.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {method.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {method.description}
                  </p>
                </div>
                
                {/* Subtle Border Glow */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-lg group-hover:border-white/40 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Stages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            We review, refine, and enhance your project at any stage:
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <GlareCard className="flex flex-col items-center justify-center p-8 text-center h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stage.color} text-2xl font-bold mb-6`}>
                    {stage.number}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">
                    {stage.title}
                  </h4>
                  <p className="text-neutral-200">
                    {stage.description}
                  </p>
                </GlareCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <Eye className="h-12 w-12 text-blue-400 mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold">
                Looking Sideways is an Art and a Science.
              </h3>
            </div>
            <p className="text-lg mb-6 opacity-90">
              Our expertise helps you save money, time, and resources to ensure your project's success.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm opacity-80">
              <div className="flex items-center justify-center">
                <Cog className="h-5 w-5 mr-2" />
                <span>Process Optimization</span>
              </div>
              <div className="flex items-center justify-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                <span>Cost Efficiency</span>
              </div>
              <div className="flex items-center justify-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>Quality Assurance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowSection;
