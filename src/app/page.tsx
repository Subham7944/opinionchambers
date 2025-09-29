import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhatSection from "@/components/WhatSection";
import WhySection from "@/components/WhySection";
import WhenSection from "@/components/WhenSection";
import HowSection from "@/components/HowSection";
import LegacySection from "@/components/LegacySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhatSection />
      <WhySection />
      <WhenSection />
      <HowSection />
      <LegacySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
