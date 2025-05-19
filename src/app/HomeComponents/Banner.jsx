"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Drive Your Dream",
    subtitle:
      "Discover premium new & pre-owned vehicles with transparent pricing and expert guidance.",
    buttons: [
      {
        text: "Explore New Cars",
        href: "/new-cars",
        style: "bg-amber-500 hover:bg-amber-600",
      },
      {
        text: "Browse Used Cars",
        href: "/used-cars",
        style:
          "border-2 border-white/20 hover:border-amber-400 hover:bg-black/20",
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Luxury Collection",
    subtitle:
      "Experience premium comfort and cutting-edge technology in our luxury lineup.",
    buttons: [
      {
        text: "Explore New Cars",
        href: "/new-cars",
        style: "bg-amber-500 hover:bg-amber-600",
      },
      {
        text: "Browse Used Cars",
        href: "/used-cars",
        style:
          "border-2 border-white/20 hover:border-amber-400 hover:bg-black/20",
      },
    ],
  },

  {
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Family Friendly",
    subtitle:
      "Find the perfect vehicle for your family's needs and adventures.",
    buttons: [
      {
        text: "Explore New Cars",
        href: "/new-cars",
        style: "bg-amber-500 hover:bg-amber-600",
      },
      {
        text: "Browse Used Cars",
        href: "/used-cars",
        style:
          "border-2 border-white/20 hover:border-amber-400 hover:bg-black/20",
      },
    ],
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt="Car Banner"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent flex flex-col justify-center items-center text-center px-4">
        <div className="space-y-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl"
          >
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              {slides[currentSlide].title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            {slides[currentSlide].buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`${button.style} text-white inline-block font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl`}
              >
                {button.text}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
