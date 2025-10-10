"use client";

import { FileSearch, Lightbulb, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const HowSection = () => {
  const methods = [
    {
      icon: <FileSearch className="h-12 w-12" style={{ color: 'rgb(181,50,30)' }} />,
      title: "Review Plans & Designs",
      description: "Carefully examine architectural and interior layouts to identify potential design flaws, functionality gaps, or execution challenges before work begins.",
      backgroundImage: "/images/how/pexels-cottonbro-8382256.jpg"
    },
    {
      icon: <Lightbulb className="h-12 w-12" style={{ color: 'rgb(181,50,30)' }} />,
      title: "Offer Alternative Solutions",
      description: "Present creative and practical options for layouts, material choices, technology integration, and time optimization, ensuring you have the best possible approach.",
      backgroundImage: "/images/how/pexels-energepic-com-27411-313691.jpg"
    },
    {
      icon: <Shield className="h-12 w-12" style={{ color: 'rgb(181,50,30)' }} />,
      title: "Ensure Compliance",
      description: "Verify that your project aligns with legal requirements, building codes, and technical standards, reducing the risk of costly delays or revisions.",
      backgroundImage: "/images/how/pexels-shkrabaanthony-5816291.jpg"
    },
    {
      icon: <TrendingUp className="h-12 w-12" style={{ color: 'rgb(181,50,30)' }} />,
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
      color: "bg-white/80 text-rust",
      textColor: "rgb(181,50,30)"
    },
    {
      number: "02",
      title: "Design Development Stage",
      description: "Suggesting functional & aesthetic improvements",
      color: "bg-white/80 text-rust",
      textColor: "rgb(181,50,30)"
    },
    {
      number: "03",
      title: "Execution",
      description: "Preventing errors & ensuring quality. Time management",
      color: "bg-white/80 text-rust",
      textColor: "rgb(181,50,30)"
    }
  ];

  return (
    <section id="how" className="py-20 relative" style={{backgroundImage: 'url("/images/how/how-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
      {/* White overlay for better readability */}
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <h3 className="text-4xl md:text-6xl font-league-spartan font-bold leading-tight pt-24" style={{ color: 'rgb(76,74,75)' }}>
                Our <span style={{ color: 'rgb(181,50,30)' }}>Approach</span>
              </h3>
            </div>
            
            {/* Right Column - Description */}
            <div className="lg:pt-4">
              <h4 className="text-2xl font-league-spartan font-bold mb-6" style={{ lineHeight: '130%', color: 'rgb(76,74,75)' }}>
                From Idea to Execution – We analyze things <span style={{ color: 'rgb(181,50,30)', fontStyle: 'italic' }}>differently</span>.
              </h4>
              <p className="text-lg font-league-spartan font-medium leading-relaxed mb-6" style={{ lineHeight: '150%', color: '#000000', textShadow: '0px 0px 1px rgba(0,0,0,0.1)' }}>
                As your Second Opinion Consultants, we act as a trusted, independent partner—reviewing, refining, and strengthening your project at every stage. Our goal is to ensure that your vision is executed flawlessly, cost-effectively, and in full compliance with standards.
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
              <div className="relative h-64 overflow-hidden group hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,1)] bg-white/90 border border-gray-200 hover:border-[rgb(181,50,30,0.3)] rounded-lg">
                {/* Content */}
                <div className="relative h-full p-8 flex flex-col justify-center">
                  <h3 className="text-xl group-hover:text-2xl font-league-spartan font-bold mb-4 transition-all duration-300" style={{ color: 'rgb(76,74,75)' }}>
                    <span style={{ color: 'rgb(181,50,30)' }}>{method.title.split(' ')[0]}</span>{' '}
                    <span style={{ color: 'rgb(76,74,75)' }}>{method.title.split(' ').slice(1).join(' ')}</span>
                  </h3>
                  <p className="text-sm leading-relaxed font-league-spartan font-medium" style={{ color: '#000000' }}>
                    {method.description}
                  </p>
                </div>
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
          <h3 className="text-3xl font-league-spartan font-bold text-center mb-12" style={{ color: 'rgb(76,74,75)' }}>
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
                <div className="relative h-full overflow-hidden group hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
                  {/* Content */}
                  <div className="relative flex flex-col items-center justify-center p-8 text-center h-full min-h-[320px]">
                    {/* Number with faded rusty red gradient background */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full text-4xl font-league-spartan font-bold mb-6 text-white shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(181,50,30,0.7) 0%, rgba(150,40,25,0.6) 100%)' }}>
                      {stage.number}
                    </div>
                    <h4 className="text-xl font-league-spartan font-bold mb-4 text-white">
                      {stage.title}
                    </h4>
                    <p className="font-league-spartan font-thin text-gray-300 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

            {/* Slogan with italic and shadow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p 
            className="text-xl font-league-spartan font-bold italic" 
            style={{ 
              color: 'rgb(0,0,0)', 
              lineHeight: '160%',
              textShadow: '1px 1px 3px rgba(0,0,0,0.1)',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            From <span style={{ color: 'rgb(181,50,30)', fontWeight: '500' }}>concept validation</span> to <span style={{ color: 'rgb(181,50,30)', fontWeight: '500' }}>final handover</span>, we make sure your project is not only well-designed on paper but also successful in reality.
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 md:p-12 shadow-2xl" style={{ borderRadius: '8px', backgroundColor: 'rgba(240,240,240,0.8)', boxShadow: '0 20px 40px rgba(0,0,0,0.08), 0 10px 20px rgba(0,0,0,0.04)' }}>
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-league-spartan font-bold" style={{ color: 'rgb(76,74,75)' }}>
                Looking Sideways is an Art and a Science.
              </h3>
            </div>
            <p className="text-lg mb-6 font-league-spartan font-medium" style={{ color: '#000000', letterSpacing: '0.01em' }}>
              Our expertise helps you save money, time, and resources to ensure your project&apos;s success.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/2nd logo small.png"
                  alt="Opinion Chambers Logo"
                  width={20}
                  height={20}
                  className="mr-3 flex-shrink-0"
                />
                <span className="font-league-spartan font-medium" style={{ color: 'rgb(76,74,75)' }}>Process Optimization</span>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/2nd logo small.png"
                  alt="Opinion Chambers Logo"
                  width={20}
                  height={20}
                  className="mr-3 flex-shrink-0"
                />
                <span className="font-league-spartan font-medium" style={{ color: 'rgb(76,74,75)' }}>Cost Efficiency</span>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/2nd logo small.png"
                  alt="Opinion Chambers Logo"
                  width={20}
                  height={20}
                  className="mr-3 flex-shrink-0"
                />
                <span className="font-league-spartan font-medium" style={{ color: 'rgb(76,74,75)' }}>Quality Assurance</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-5 right-5"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                <Image
                  src="/images/hero/LOGO (1).jpg"
                  alt="Opinion Chambers Logo"
                  width={120}
                  height={120}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
    </section>
  );
};

export default HowSection;
