"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to get a second opinion on your architectural or interior design project? Reach out to us, and we&apos;ll help you ensure your project&apos;s success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
                  <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
                  <p className="opacity-90">
                    Fill out the form, and we&apos;ll get back to you within 24 hours to discuss your project needs.
                  </p>
                </div>
                <form className="p-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input 
                        type="text" 
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Project Details
                    </label>
                    <textarea 
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                      placeholder="Tell us about your project and how we can help"
                    ></textarea>
                  </div>
                  
                  <div className="mt-8">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Submit Request
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">H-131, SECTOR 63, NOIDA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600">+91 76786 37875</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600">connect@opinionchambers.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <ExternalLink className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Website</h4>
                    <p className="text-gray-600">opinionchambers.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-blue-50 p-8 rounded-2xl text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Need an immediate response?</h4>
              <p className="text-gray-600 mb-6">
                Call us directly for urgent project consultations and we&apos;ll arrange a meeting at your earliest convenience.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-50 h-80 rounded-2xl flex items-center justify-center"
        >
          <div className="text-center">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Find Us on the Map</h3>
            <p className="text-gray-600">H-131, SECTOR 63, NOIDA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
