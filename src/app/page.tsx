import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import WhatSection from "@/components/WhatSection";
import WhySection from "@/components/WhySection";
import WhenSection from "@/components/WhenSection";
import HowSection from "@/components/HowSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <IntroSection />
      <WhatSection />
      <WhySection />
      <WhenSection />
      <HowSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
