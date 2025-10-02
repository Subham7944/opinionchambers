"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-league-spartan font-bold text-3xl md:text-4xl lg:text-5xl text-grey mb-6">
            Contact Us
          </h2>
          <p className="font-league-spartan text-lg text-grey max-w-3xl mx-auto">
            Ready to get a second opinion on your architectural or interior design project? Reach out to us, and we&apos;ll help you ensure your project&apos;s success.
          </p>
        </motion.div>

        {/* Contact Info */}
        <div className="max-w-xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-rust/10 p-3">
                    <MapPin className="h-6 w-6 text-rust" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-league-spartan font-bold text-lg text-grey mb-2">Address</h4>
                    <p className="font-league-spartan text-grey">H-131, SECTOR 63, NOIDA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-rust/10 p-3">
                    <Phone className="h-6 w-6 text-rust" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-league-spartan font-bold text-lg text-grey mb-2">Phone</h4>
                    <p className="font-league-spartan text-grey">+91 76786 37875</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-md">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-rust/10 p-3">
                    <Mail className="h-6 w-6 text-rust" />
                  </div>
                  <div className="ml-6">
                    <h4 className="font-league-spartan font-bold text-lg text-grey mb-2">Email</h4>
                    <p className="font-league-spartan text-grey">connect@opinionchambers.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        {/* Logo */}
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
    </section>
  );
};

export default ContactSection;
