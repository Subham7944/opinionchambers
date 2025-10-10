"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CardSwap, { Card } from "./ui/CardSwap";

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
          src="/images/why/what-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-white opacity-30"></div>
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
                style={{ color: "rgb(76,74,75)" }}
              >
                Why a Second <span style={{ color: "rgb(181,50,30)" }}>Opinion Matters</span>
              </h3>

              {/* Hidden Cost ofOverconfidence Section */}
              <div
                className="relative p-8 border-l-4 bg-white/80 rounded-lg shadow-lg mb-4"
                style={{ borderColor: "rgb(181,50,30)" }}
              >
                <h4
                  className="text-2xl font-league-spartan font-bold mb-4"
                  style={{ color: "rgb(181,50,30)", lineHeight: "120%" }}
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
                    style={{ color: "rgb(181,50,30)" }}
                  >
                    expert insight
                  </span>{" "}
                  with{" "}
                  <span
                    className="font-medium"
                    style={{ color: "rgb(181,50,30)" }}
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
                    <span style={{ color: "rgb(181,50,30)" }}>
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

      {/* The Opinion Chambers Advantage Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Column - Content with blur effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative p-8"
          >
            {/* Blur effect background - only behind text content */}
            <div className="absolute inset-0 bg-white/50 rounded-xl shadow-md" 
                 style={{ backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)' }}>
            </div>
            <div className="relative z-10">
            <h2
              className="text-3xl md:text-4xl font-league-spartan font-bold mb-6"
              style={{ color: "rgb(76,74,75)" }}
            >
              The Opinion Chambers Advantage – Why you should hire Us
            </h2>

            <p
              className="text-lg font-league-spartan font-thin mb-8 leading-relaxed"
              style={{ color: "#000000" }}
            >
              Choosing Opinion Chambers means gaining more than a second
              opinion—you gain a partner dedicated to elevating your project&apos;s
              success. Our expertise ensures your ideas are transformed into
              results that are beautiful, functional, and cost-effective.
            </p>

            <div className="mb-6">
              <h3
                className="text-xl font-league-spartan font-medium mb-4"
                style={{ color: "rgb(76,74,75)" }}
              >
                Our advantages include:
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "rgb(181,50,30)" }}
                ></div>
                <div>
                  <span
                    className="font-league-spartan font-bold"
                    style={{ color: "rgb(181,50,30)" }}
                  >
                    Fresh Creative Perspectives
                  </span>
                  <span
                    className="font-league-spartan font-medium"
                    style={{ color: "#000000" }}
                  >
                    {" "}
                    – Bringing new ideas and design insights that enhance your
                    project&apos;s potential.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "rgb(181,50,30)" }}
                ></div>
                <div>
                  <span
                    className="font-league-spartan font-bold"
                    style={{ color: "rgb(181,50,30)" }}
                  >
                    Early Detection of Potential Issues
                  </span>
                  <span
                    className="font-league-spartan font-medium"
                    style={{ color: "#000000" }}
                  >
                    {" "}
                    – Identifying challenges before they escalate, saving time,
                    money, and effort.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "rgb(181,50,30)" }}
                ></div>
                <div>
                  <span
                    className="font-league-spartan font-bold"
                    style={{ color: "rgb(181,50,30)" }}
                  >
                    Alternative Layouts and Design Solutions
                  </span>
                  <span
                    className="font-league-spartan font-medium"
                    style={{ color: "#000000" }}
                  >
                    {" "}
                    – Offering multiple approaches to achieve the best balance
                    of aesthetics, functionality, and efficiency.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "rgb(181,50,30)" }}
                ></div>
                <div>
                  <span
                    className="font-league-spartan font-bold"
                    style={{ color: "rgb(181,50,30)" }}
                  >
                    Expertise That Minimizes Costly Errors
                  </span>
                  <span
                    className="font-league-spartan font-medium"
                    style={{ color: "#000000" }}
                  >
                    {" "}
                    – Drawing from decades of professional experience to prevent
                    mistakes and ensure smooth execution.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "rgb(181,50,30)" }}
                ></div>
                <div>
                  <span
                    className="font-league-spartan font-bold"
                    style={{ color: "rgb(181,50,30)" }}
                  >
                    Budget-Friendly Planning
                  </span>
                  <span
                    className="font-league-spartan font-medium"
                    style={{ color: "#000000" }}
                  >
                    {" "}
                    – Helping you make smart financial decisions without
                    compromising quality or style.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "rgb(181,50,30)" }}
                ></div>
                <div>
                  <span
                    className="font-league-spartan font-bold"
                    style={{ color: "rgb(181,50,30)" }}
                  >
                    Optimized Resource Use
                  </span>
                  <span
                    className="font-league-spartan font-medium"
                    style={{ color: "#000000" }}
                  >
                    {" "}
                    – Maximizing the value of time, materials, and manpower for
                    efficient project delivery.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: "rgb(181,50,30)" }}
                ></div>
                <div>
                  <span
                    className="font-league-spartan font-bold"
                    style={{ color: "rgb(181,50,30)" }}
                  >
                    Superior End Results
                  </span>
                  <span
                    className="font-league-spartan font-medium"
                    style={{ color: "#000000" }}
                  >
                    {" "}
                    – Ensuring the final outcome not only meets but exceeds your
                    expectations.
                  </span>
                </div>
              </div>
            </div>
            </div>
          </motion.div>

          {/* Right Column - CardSwap Component */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div style={{ height: "600px", position: "relative" }}>
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={true}
                width={400}
                height={300}
              >
                <Card customClass="rounded-2xl overflow-hidden">
                  <div
                    className="p-6 h-full flex flex-col justify-center items-center text-center relative"
                    style={{
                      background:
                        "linear-gradient(135deg, #0f0c29, #121232, #24243e)",
                    }}
                  >
                    <div className="absolute top-4 left-4">
                      <Image
                        src="/images/2nd logo small.png"
                        alt="2nd Opinion Logo"
                        width={80}
                        height={80}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="mt-4 mb-6 opacity-90">
                      <span
                        className="text-6xl font-league-spartan font-bold bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #a855f7, #818cf8)",
                        }}
                      >
                        1
                      </span>
                    </div>
                    <h3 className="text-xl font-league-spartan font-bold text-white mb-3">
                      Fresh Creative Perspectives
                    </h3>
                    <p className="text-blue-200 font-league-spartan font-thin text-sm leading-relaxed">
                      Bringing new ideas and design insights that enhance your
                      project&apos;s potential.
                    </p>
                  </div>
                </Card>
                <Card customClass="rounded-2xl overflow-hidden">
                  <div
                    className="p-6 h-full flex flex-col justify-center items-center text-center relative"
                    style={{
                      background:
                        "linear-gradient(135deg, #0f0c29, #121232, #24243e)",
                    }}
                  >
                    <div className="absolute top-4 left-4">
                      <Image
                        src="/images/2nd logo small.png"
                        alt="2nd Opinion Logo"
                        width={80}
                        height={80}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="mt-4 mb-6 opacity-90">
                      <span
                        className="text-6xl font-league-spartan font-bold bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #a855f7, #818cf8)",
                        }}
                      >
                        2
                      </span>
                    </div>
                    <h3 className="text-xl font-league-spartan font-bold text-white mb-3">
                      Early Detection of Issues
                    </h3>
                    <p className="text-blue-200 font-league-spartan font-thin text-sm leading-relaxed">
                      Identifying challenges before they escalate, saving time,
                      money, and effort.
                    </p>
                  </div>
                </Card>
                <Card customClass="rounded-2xl overflow-hidden">
                  <div
                    className="p-6 h-full flex flex-col justify-center items-center text-center relative"
                    style={{
                      background:
                        "linear-gradient(135deg, #0f0c29, #121232, #24243e)",
                    }}
                  >
                    <div className="absolute top-4 left-4">
                      <Image
                        src="/images/2nd logo small.png"
                        alt="2nd Opinion Logo"
                        width={80}
                        height={80}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="mt-4 mb-6 opacity-90">
                      <span
                        className="text-6xl font-league-spartan font-bold bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #a855f7, #818cf8)",
                        }}
                      >
                        3
                      </span>
                    </div>
                    <h3 className="text-xl font-league-spartan font-bold text-white mb-3">
                      Alternative Design Solutions
                    </h3>
                    <p className="text-blue-200 font-league-spartan font-thin text-sm leading-relaxed">
                      Multiple approaches to achieve the best balance of
                      aesthetics and functionality.
                    </p>
                  </div>
                </Card>
                <Card customClass="rounded-2xl overflow-hidden">
                  <div
                    className="p-6 h-full flex flex-col justify-center items-center text-center relative"
                    style={{
                      background:
                        "linear-gradient(135deg, #0f0c29, #121232, #24243e)",
                    }}
                  >
                    <div className="absolute top-4 left-4">
                      <Image
                        src="/images/2nd logo small.png"
                        alt="2nd Opinion Logo"
                        width={80}
                        height={80}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="mt-4 mb-6 opacity-90">
                      <span
                        className="text-6xl font-league-spartan font-bold bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #a855f7, #818cf8)",
                        }}
                      >
                        4
                      </span>
                    </div>
                    <h3 className="text-xl font-league-spartan font-bold text-white mb-3">
                      Minimize Costly Errors
                    </h3>
                    <p className="text-blue-200 font-league-spartan font-thin text-sm leading-relaxed">
                      Decades of experience to prevent mistakes and ensure
                      smooth execution.
                    </p>
                  </div>
                </Card>
                <Card customClass="rounded-2xl overflow-hidden">
                  <div
                    className="p-6 h-full flex flex-col justify-center items-center text-center relative"
                    style={{
                      background:
                        "linear-gradient(135deg, #0f0c29, #121232, #24243e)",
                    }}
                  >
                    <div className="absolute top-4 left-4">
                      <Image
                        src="/images/2nd logo small.png"
                        alt="2nd Opinion Logo"
                        width={80}
                        height={80}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="mt-4 mb-6 opacity-90">
                      <span
                        className="text-6xl font-league-spartan font-bold bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #a855f7, #818cf8)",
                        }}
                      >
                        5
                      </span>
                    </div>
                    <h3 className="text-xl font-league-spartan font-bold text-white mb-3">
                      Budget-Friendly Planning
                    </h3>
                    <p className="text-blue-200 font-league-spartan font-thin text-sm leading-relaxed">
                      Smart financial decisions without compromising quality or
                      style.
                    </p>
                  </div>
                </Card>
                <Card customClass="rounded-2xl overflow-hidden">
                  <div
                    className="p-6 h-full flex flex-col justify-center items-center text-center relative"
                    style={{
                      background:
                        "linear-gradient(135deg, #0f0c29, #121232, #24243e)",
                    }}
                  >
                    <div className="absolute top-4 left-4">
                      <Image
                        src="/images/2nd logo small.png"
                        alt="2nd Opinion Logo"
                        width={80}
                        height={80}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="mt-4 mb-6 opacity-90">
                      <span
                        className="text-6xl font-league-spartan font-bold bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #a855f7, #818cf8)",
                        }}
                      >
                        6
                      </span>
                    </div>
                    <h3 className="text-xl font-league-spartan font-bold text-white mb-3">
                      Optimized Resource Use
                    </h3>
                    <p className="text-blue-200 font-league-spartan font-thin text-sm leading-relaxed">
                      Maximizing value of time, materials, and manpower for
                      efficient delivery.
                    </p>
                  </div>
                </Card>
                <Card customClass="rounded-2xl overflow-hidden">
                  <div
                    className="p-6 h-full flex flex-col justify-center items-center text-center relative"
                    style={{
                      background:
                        "linear-gradient(135deg, #0f0c29, #121232, #24243e)",
                    }}
                  >
                    <div className="absolute top-4 left-4">
                      <Image
                        src="/images/2nd logo small.png"
                        alt="2nd Opinion Logo"
                        width={80}
                        height={80}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="mt-4 mb-6 opacity-90">
                      <span
                        className="text-6xl font-league-spartan font-bold bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(to right, #a855f7, #818cf8)",
                        }}
                      >
                        7
                      </span>
                    </div>
                    <h3 className="text-xl font-league-spartan font-bold text-white mb-3">
                      Superior End Results
                    </h3>
                    <p className="text-blue-200 font-league-spartan font-thin text-sm leading-relaxed">
                      Final outcomes that not only meet but exceed your
                      expectations.
                    </p>
                  </div>
                </Card>
              </CardSwap>
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
              className="text-3xl md:text-4xl font-league-spartan font-bold italic"
              style={{
                color: "rgb(76,74,75)",
                lineHeight: "130%",
                textShadow:
                  "2px 2px 4px rgba(0,0,0,0.1), 0 0 8px rgba(181,50,30,0.2)",
              }}
            >
              We see what others{" "}
              <span style={{ color: "rgb(181,50,30)" }}>miss out</span>.
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
