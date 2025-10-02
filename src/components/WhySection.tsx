"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhySection = () => {
  return (
    <section id="why" className="bg-white">
      {/* First Page: Why a Second Opinion Matters */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-league-spartan font-bold text-3xl md:text-4xl lg:text-5xl text-grey mb-8 underline decoration-rust decoration-4 underline-offset-4">
            Why a Second Opinion Matters
          </h2>
          
          <h3 className="font-league-spartan font-bold text-xl md:text-2xl lg:text-3xl text-grey mb-6">
            Beyond Overconfidence: The Power of Grounded Vision
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mt-12">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="font-league-spartan text-base md:text-lg text-grey leading-relaxed">
              In design and construction, what looks perfect on paper can unravel on site. Drawings clash, materials fail, budgets inflate, and deadlines slip. By the time issues surface, it&apos;s too late, the cost of rework far exceeds the cost of prevention.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-league-spartan font-bold text-lg md:text-xl text-grey">Where Things Usually Go Wrong</h4>
              
              <div className="space-y-3">
                <div>
                  <p className="font-league-spartan font-bold text-grey">Design Gaps:</p>
                  <p className="font-league-spartan text-grey">Functional issues, impractical layouts, or overlooked details.</p>
                </div>
                
                <div>
                  <p className="font-league-spartan font-bold text-grey">Execution Risks:</p>
                  <p className="font-league-spartan text-grey">Poor workmanship, sequencing errors, or misinterpretation of drawings.</p>
                </div>
                
                <div>
                  <p className="font-league-spartan font-bold text-grey">Material Mismatches:</p>
                  <p className="font-league-spartan text-grey">Wrong selections leading to durability or aesthetic compromises.</p>
                </div>
                
                <div>
                  <p className="font-league-spartan font-bold text-grey">Budget Overruns:</p>
                  <p className="font-league-spartan text-grey">Unforeseen changes, disputes, or delayed procurement.</p>
                </div>
                
                <div>
                  <p className="font-league-spartan font-bold text-grey">Compliance Failures:</p>
                  <p className="font-league-spartan text-grey">Code violations, missed sustainability benchmarks, or rejected approvals.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <p className="font-league-spartan text-base md:text-lg text-grey mb-4 leading-relaxed">
              Our approach blends <span className="font-bold">expert insight</span> with <span className="font-bold">creative problem-solving</span>, helping you identify overlooked opportunities and potential challenges before they turn into costly mistakes.
            </p>
            
            <p className="font-league-spartan text-base md:text-lg text-grey mb-6 leading-relaxed">
              Whether you need <span className="font-bold">concept validation</span>, <span className="font-bold">design refinement</span>, or a <span className="font-bold">thorough execution review</span>, we bring clarity, precision, and innovative thinking to every stage of your project. By assessing <span className="font-bold">aesthetics, space utilization, material choices, and quality standards</span>, we provide actionable recommendations that strengthen your design and enhance overall performance.
            </p>
            
            <p className="font-league-spartan text-base md:text-lg text-grey font-bold leading-relaxed">
              The result - A project that not only meets expectations but exceeds them—delivered with confidence, efficiency, and style and within the time frame. Your vision deserves to be realized in the best possible way. A fresh set of expert eyes can make all the difference.
            </p>
            
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
          </div>
        </div>
      </div>
      
      {/* Large Spacer */}
      <div className="h-32 md:h-48 lg:h-64 bg-gray-50"></div>
      
      {/* Second Page: The Opinion Chambers Advantage */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Title in box */}
          <div className="mb-12 py-4">
            <h2 className="font-league-spartan font-bold text-3xl md:text-4xl lg:text-5xl text-grey text-center">
              The Opinion Chambers Advantage – Why you should hire Us
            </h2>
          </div>
          
          <p className="font-league-spartan text-base md:text-lg text-grey mb-8 leading-relaxed">
            Choosing Opinion Chambers means gaining more than a second opinion—you gain a partner dedicated to elevating your project&apos;s success. Our expertise ensures your ideas are transformed into results that are beautiful, functional, and cost-effective.
          </p>
          
          <p className="font-league-spartan text-base md:text-lg font-bold text-grey mb-6">
            Our advantages include:
          </p>
          
          <div className="space-y-4 mb-16">
            <div className="flex items-start">
              <span className="text-rust font-bold mr-2">-</span>
              <div>
                <span className="font-league-spartan font-bold text-grey">Fresh Creative Perspectives</span>
                <span className="font-league-spartan text-grey"> – Bringing new ideas and design insights that enhance your project&apos;s potential.</span>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-rust font-bold mr-2">-</span>
              <div>
                <span className="font-league-spartan font-bold text-grey">Early Detection of Potential Issues</span>
                <span className="font-league-spartan text-grey"> – Identifying challenges before they escalate, saving time, money, and effort.</span>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-rust font-bold mr-2">-</span>
              <div>
                <span className="font-league-spartan font-bold text-grey">Alternative Layouts and Design Solutions</span>
                <span className="font-league-spartan text-grey"> – Offering multiple approaches to achieve the best balance of aesthetics, functionality, and efficiency.</span>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-rust font-bold mr-2">-</span>
              <div>
                <span className="font-league-spartan font-bold text-grey">Expertise That Minimizes Costly Errors</span>
                <span className="font-league-spartan text-grey"> – Drawing from decades of professional experience to prevent mistakes and ensure smooth execution.</span>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-rust font-bold mr-2">-</span>
              <div>
                <span className="font-league-spartan font-bold text-grey">Budget-Friendly Planning</span>
                <span className="font-league-spartan text-grey"> – Helping you make smart financial decisions without compromising quality or style.</span>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-rust font-bold mr-2">-</span>
              <div>
                <span className="font-league-spartan font-bold text-grey">Optimized Resource Use</span>
                <span className="font-league-spartan text-grey"> – Maximizing the value of time, materials, and manpower for efficient project delivery.</span>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="text-rust font-bold mr-2">-</span>
              <div>
                <span className="font-league-spartan font-bold text-grey">Superior End Results</span>
                <span className="font-league-spartan text-grey"> – Ensuring the final outcome not only meets but exceeds your expectations.</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-16">
            <h3 className="font-league-spartan font-bold text-3xl md:text-4xl lg:text-5xl text-grey mb-4">
              We see what others miss out.
            </h3>
          </div>
          
          {/* Logo positioned at bottom right */}
          <div className="flex justify-end">
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
      </div>
    </section>
  );
};

export default WhySection;
