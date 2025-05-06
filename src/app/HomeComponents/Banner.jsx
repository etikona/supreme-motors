"use client";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Car Banner"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Find Your Dream Car
        </h1>
        <p className="text-md md:text-lg max-w-xl mb-6">
          Explore a wide selection of new and used cars tailored to your needs
          and budget.
        </p>
        <Link href="/new-cars">
          <button className="bg-amber-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-lg transition">
            Browse New Cars
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
