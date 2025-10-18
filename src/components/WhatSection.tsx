"use client";

import { motion } from "framer-motion";
import BlurText from "./ui/BlurText";
import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
  NormalCardBody,
  NormalCardTitle,
  NormalCardSubtitle,
  NormalCardImage,
} from "./ui/normal-card";

const WhatSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  
  const toggleCard = (id: number) => {
    setExpandedCard(expandedCard === id ? null : id);
  };
  const sections = [
    {
      id: 1,
      title: "Detect Risks Early",
      subtitle: "PROACTIVE RISK ASSESSMENT",
      image: "/images/what/risk.jpg",
    },
    {
      id: 2,
      title: "Offer Practical Alternatives",
      subtitle: "INNOVATIVE DESIGN SOLUTIONS",
      image: "/images/what/practical-alternative.jpg",
    },
    {
      id: 3,
      title: "Optimize Resources & Costs",
      subtitle: "STRATEGIC VALUE ENGINEERING",
      image: "/images/what/optimize-resource.jpg",
    },
    {
      id: 4,
      title: "Optimize Time",
      subtitle: "EFFICIENT PROJECT DELIVERY",
      image: "/images/what/optimize-time.jpg",
    },
  ];

  return (
    <section id="what" className="py-16 md:py-24 bg-white relative">
      {/* Background with washout effect - now covering the entire section */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/images/what/what-bg1.jpg)",
          opacity: 0.6 /* Increased opacity for more visibility */,
          filter: "grayscale(100%) contrast(1.05) brightness(1.05)",
        }}
      ></div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.6) 100%)",
        }}
      ></div>
      {/* Section Header with Blur Background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12 mb-16">
        <div
          className="absolute inset-0 bg-white/30 rounded-xl shadow-lg"
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        ></div>
        <div className="flex flex-col md:flex-row items-start relative p-6 md:p-6">
          {/* Vertical divider line */}
          <div
            className="hidden md:block absolute left-1/2 top-12 bottom-12 transform -translate-x-1/2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, rgba(181,50,30,0) 0%, rgba(181,50,30,0.7) 30%, rgba(181,50,30,0.7) 70%, rgba(181,50,30,0) 100%)",
            }}
          ></div>
          {/* Left Column - Text Content */}
          <div className="md:w-1/2">
            <div className="text-center md:text-center pr-0 md:pr-8">
              <BlurText
                text="What We Do"
                delay={100}
                animateBy="words"
                direction="top"
                className="pt-8 pl-0 md:pl-4 text-3xl md:text-4xl lg:text-6xl font-league-spartan font-bold leading-tight text-rust text-center md:text-left"
              />

              <div className="mt-6 max-w-xl mx-auto md:mx-0">
                <p
                  className="text-sm md:text-base lg:text-lg font-league-spartan leading-relaxed mb-4 relative pl-4 border-l-2 text-center md:text-left"
                  style={{
                    lineHeight: "160%",
                    color: "#000000",
                    fontWeight: 500,
                    borderColor: "rgba(181,50,30,0.5)",
                  }}
                >
                  Whether it is a{" "}
                  <span
                    className="font-bold"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    new build
                  </span>
                  ,{" "}
                  <span
                    className="font-bold"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    renovation
                  </span>
                  , or{" "}
                  <span
                    className="font-bold"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    interior work
                  </span>
                  , we help you with our insights.
                </p>
                <p
                  className="text-sm md:text-base lg:text-lg font-league-spartan leading-relaxed relative pl-4 border-l-2 text-center md:text-left"
                  style={{
                    lineHeight: "160%",
                    color: "#000000",
                    fontWeight: 500,
                    borderColor: "rgba(181,50,30,0.5)",
                  }}
                >
                  We bring a fresh set of expert eyes to review your{" "}
                  <span
                    className="font-bold"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    drawings
                  </span>
                  ,{" "}
                  <span
                    className="font-bold"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    details
                  </span>
                  , and{" "}
                  <span
                    className="font-bold"
                    style={{ color: "rgb(76,74,75)" }}
                  >
                    site execution
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Description */}
          <div className="md:w-1/2 pt-10 md:pt-12 lg:pt-8 pl-0 md:pl-8">
            <div className="text-center md:text-left pl-0 md:pl-4">
              <h4
                className="text-base md:text-2xl lg:text-3xl font-league-spartan font-bold mb-4 md:mb-6"
                style={{ lineHeight: "140%", color: "rgb(0,0,0)" }}
              >
                Second Opinion: A Fresh Perspective for Your Project&apos;s
                Success
              </h4>
              <p
                className="text-sm md:text-base lg:text-lg font-league-spartan leading-relaxed mb-4 md:mb-6"
                style={{
                  lineHeight: "160%",
                  color: "rgb(76,74,75)",
                  fontWeight: 500,
                }}
              >
                A Second Opinion Consultation is more than just a
                review—it&apos;s a strategic checkpoint to ensure your
                architectural or interior design project is on the right track.
                With an independent, unbiased perspective, we evaluate your
                plans and ideas against functionality, aesthetics, and quality
                benchmarks, while keeping your goals at the center.
              </p>
              <p
                className="text-sm md:text-base lg:text-lg font-league-spartan leading-relaxed"
                style={{
                  lineHeight: "160%",
                  color: "rgb(76,74,75)",
                  fontWeight: 500,
                }}
              >
                Most projects look flawless on paper, but once construction
                begins, time, money, and quality often slip away.{" "}
                <span className="font-bold" style={{ color: "rgb(76,74,75)" }}>
                  We exist to make sure that doesn&apos;t happen.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slogan with text effect */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-10"
        >
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-league-spartan font-bold italic pb-1 px-4"
            style={{
              color: "rgb(76,74,75)",
              textShadow: "2px 2px 6px rgba(0,0,0,0.25)",
            }}
          >
            We provide Customised Project Specific Opinions
          </h2>

          {/* Fading underline effect */}
          <div
            className="h-0.5 mx-auto"
            style={{
              width: "80%",
              maxWidth: "600px",
              background:
                "linear-gradient(to right, rgba(181,50,30,0) 0%, rgba(181,50,30,0.8) 30%, rgba(181,50,30,0.8) 70%, rgba(181,50,30,0) 100%)",
              marginTop: "5px",
            }}
          ></div>
        </motion.div>
      </div>

      {/* 3D Cards in a single row */}
      <div className="relative mt-0 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Desktop view: Same size fixed width cards with reduced spacing */}
          <div className="hidden lg:grid grid-cols-4 gap-3 mt-8">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: section.id * 0.1 }}
              >
                <NormalCardBody>
                  <NormalCardTitle>{section.title}</NormalCardTitle>

                  <NormalCardSubtitle>{section.subtitle}</NormalCardSubtitle>

                  <NormalCardImage src={section.image} alt={section.title} />

                  {/* Logo removed */}
                </NormalCardBody>
              </motion.div>
            ))}
          </div>

          {/* Mobile accordion view */}
          <div className="lg:hidden space-y-3 mt-8">
            {sections.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: section.id * 0.1 }}
                className="bg-white/90 border border-black/[0.1] shadow-md rounded-md overflow-hidden"
              >
                {/* Header with toggle */}
                <div 
                  className="p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleCard(section.id)}
                >
                  <div>
                    <h3 className="font-league-spartan font-bold text-lg">{section.title}</h3>
                    <p className="text-xs uppercase tracking-wider font-league-spartan text-gray-600">
                      {section.subtitle}
                    </p>
                  </div>
                  <div className="text-gray-700">
                    {expandedCard === section.id ? (
                      <Minus size={20} style={{ color: 'rgb(181,50,30)' }} />
                    ) : (
                      <Plus size={20} style={{ color: 'rgb(181,50,30)' }} />
                    )}
                  </div>
                </div>

                {/* Expandable content */}
                <motion.div 
                  initial={false}
                  animate={{
                    height: expandedCard === section.id ? "auto" : 0,
                    opacity: expandedCard === section.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0">
                    <div className="relative h-48 w-full rounded-md overflow-hidden shadow-md mb-4">
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div
            className="p-8 md:p-8 lg:p-12 shadow-2xl bg-white/90 rounded-lg"
            style={{
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)",
              backdropFilter: "blur(5px)",
            }}
          >
            <h3
              className="text-lg md:text-lg lg:text-xl font-league-spartan font-bold mb-6"
              style={{ lineHeight: "140%", color: "rgb(76,74,75)" }}
            >
              Our Mission: Protect Your Vision & Investment
            </h3>
            {/* Mobile and Desktop Value Propositions */}
            <div className="grid grid-cols-3 gap-2 md:gap-6 lg:gap-8 mb-8">
              {/* Ensure Compliance */}
              <div className="bg-white/50 p-2 md:p-4 rounded-lg">
                <div className="flex flex-col items-center justify-center h-full">
                  <h4
                    className="text-xs md:text-base lg:text-base font-league-spartan font-bold text-center"
                    style={{ color: "#000000" }}
                  >
                    Ensure Compliance
                  </h4>
                  <p
                    className="hidden md:block text-sm font-league-spartan leading-relaxed md:mt-3 text-center"
                    style={{ color: "rgb(76,74,75)", fontWeight: 500 }}
                  >
                    Verify constructability and regulatory requirements
                  </p>
                </div>
              </div>
              
              {/* Superior Finishes */}
              <div className="bg-white/50 p-2 md:p-4 rounded-lg">
                <div className="flex flex-col items-center justify-center h-full">
                  <h4
                    className="text-xs md:text-base lg:text-base font-league-spartan font-bold text-center"
                    style={{ color: "#000000" }}
                  >
                    Superior Finishes
                  </h4>
                  <p
                    className="hidden md:block text-sm font-league-spartan leading-relaxed md:mt-3 text-center"
                    style={{ color: "rgb(76,74,75)", fontWeight: 500 }}
                  >
                    Deliver exceptional quality without compromise
                  </p>
                </div>
              </div>
              
              {/* Design Efficiency */}
              <div className="bg-white/50 p-2 md:p-4 rounded-lg">
                <div className="flex flex-col items-center justify-center h-full">
                  <h4
                    className="text-xs md:text-base lg:text-base font-league-spartan font-bold text-center"
                    style={{ color: "#000000" }}
                  >
                    Design Efficiency
                  </h4>
                  <p
                    className="hidden md:block text-sm font-league-spartan leading-relaxed md:mt-3 text-center"
                    style={{ color: "rgb(76,74,75)", fontWeight: 500 }}
                  >
                    Value addition in Space and Functionality
                  </p>
                </div>
              </div>
            </div>
            <div
              className="pt-4 border-t-2"
              style={{ borderColor: "rgba(181,50,30,0.3)" }}
            >
              <p
                className="text-2xl md:text-2xl lg:text-3xl font-league-spartan font-bold italic mb-2"
                style={{ color: "rgb(76,74,75)" }}
              >
                WE ADD VALUE.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Logo positioned at bottom right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 right-8 z-50"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-opacity-80 p-2">
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

export default WhatSection;
