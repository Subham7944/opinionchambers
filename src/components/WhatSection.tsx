"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhatSection = () => {
  return (
    <section id="what" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Centered Main Heading */}
          <div className="text-center mb-16">
            <h2 className="font-league-spartan font-bold text-4xl md:text-5xl lg:text-6xl text-grey mb-8 underline decoration-rust decoration-4 underline-offset-8">
              What We Do
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column */}
            <div>
              <p className="font-league-spartan text-lg md:text-xl text-grey mb-8 leading-relaxed">
                Whether it is a new build, renovation, or interior work, we help you with our insights.
              </p>
              
              <p className="font-league-spartan text-lg md:text-xl text-grey mb-6 leading-relaxed">
                We bring a fresh set of expert eyes to review your drawings, details, and site execution. Our goal is to:
              </p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-rust font-bold mr-2">-</span>
                  <span className="font-league-spartan text-lg text-grey">Detect risks early</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rust font-bold mr-2">-</span>
                  <span className="font-league-spartan text-lg text-grey">Offer practical alternatives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rust font-bold mr-2">-</span>
                  <span className="font-league-spartan text-lg text-grey">Ensure compliance and constructability, Optimize resources and costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rust font-bold mr-2">-</span>
                  <span className="font-league-spartan text-lg text-grey">Deliver superior finishes without compromise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rust font-bold mr-2">-</span>
                  <span className="font-league-spartan text-lg text-grey">Improve design efficiency, Value addition in Space and Functionality, Revenue Enhancement.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-rust font-bold mr-2">-</span>
                  <span className="font-league-spartan text-lg text-grey">Optimize Time</span>
                </li>
              </ul>
              
              <p className="font-league-spartan text-lg md:text-xl text-grey font-bold">
                In Short, we protect your vision and your investment.
              </p>
            </div>
            
            {/* Right Column */}
            <div>
              <h3 className="font-league-spartan font-bold text-3xl md:text-4xl text-grey mb-6 text-center">
                Second Opinion: A Fresh Perspective for Your Project&apos;s Success
              </h3>
              
              <p className="font-league-spartan text-lg md:text-xl text-grey mb-6 leading-relaxed">
                A Second Opinion Consultation is more than just a review—it&apos;s a strategic checkpoint to ensure your architectural or interior design project is on the right track. With an independent, unbiased perspective, we evaluate your plans and ideas against functionality, aesthetics, and quality benchmarks, while keeping your goals at the center.
              </p>
              
              <p className="font-league-spartan text-lg md:text-xl text-grey leading-relaxed">
                Most projects look flawless on paper, but once construction begins, time, money, and quality often slip away. We exist to make sure that doesn&apos;t happen.
              </p>
            </div>
          </div>
          
          {/* We Add Value Section */}
          <div className="mt-20 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h3 className="font-league-spartan font-bold text-4xl md:text-5xl lg:text-6xl text-grey">
                We add Value.
              </h3>
            </motion.div>
            
            {/* Logo positioned at far right */}
            <div className="flex justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16">
                  <Image
                    src="/images/hero/LOGO (1).jpg"
                    alt="Opinion Chambers Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatSection;
