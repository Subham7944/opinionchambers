"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white">
      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="font-league-spartan font-bold text-grey text-xl md:text-2xl lg:text-3xl italic tracking-wide">
              We See What Others Miss
            </p>
          </motion.div>

          {/* Main Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-10"
          >
            <h1 className="font-league-spartan leading-tight">
              <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-3">
                <span className="text-rust">OPINION</span>
              </div>
              <div className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
                <span className="text-grey">CHAMBERS</span>
              </div>
            </h1>
            
            {/* Underline */}
            <div className="w-full max-w-3xl mx-auto mt-6 mb-10">
              <div className="h-1.5 bg-grey"></div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 max-w-4xl mx-auto"
          >
            <p className="font-league-spartan font-bold text-grey text-xl md:text-2xl lg:text-3xl uppercase tracking-wider leading-relaxed">
              INDEPENDENT 2ND OPINION CONSULTING<br />
              FOR ARCHITECTURE & INTERIORS
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <p className="font-league-spartan font-bold text-grey text-xl md:text-2xl lg:text-3xl leading-relaxed">
              From Paper to reality, Ensuring your project&apos;s journey is smooth, efficient, and successful from concept to completion.
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 right-8"
      >
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center">
          <Image
            src="/images/hero/LOGO (1).jpg"
            alt="Opinion Chambers Logo"
            width={200}
            height={200}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
