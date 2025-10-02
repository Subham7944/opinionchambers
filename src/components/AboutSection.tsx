"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
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
            About Us
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-league-spartan text-lg text-grey mb-8 leading-relaxed">
              Backed by 35+ years of multi-disciplinary expertise, our leadership has shaped award-winning projects across residential, commercial, hospitality, and institutional sectors. Opinion Chambers stands at the intersection of design intelligence, execution literacy, and client advocacy. We are committed to:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li>
                <h4 className="font-league-spartan font-bold text-xl text-grey">Unbiased Advice</h4>
                <p className="font-league-spartan text-grey">- no vendor influence, only your interests.</p>
              </li>
              <li>
                <h4 className="font-league-spartan font-bold text-xl text-grey">Clarity Before Concrete</h4>
                <p className="font-league-spartan text-grey">- critical checks at the right stage.</p>
              </li>
              <li>
                <h4 className="font-league-spartan font-bold text-xl text-grey">Real-World Assurance</h4>
                <p className="font-league-spartan text-grey">- what works, not just in renders</p>
              </li>
            </ul>
            
            <p className="font-league-spartan text-lg text-grey mb-8 leading-relaxed">
              At the heart of Opinion Chambers is a belief that experience is the sharpest filter against error. Leading our practice is Ar. (Dr.) Atul Gupta, an architect with over three decades of professional expertise and a reputation for balancing vision with pragmatism. A Fellow of the Indian Institute of Architects (FIIA), having an exposure of working with various Professional Bodies, Architect Atul Gupta brings a rare blend of design intelligence, technical depth, and sustainability awareness.
            </p>
          </motion.div>
          
          {/* Right Column - Image with fade effect */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <Image
                src="/images/about-us/atul gupta.jpg"
                alt="Ar. (Dr.) Atul Gupta"
                width={500}
                height={600}
                className="w-full object-cover"
              />
              {/* Fade overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>
            </div>
            
            <div className="mt-6 bg-grey/5 p-6">
              <p className="font-league-spartan text-base text-grey text-center leading-relaxed">
                At the heart of Opinion Chambers is a belief that experience is the sharpest filter against error. Leading our practice is Ar. Atul Gupta, an architect with over three decades of professional expertise and a reputation for balancing vision with pragmatism. A Fellow of the Indian Institute of Architects (FIIA), having an exposure of working with various Professional Bodies, Ar. Atul Gupta brings a rare blend of design intelligence, technical depth, and sustainability awareness. His career is marked by leadership roles within the profession, from serving on Council of Architecture panels to guiding professional bodies, mentoring the next generation of architects, and winning a number of Design Competitions, Acclimations & Awards.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Our Team: Your Advantage Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="bg-gray-900/80 rounded-lg p-8 md:p-12 overflow-hidden">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/bg-architecture.jpg')" }}></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-rust mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 015-2.906z" />
                </svg>
                <h3 className="font-league-spartan font-bold text-2xl md:text-3xl text-white">
                  Our Team: Your Advantage
                </h3>
              </div>
              
              <p className="font-league-spartan text-lg text-white/90 text-center mb-10">
                We bring in diverse skill sets and deep industry knowledge to deliver clarity, precision, and value at every stage of your project. We are:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-800/80 p-6">
                  <h4 className="font-league-spartan font-bold text-xl text-white mb-3">
                    Experienced in all scales
                  </h4>
                  <p className="font-league-spartan text-white/80">
                    From compact residential spaces to large-scale commercial developments
                  </p>
                </div>
                
                <div className="bg-gray-800/80 p-6">
                  <h4 className="font-league-spartan font-bold text-xl text-white mb-3">
                    Detail-oriented
                  </h4>
                  <p className="font-league-spartan text-white/80">
                    We meticulously review drawings, specifications, and on-site execution
                  </p>
                </div>
                
                <div className="bg-gray-800/80 p-6">
                  <h4 className="font-league-spartan font-bold text-xl text-white mb-3">
                    Client-focused
                  </h4>
                  <p className="font-league-spartan text-white/80">
                    Every decision is rooted in understanding your vision and priorities
                  </p>
                </div>
              </div>
              
              <div className="bg-rust/50 p-6 text-center">
                <p className="font-league-spartan text-lg text-white">
                  With Opinion Chambers, you gain not just a second opinion, but a strategic partner committed to making your project the best it can be.
                </p>
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

export default AboutSection;
