"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhySection = () => {
  const allSteps = [
    {
      number: "[1]",
      title: "Design Gaps:",
      description:
        "Functional issues, impractical layouts, or overlooked details.",
      image: "/images/why/ahmad-ossayli-jMucH8Q6bGc-unsplash.jpg",
    },
    {
      number: "[2]",
      title: "Execution Risks:",
      description:
        "Poor workmanship, sequencing errors, or misinterpretation of drawings.",
      image: "/images/why/hana-kim-slRc0JDsMdk-unsplash.jpg",
    },
    {
      number: "[3]",
      title: "Material Mismatches:",
      description:
        "Wrong selections leading to durability or aesthetic compromises.",
      image: "/images/why/ionut-vlad-idXQEOxhmvU-unsplash.jpg",
    },
    {
      number: "[4]",
      title: "Budget Overruns:",
      description: "Unforeseen changes, disputes, or delayed procurement.",
      image: "/images/why/roberto-nickson-so3wgJLwDxo-unsplash.jpg",
    },
    {
      number: "[5]",
      title: "Compliance Failures:",
      description:
        "Code violations, missed sustainability benchmarks, or rejected approvals.",
      image: "/images/why/zane-lee-9cnzCy4YsNE-unsplash.jpg",
    },
  ];

  // Display all steps in a single row

  return (
    <section id="why" className="relative overflow-hidden">
      {/* Background Image with Washout Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/why/why.jpg"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
          style={{ filter: "grayscale(100%) contrast(1.05) brightness(1.05)" }}
        />
        <div className="absolute inset-0 bg-white opacity-40"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Title and Hidden Cost */}
            <div>
              <h3
                className="pt-4 text-4xl md:text-6xl font-league-spartan font-bold leading-tight mb-8"
                style={{ color: "#000000" }}
              >
                Why a Second Opinion Matters
              </h3>

              {/* Hidden Cost ofOverconfidence Section */}
              <div
                className="relative p-8 border-l-4 bg-white/80 rounded-lg shadow-lg mb-4"
                style={{ borderColor: "rgb(181,50,30)" }}
              >
                <h4
                  className="text-2xl font-league-spartan font-bold mb-4"
                  style={{ color: "rgb(76,74,75)", lineHeight: "120%" }}
                >
                  The Hidden Cost of Overconfidence
                </h4>
                <p
                  className="text-lg font-league-spartan font-thin leading-relaxed"
                  style={{ lineHeight: "160%", color: "#000000" }}
                >
                  In design and construction, what looks perfect on paper can
                  unravel on site. Drawings clash, materials fail, budgets
                  inflate, and deadlines slip. By the time issues surface, it&apos;s
                  too late, the cost of rework far exceeds the cost of
                  prevention.
                </p>
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div>
              <div className="pt-8">
                <p
                  className="text-lg font-league-spartan font-thin leading-relaxed"
                  style={{ lineHeight: "160%", color: "#000000" }}
                >
                  Our approach blends{" "}
                  <span
                    className="font-medium"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    expert insight
                  </span>{" "}
                  with{" "}
                  <span
                    className="font-medium"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    creative problem-solving
                  </span>
                  , helping you identify overlooked opportunities and potential
                  challenges before they turn into costly mistakes.
                </p>

                <p
                  className="text-lg font-league-spartan font-thin leading-relaxed"
                  style={{ lineHeight: "160%", color: "#000000" }}
                >
                  Whether you need{" "}
                  <span
                    className="font-medium"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    concept validation
                  </span>
                  ,{" "}
                  <span
                    className="font-medium"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    design refinement
                  </span>
                  , or a{" "}
                  <span
                    className="font-medium"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    thorough execution review
                  </span>
                  , we bring clarity, precision, and innovative thinking to
                  every stage of your project. By assessing aesthetics, space
                  utilization, material choices, and quality standards, we
                  provide actionable recommendations that strengthen your design
                  and enhance overall performance.
                </p>

                <div
                  className="pl-4 border-l-2"
                  style={{ borderColor: "rgb(181,50,30)" }}
                >
                  <p
                    className="text-lg font-league-spartan font-medium italic leading-relaxed"
                    style={{ lineHeight: "160%", color: "rgb(76,74,75)" }}
                  >
                    The result - A project that not only meets expectations but{" "}
                    <span style={{ color: "rgb(76,74,75)" }}>
                      exceeds them
                    </span>
                    —delivered with confidence, efficiency, and style and within
                    the time frame. Your vision deserves to be realized in the
                    best possible way. A fresh set of expert eyes can make all
                    the difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Approach Section Removed */}
      </div>

      {/* Where Things Usually Go Wrong Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3
            className="text-3xl md:text-4xl font-league-spartan font-bold mb-8"
            style={{ lineHeight: "120%", color: "rgb(76,74,75)" }}
          >
            Where Things Usually Go Wrong
          </h3>
        </motion.div>
      </div>

      {/* All 5 Points in One Row */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-5 gap-3 mb-20"
        >
          {allSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group cursor-pointer"
            >
              <div className="aspect-[1/1] relative">
                <div className="relative w-full h-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                {/* Image Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)",
                  }}
                />
              </div>
              {/* Text Below Image */}
              <div className="pt-2">
                <h3
                  className="text-sm font-league-spartan font-bold mb-1"
                  style={{ lineHeight: "120%", color: "rgb(76,74,75)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs leading-relaxed font-league-spartan font-medium"
                  style={{ lineHeight: "140%", color: "#000000" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* The Opinion Chambers Advantage Section - Full Width with Semi-transparent Background */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-20 py-20 bg-white/60">
        <div className="relative z-10">
          {/* Left Column - Content with blur effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative p-10 mx-auto max-w-6xl"
          >
            {/* Blur effect background - only behind text content */}
            {/* Glass background removed */}
            <div className="relative z-10">
            <h2
              className="text-3xl md:text-5xl font-league-spartan font-bold mb-8 text-center"
              style={{ color: "#000000", letterSpacing: "0.01em" }}
            >
              The Opinion Chambers Advantage
            </h2>

            <p
              className="text-lg font-league-spartan mb-10 leading-relaxed text-center mx-auto max-w-3xl"
              style={{ color: "rgb(60,60,60)", lineHeight: "1.8", fontWeight: 400 }}
            >
              Choosing Opinion Chambers means gaining more than a second
              opinion—you gain a partner dedicated to elevating your project&apos;s
              success. Our expertise ensures your ideas are transformed into
              results that are beautiful, functional, and cost-effective.
            </p>
            
            <div className="w-24 h-0.5 bg-gray-300 mx-auto mb-10"></div>

            <div className="text-center mb-10">
              <h3
                className="text-2xl font-league-spartan font-medium mb-4"
                style={{ color: "rgb(76,74,75)" }}
              >
                Why Partner With Us
              </h3>
            </div>

            {/* First row - 4 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 aspect-auto h-full flex flex-col">
                <div className="mb-4 relative">
                  <Image
                    src="/images/Only 2.png"
                    alt="Opinion Chambers Logo"
                    width={28}
                    height={28}
                    className="absolute -left-2 top-2"
                  />
                  <h4
                    className="font-league-spartan font-bold text-md pl-6"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    Fresh Creative Perspectives
                  </h4>
                </div>
                <div className="flex-grow">
                  <p className="font-league-spartan font-thin text-sm" style={{ color: "#000000", lineHeight: "150%" }}>
                    Bringing new ideas and design insights that enhance your
                    project&apos;s potential.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 aspect-auto h-full flex flex-col">
                <div className="mb-4 relative">
                  <Image
                    src="/images/Only 2.png"
                    alt="Opinion Chambers Logo"
                    width={28}
                    height={28}
                    className="absolute -left-2 top-2"
                  />
                  <h4
                    className="font-league-spartan font-bold text-md pl-6"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    Early Detection of Potential Issues
                  </h4>
                </div>
                <div className="flex-grow">
                  <p className="font-league-spartan font-thin text-sm" style={{ color: "#000000", lineHeight: "150%" }}>
                    Identifying challenges before they escalate, saving time,
                    money, and effort.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 aspect-auto h-full flex flex-col">
                <div className="mb-4 relative">
                  <Image
                    src="/images/Only 2.png"
                    alt="Opinion Chambers Logo"
                    width={28}
                    height={28}
                    className="absolute -left-2 top-2"
                  />
                  <h4
                    className="font-league-spartan font-bold text-md pl-6"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    Alternative Layouts and Design Solutions
                  </h4>
                </div>
                <div className="flex-grow">
                  <p className="font-league-spartan font-thin text-sm" style={{ color: "#000000", lineHeight: "150%" }}>
                    Offering multiple approaches to achieve the best balance
                    of aesthetics, functionality, and efficiency.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 aspect-auto h-full flex flex-col">
                <div className="mb-4 relative">
                  <Image
                    src="/images/Only 2.png"
                    alt="Opinion Chambers Logo"
                    width={28}
                    height={28}
                    className="absolute -left-2 top-2"
                  />
                  <h4
                    className="font-league-spartan font-bold text-md pl-6"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    Expertise That Minimizes Costly Errors
                  </h4>
                </div>
                <div className="flex-grow">
                  <p className="font-league-spartan font-thin text-sm" style={{ color: "#000000", lineHeight: "150%" }}>
                    Drawing from decades of professional experience to prevent
                    mistakes and ensure smooth execution.
                  </p>
                </div>
              </div>

            </div>
            
            {/* Second row - 3 items */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 aspect-auto h-full flex flex-col">
                <div className="mb-4 relative">
                  <Image
                    src="/images/Only 2.png"
                    alt="Opinion Chambers Logo"
                    width={28}
                    height={28}
                    className="absolute -left-2 top-0"
                  />
                  <h4
                    className="font-league-spartan font-bold text-md pl-6"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    Budget-Friendly Planning
                  </h4>
                </div>
                <div className="flex-grow">
                  <p className="font-league-spartan font-thin text-sm" style={{ color: "#000000", lineHeight: "150%" }}>
                    Helping you make smart financial decisions without
                    compromising quality or style.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 aspect-auto h-full flex flex-col">
                <div className="mb-4 relative">
                  <Image
                    src="/images/Only 2.png"
                    alt="Opinion Chambers Logo"
                    width={28}
                    height={28}
                    className="absolute -left-2 top-0"
                  />
                  <h4
                    className="font-league-spartan font-bold text-md pl-6"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    Optimized Resource Use
                  </h4>
                </div>
                <div className="flex-grow">
                  <p className="font-league-spartan font-thin text-sm" style={{ color: "#000000", lineHeight: "150%" }}>
                    Maximizing the value of time, materials, and manpower for
                    efficient project delivery.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 aspect-auto h-full flex flex-col">
                <div className="mb-4 relative">
                  <Image
                    src="/images/Only 2.png"
                    alt="Opinion Chambers Logo"
                    width={28}
                    height={28}
                    className="absolute -left-2 top-0"
                  />
                  <h4
                    className="font-league-spartan font-bold text-md pl-6"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    Superior End Results
                  </h4>
                </div>
                <div className="flex-grow">
                  <p className="font-league-spartan font-thin text-sm" style={{ color: "#000000", lineHeight: "150%" }}>
                    Ensuring the final outcome not only meets but exceeds your
                    expectations.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </motion.div>


        </div>
      </div>

      {/* Slogan with italic, bold styling and background shadow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="text-center">
          <div className="inline-block">
            <h3
              className="text-3xl md:text-4xl font-league-spartan font-bold italic pt-4"
              style={{
                color: "rgb(76,74,75)",
                lineHeight: "130%",
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.1), 0 0 8px rgba(0,0,0,0.2)",
              }}
            >
              We see what others miss out.
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Logo positioned at bottom right */}
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

export default WhySection;
