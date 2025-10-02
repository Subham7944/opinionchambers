"use client";

import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo and About */}
          <div className="col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-rust">
              Opinion Chambers
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Expert second opinion consultants for architectural and interior design projects. We bring clarity, precision, and value to every stage of your project.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rust transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rust transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rust transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rust transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#what" className="text-gray-400 hover:text-rust transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#why" className="text-gray-400 hover:text-rust transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#when" className="text-gray-400 hover:text-rust transition-colors">
                  When to Consult
                </a>
              </li>
              <li>
                <a href="#how" className="text-gray-400 hover:text-rust transition-colors">
                  Our Methods
                </a>
              </li>
              <li>
                <a href="#legacy" className="text-gray-400 hover:text-rust transition-colors">
                  Our Legacy
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-rust transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>H-131, SECTOR 63, NOIDA</p>
              <p>+91 76786 37875</p>
              <p>connect@opinionchambers.com</p>
              <p>www.opinionchambers.com</p>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Opinion Chambers. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 text-sm hover:text-rust transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 text-sm hover:text-rust transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-rust hover:bg-rust/90 text-white p-3 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
