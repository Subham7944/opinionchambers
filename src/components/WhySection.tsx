"use client";

import { motion } from "framer-motion";

const WhySection = () => {
  const allSteps = [
    {
      number: "[1]",
      title: "Design Gaps:",
      description: "Functional issues, impractical layouts, or overlooked details.",
      image: "/images/why/ahmad-ossayli-jMucH8Q6bGc-unsplash.jpg"
    },
    {
      number: "[2]",
      title: "Execution Risks:",
      description: "Poor workmanship, sequencing errors, or misinterpretation of drawings.",
      image: "/images/why/hana-kim-slRc0JDsMdk-unsplash.jpg"
    },
    {
      number: "[3]",
      title: "Material Mismatches:",
      description: "Wrong selections leading to durability or aesthetic compromises.",
      image: "/images/why/ionut-vlad-idXQEOxhmvU-unsplash.jpg"
    },
    {
      number: "[4]",
      title: "Budget Overruns:",
      description: "Unforeseen changes, disputes, or delayed procurement.",
      image: "/images/why/roberto-nickson-so3wgJLwDxo-unsplash.jpg"
    },
    {
      number: "[5]",
      title: "Compliance Failures:",
      description: "Code violations, missed sustainability benchmarks, or rejected approvals.",
      image: "/images/why/zane-lee-9cnzCy4YsNE-unsplash.jpg"
    }
  ];

  const topRowSteps = allSteps.slice(0, 2);
  const bottomRowSteps = allSteps.slice(2, 5);

  return (
    <section id="why" className="bg-black text-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              <h2 className="text-2xl md:text-2xl font-bold text-white mb-6" style={{ lineHeight: '120%' }}>
                # WHY -
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Why a Second <span className="text-blue-300">Opinion Matters</span>
              </h3>
            </div>
            
            {/* Right Column - Description */}
            <div className="lg:pt-4">
              <h4 className="text-2xl font-bold text-gray-300 mb-6" style={{ lineHeight: '130%' }}>
                The Hidden Cost of Overconfidence
              </h4>
              <p className="text-lg text-gray-300 leading-relaxed" style={{ lineHeight: '150%', fontWeight: 400 }}>
                In design and construction, what looks perfect on paper can unravel on site. Drawings clash, materials fail, budgets inflate, and deadlines slip. By the time issues surface, it's too late, the cost of rework far exceeds the cost of prevention.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Where Things Usually Go Wrong Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8" style={{ lineHeight: '120%' }}>
            Where Things Usually Go Wrong
          </h3>
        </motion.div>
      </div>

      {/* Two Images in One Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {topRowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Image Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)"
                  }}
                />
                {/* Number Overlay */}
                <div className="absolute top-6 right-6">
                  <span 
                    className="text-6xl font-bold text-blue-500 opacity-90"
                    style={{ 
                      fontFamily: 'monospace',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                    }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>
              {/* Text Below Image */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-white mb-3" style={{ lineHeight: '120%' }}>
                  {step.title}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed" style={{ lineHeight: '150%', fontWeight: 400 }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Three Images in Second Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {bottomRowSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Image Overlay */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)"
                  }}
                />
                {/* Number Overlay */}
                <div className="absolute top-6 right-6">
                  <span 
                    className="text-6xl font-bold text-blue-500 opacity-90"
                    style={{ 
                      fontFamily: 'monospace',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                    }}
                  >
                    {step.number}
                  </span>
                </div>
              </div>
              {/* Text Below Image */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-white mb-3" style={{ lineHeight: '120%' }}>
                  {step.title}
                </h3>
                <p className="text-base text-gray-300 leading-relaxed" style={{ lineHeight: '150%', fontWeight: 400 }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h4 className="text-xl font-medium text-white mb-6" style={{ lineHeight: '130%' }}>
            Ready to Protect Your Investment?
          </h4>
          <p className="text-base text-gray-300 mb-8 max-w-2xl mx-auto" style={{ lineHeight: '150%', fontWeight: 400 }}>
            Don't let design gaps and execution risks compromise your vision. Get expert insight that ensures your project succeeds from concept to completion.
          </p>
          <button 
            className="px-8 py-4 bg-blue-200 text-black font-bold text-lg uppercase tracking-wider hover:bg-blue-500 transition-all duration-300 transform hover:scale-105"
            style={{
              borderRadius: '0px',
              boxShadow: '0 4px 15px rgba(163,255,0,0.3)'
            }}
          >
            Get Your Second Opinion
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
