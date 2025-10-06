"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="when" 
      className="relative"
      style={{
        backgroundImage: "url('/images/when/bg-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
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
              <h2 className="text-2xl md:text-2xl font-bold text-white mb-6" style={{ lineHeight: '120%' }}>
                # WHEN -
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                When to Seek a <span className="text-blue-400">Second Opinion</span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed" style={{ lineHeight: '150%', fontWeight: 400 }}>
                A second opinion isn't just for when things go wrong—it's a smart choice at any stage of your project to ensure the best possible outcome.
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
                  <img
                    src="/images/when/Gemini_Generated_Image_8lrk708lrk708lrk.png"
                    alt="When to seek second opinion"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  {/* Image Overlay */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)"
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scenarios Section */}
      <div className="relative z-10 bg-black bg-opacity-80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ lineHeight: '120%' }}>
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
                className="bg-white bg-opacity-90 p-6 border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600" style={{ fontFamily: 'monospace' }}>
                    [{index + 1}]
                  </span>
                </div>
                <h4 className="font-bold text-black mb-3 text-lg" style={{ lineHeight: '130%' }}>
                  {scenario.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm" style={{ lineHeight: '150%', fontWeight: 400 }}>
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
          <div className="bg-black text-white p-8 md:p-12" style={{ borderRadius: '0px' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6" style={{ lineHeight: '130%' }}>
              It is always good to be well informed while taking decisions that <span className="text-blue-500">MATTER</span>.
            </h3>
            <p className="text-lg text-gray-300 mb-8" style={{ lineHeight: '150%', fontWeight: 400 }}>
              Don't wait for problems to arise. Get expert insights at the right time to ensure your project's success.
            </p>
            <button 
              onClick={() => scrollToSection("#contact")}
              className="px-8 py-4 bg-blue-400 text-black font-bold text-lg uppercase tracking-wider hover:bg-blue-300 transition-all duration-300 transform hover:scale-105"
              style={{
                borderRadius: '0px',
                boxShadow: '0 4px 15px rgba(59,130,246,0.3)'
              }}
            >
              Schedule Your Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhenSection;
