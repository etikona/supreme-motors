// components/WhatsAppButton.js
"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const [offset, setOffset] = useState(20);
  const phoneNumber = "8801712345678";
  const message = encodeURIComponent(
    "Hello, I'm interested in buying a car from Supreme Motors!"
  );

  const link = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // If user scrolls down more than 300px, shift button up slightly
      setOffset(scrollY > 300 ? 80 : 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 z-50 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300"
      style={{ bottom: `${offset}px` }}
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Chat with us</span>
    </a>
  );
}
