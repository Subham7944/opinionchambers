"use client";

// Using motion.div instead of Card components
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6" style={{ color: 'rgb(76,74,75)' }}>
            Get In Touch
          </h2>
          <div className="w-16 md:w-24 h-1 mx-auto mb-6 md:mb-8" style={{ backgroundColor: 'rgb(181,50,30)' }}></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to get a second opinion on your architectural or interior design project? Contact us directly through any of the methods below.
          </p>
        </motion.div>

        <div className="mb-12">
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {/* Contact Card - Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 text-center">
                <div className="p-3 rounded-full mx-auto mb-4" style={{ backgroundColor: 'rgba(181,50,30,0.1)', width: 'fit-content' }}>
                  <MapPin className="h-8 w-8" style={{ color: 'rgb(181,50,30)' }} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Address</h4>
                <p className="text-gray-600">H-131, SECTOR 63, NOIDA</p>
              </div>
            </motion.div>

            {/* Contact Card - Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 text-center">
                <div className="p-3 rounded-full mx-auto mb-4" style={{ backgroundColor: 'rgba(181,50,30,0.1)', width: 'fit-content' }}>
                  <Phone className="h-8 w-8" style={{ color: 'rgb(181,50,30)' }} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Phone</h4>
                <p className="text-gray-600">+91 76786 37875</p>
                <a 
                  href="tel:+917678637875" 
                  className="inline-block mt-4 text-sm px-4 py-2 rounded-md transition-colors duration-300" 
                  style={{ backgroundColor: 'rgba(181,50,30,0.1)', color: 'rgb(181,50,30)' }}
                >
                  Call Now
                </a>
              </div>
            </motion.div>

            {/* Contact Card - Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 text-center">
                <div className="p-3 rounded-full mx-auto mb-4" style={{ backgroundColor: 'rgba(181,50,30,0.1)', width: 'fit-content' }}>
                  <Mail className="h-8 w-8" style={{ color: 'rgb(181,50,30)' }} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                <p className="text-gray-600">connect@opinionchambers.com</p>
                <a 
                  href="mailto:connect@opinionchambers.com" 
                  className="inline-block mt-4 text-sm px-4 py-2 rounded-md transition-colors duration-300" 
                  style={{ backgroundColor: 'rgba(181,50,30,0.1)', color: 'rgb(181,50,30)' }}
                >
                  Email Us
                </a>
              </div>
            </motion.div>

            {/* Contact Card - Website */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 text-center">
                <div className="p-3 rounded-full mx-auto mb-4" style={{ backgroundColor: 'rgba(181,50,30,0.1)', width: 'fit-content' }}>
                  <ExternalLink className="h-8 w-8" style={{ color: 'rgb(181,50,30)' }} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Website</h4>
                <p className="text-gray-600">opinionchambers.com</p>
                <a 
                  href="https://opinionchambers.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm px-4 py-2 rounded-md transition-colors duration-300" 
                  style={{ backgroundColor: 'rgba(181,50,30,0.1)', color: 'rgb(181,50,30)' }}
                >
                  Visit Site
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section - Centered */}
        <div className="flex justify-center">
          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-2xl"
          >
            <div className="p-6 bg-gradient-to-r from-[rgba(181,50,30,0.9)] to-[rgba(160,45,30,0.9)] text-white">
              <h3 className="text-xl font-bold mb-1">Visit Our Office</h3>
              <p className="opacity-80 text-sm">We&apos;re located in the heart of NOIDA</p>
            </div>
            <div className="relative h-64 md:h-80 w-full bg-gray-200">
              {/* Interactive map would go here, using a placeholder for now */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center p-4">
                  <MapPin className="h-12 w-12 mx-auto mb-4" style={{ color: 'rgb(181,50,30)' }} />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">H-131, SECTOR 63, NOIDA</h3>
                  <p className="text-gray-600">Get directions to our office</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
