"use client";

import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-league-spartan font-bold text-3xl md:text-4xl lg:text-5xl text-grey mb-8">
              The Strategic Checkpoint Your Project Deserves
            </h2>
            <div className="w-32 h-1 bg-rust mx-auto mb-12"></div>
            
            <p className="font-league-spartan text-lg md:text-xl lg:text-2xl text-grey mb-6 leading-relaxed">
              At Opinion Chambers, we specialize in one thing: providing an 
              <span className="text-rust font-bold"> independent second opinion </span> 
              on architecture and interior projects.
            </p>
            
            <p className="font-league-spartan text-lg md:text-xl lg:text-2xl text-grey leading-relaxed">
              Most projects look flawless on paper, but once construction begins, time, money, 
              and quality often slip away. <span className="font-bold">We exist to make sure that doesn&apos;t happen.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
