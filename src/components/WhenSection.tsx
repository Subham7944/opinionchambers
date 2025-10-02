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


  return (
    <section id="when" className="bg-white py-16 md:py-24">
      {/* First Page - When to Seek a Second Opinion */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center">
            <h2 className="font-league-spartan font-bold text-4xl md:text-5xl lg:text-6xl text-grey mb-8">
              When to Seek a<br />Second Opinion
            </h2>
            
            <p className="font-league-spartan text-lg md:text-xl lg:text-2xl text-grey mb-8 leading-relaxed max-w-4xl mx-auto">
              A second opinion isn&apos;t just for when things go wrong—it&apos;s a smart choice at any stage of your project to ensure the best possible outcome.
            </p>
          </div>
          
          {/* Bottom statement with MATTER highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h3 className="font-league-spartan font-bold text-3xl md:text-4xl lg:text-5xl text-grey text-center">
              It is always good to be well informed while taking decisions that <span className="text-rust">MATTER</span>
            </h3>
            
            {/* Logo */}
            <div className="flex justify-end mt-8">
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
          </motion.div>
        </motion.div>
      </div>
      
      {/* Spacer */}
      <div className="h-16 md:h-24 bg-gray-50"></div>

      {/* Scenarios Section */}
      <div className="bg-white py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="font-league-spartan font-bold text-3xl md:text-4xl lg:text-5xl text-grey mb-12">
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
                className="bg-white p-6 border-l-4 border-rust hover:shadow-lg transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="mb-4">
                  <span className="text-2xl font-bold text-rust" style={{ fontFamily: 'monospace' }}>
                    [{index + 1}]
                  </span>
                </div>
                <h4 className="font-league-spartan font-bold text-grey mb-3 text-lg">
                  {scenario.title}
                </h4>
                <p className="font-league-spartan text-grey leading-relaxed text-sm">
                  {scenario.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          {/* Logo at bottom right */}
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
      </div>
      
      {/* Removed CTA section as requested */}
    </section>
  );
};

export default WhenSection;
