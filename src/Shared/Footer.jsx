"use client";

import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
      >
        {/* Logo/Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-2">Supreme Motors</h3>
          <p className="text-gray-400 text-sm">
            Empowering car buyers with transparent, global access to the best
            new and used vehicles.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/inventory">Inventory</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <p className="text-gray-400 text-sm mb-4">suprememotors@email.com</p>
          <div className="flex gap-4">
            <a href="#" target="_blank" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:text-blue-500 transition" />
            </a>
            <a href="#" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 hover:text-blue-400 transition" />
            </a>
            <a href="#" target="_blank" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:text-pink-500 transition" />
            </a>
            <a href="mailto:suprememotors@email.com" aria-label="Email">
              <Mail className="w-5 h-5 hover:text-green-400 transition" />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Supreme Motors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
