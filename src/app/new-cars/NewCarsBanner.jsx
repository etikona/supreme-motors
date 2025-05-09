"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import CarSvg from "../../../public/assets/lcar.png";

gsap.registerPlugin(ScrollTrigger);

const NewCarsHero = () => {
  const textRef = useRef(null);
  const carRef = useRef(null);

  useEffect(() => {
    // Text animation from left
    gsap.fromTo(
      textRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 60%",
        },
      }
    );

    // Car animation from right
    gsap.fromTo(
      carRef.current,
      { x: 100, opacity: 0, rotationY: 15 },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1.6,
        ease: "power1.out",
        scrollTrigger: {
          trigger: carRef.current,
          start: "top 60%",
        },
      }
    );

    // Continuous subtle animation
    gsap.to(carRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="bg-gradient-to-br  to-gray-50 px-6   relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-amber-50/30 to-transparent" />
        <div className="absolute left-0 bottom-0 w-1/2 h-full bg-gradient-to-r from-stone-50/30 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div ref={textRef} className="md:w-1/2 space-y-6 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800">
            Elevate Your Drive with
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
              Premium Selection
            </span>
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl">
            Discover world-class automobiles curated for discerning enthusiasts.
            Experience seamless global acquisition with expert guidance.
          </p>
        </div>

        {/* Car Image */}
        <div ref={carRef} className="md:w-1/2 mt-12 md:mt-0 relative">
          <div className="relative group">
            <Image
              src={CarSvg}
              alt="Luxury Car"
              width={800}
              height={450}
              className="w-full h-auto transform transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105"
              style={{
                filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.08))",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </div>

      {/* Animated Road Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone-100/50 to-transparent">
        <div className="h-px bg-gradient-to-r from-transparent via-stone-300/50 to-transparent w-full" />
      </div>
    </section>
  );
};

export default NewCarsHero;
