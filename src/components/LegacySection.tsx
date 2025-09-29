"use client";

import { motion } from "framer-motion";
import { Award, Star, Users } from "lucide-react";

const LegacySection = () => {
  return (
    <section id="legacy" className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/images/about-us/vitaly-gariev-_4tpElFQemQ-unsplash.jpg)` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Legacy & Leadership
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
          >
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Backed by 35+ years of multi-disciplinary expertise, our leadership has shaped award-winning projects across residential, commercial, hospitality, and institutional sectors. Opinion Chambers stands at the intersection of design intelligence, execution literacy, and client advocacy. We are committed to:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span className="text-white/90">
                  <span className="font-semibold text-white">Unbiased Advice</span> – no vendor influence, only your interests.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span className="text-white/90">
                  <span className="font-semibold text-white">Clarity Before Concrete</span> – critical checks at the right stage.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
                <span className="text-white/90">
                  <span className="font-semibold text-white">Real-World Assurance</span> – what works, not just in renders.
                </span>
              </li>
            </ul>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              At the heart of Opinion Chambers is a belief that experience is the sharpest filter against error. Leading our practice is <span className="text-blue-400 font-semibold">Ar.(Dr.) Atul Gupta</span>, an architect with over three decades of professional expertise and a reputation for balancing vision with pragmatism. A Fellow of the Indian Institute of Architects (FIIA), having an exposure of working with various Professional Bodies, Architect Atul Gupta brings a rare blend of design intelligence, technical depth, and sustainability awareness.
            </p>
            
            <p className="text-lg text-white/90 leading-relaxed">
              His career is marked by leadership roles within the profession, from serving on various professional bodies, mentoring the next generation of architects, and winning a number of Design Competitions, Acclamations & Awards.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
              <Award className="h-20 w-20 mb-6" />
              <h3 className="text-3xl font-bold mb-4">35+ Years of Excellence</h3>
              <p className="text-lg opacity-90 mb-8">
                A legacy of architectural expertise and unwavering commitment to quality
              </p>
              <div className="flex items-center">
                <Star className="h-6 w-6 text-yellow-300 mr-2" />
                <span className="text-xl font-semibold">Experience Does Matter.</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="flex items-center justify-center mb-8">
              <Users className="h-10 w-10 text-blue-400 mr-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Our Team: Your Advantage
              </h3>
            </div>

            <p className="text-lg text-white/90 mb-8 leading-relaxed text-center">
              We bring in diverse skill sets and deep industry knowledge to deliver clarity, precision, and value at every stage of your project. We are:
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-semibold text-white mb-3 text-lg">Experienced in all scales</h4>
                <p className="text-white/80">From compact residential spaces to large-scale commercial developments</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-semibold text-white mb-3 text-lg">Detail-oriented</h4>
                <p className="text-white/80">We meticulously review drawings, specifications, and on-site execution</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="font-semibold text-white mb-3 text-lg">Client-focused</h4>
                <p className="text-white/80">Every decision is rooted in understanding your vision and priorities</p>
              </div>
            </div>
            
            <div className="text-center mt-8 bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <p className="text-xl text-blue-300 font-semibold leading-relaxed">
                With Opinion Chambers, you gain not just a second opinion, but a strategic partner committed to making your project the best it can be.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegacySection;
