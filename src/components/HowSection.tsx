"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HowSection = () => {
  const methods = [
    {
      title: "Review Plans & Designs",
      description: "Carefully examine architectural and interior layouts to identify potential design flaws, functionality gaps, or execution challenges before work begins."
    },
    {
      title: "Offer Alternative Solutions",
      description: "Present creative and practical options for layouts, material choices, technology integration, and time optimization, ensuring you have the best possible approach."
    },
    {
      title: "Ensure Compliance",
      description: "Verify that your project aligns with legal requirements, building codes, and technical standards, reducing the risk of costly delays or revisions."
    },
    {
      title: "Maximize Value",
      description: "Recommend strategies to achieve cost-effectiveness without compromising quality, so you get the most out of every investment."
    }
  ];

  const stages = [
    {
      number: "01",
      title: "Concept Design Stage",
      description: "Validating ideas & layouts",
      color: "bg-rust/20 text-rust"
    },
    {
      number: "02",
      title: "Design Development Stage",
      description: "Suggesting functional & aesthetic improvements",
      color: "bg-rust/20 text-rust"
    },
    {
      number: "03",
      title: "Execution",
      description: "Preventing errors & ensuring quality. Time management",
      color: "bg-rust/20 text-rust"
    }
  ];

  return (
    <section id="how" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-league-spartan font-bold text-3xl md:text-4xl lg:text-5xl text-grey mb-8">
            How: Our Approach
          </h2>
          
          <h3 className="font-league-spartan font-bold text-2xl md:text-3xl text-grey mb-6">
            From Idea to Execution – We analyze things differently.
          </h3>
          
          <p className="font-league-spartan text-base md:text-lg text-grey mb-6 leading-relaxed max-w-4xl mx-auto">
            As your <span className="font-bold">Second Opinion Consultants</span>, we act as a trusted, independent partner—reviewing, refining, and strengthening your project at every stage. Our goal is to ensure that your vision is executed flawlessly, cost-effectively, and in full compliance with standards. We:
          </p>
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
              <div className="bg-grey rounded-lg p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 h-full flex flex-col">
                {/* Title */}
                <h3 className="font-league-spartan font-bold text-2xl text-white mb-4">
                  {method.title}
                </h3>
                
                {/* Description */}
                <p className="font-league-spartan text-lg text-white/90 leading-relaxed">
                  {method.description}
                </p>
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
          <h3 className="font-league-spartan font-bold text-2xl md:text-3xl text-grey text-center mb-12">
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
                <div className="bg-rust hover:bg-rust/90 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center h-full hover:shadow-lg hover:scale-[1.02]">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-rust text-2xl font-league-spartan font-bold mb-6">
                    {stage.number}
                  </div>
                  <h4 className="text-xl font-league-spartan font-bold text-white mb-4">
                    {stage.title}
                  </h4>
                  <p className="font-league-spartan text-white/90">
                    {stage.description}
                  </p>
                </div>
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
          <div className="bg-grey text-white p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-league-spartan font-bold mb-6">
              Looking Sideways is an Art and a Science.
            </h3>
            <p className="font-league-spartan text-lg md:text-xl mb-8 opacity-90">
              Our expertise helps you save money, time, and resources to ensure your project&apos;s success.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                <span className="text-rust font-bold mr-2">•</span>
                <span className="font-league-spartan text-base md:text-lg">Process Optimization</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-rust font-bold mr-2">•</span>
                <span className="font-league-spartan text-base md:text-lg">Cost Efficiency</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-rust font-bold mr-2">•</span>
                <span className="font-league-spartan text-base md:text-lg">Quality Assurance</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Logo */}
        <div className="flex justify-end mt-12">
          <div className="w-16 h-16">
            <Image
              src="/images/hero/LOGO (1).jpg"
              alt="Opinion Chambers Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
