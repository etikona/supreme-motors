"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import hero from "../../../public/assets/hero.jpg";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CompanyDetails = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const textInView = useInView(textRef, { once: true, margin: "-100px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <section className="w-full my-20 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Animated Text Content */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            About Supreme Motors
          </h2>
          <Separator className="mb-6 w-24 bg-blue-600 h-1" />

          <p className="text-gray-700 text-lg leading-relaxed">
            Based in <strong>Chattogram, Bangladesh</strong>, Supreme Motors
            specializes in importing and exporting high-quality{" "}
            <strong>new and used cars</strong> from global markets. We are
            committed to delivering premium vehicles that match every customer’s
            needs and budget.
          </p>

          <p className="text-gray-600 mt-4">
            Our online platform enables everyday buyers to explore, compare, and
            purchase cars seamlessly. Whether you’re local or international, our
            mission is to make car buying transparent, affordable, and
            accessible to everyone.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="secondary">Import & Export</Badge>
            <Badge variant="secondary">New & Used Cars</Badge>
            <Badge variant="secondary">Bangladesh Based</Badge>
            <Badge variant="secondary">Customer-Centric</Badge>
          </div>
        </motion.div>

        {/* Animated Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src={hero}
            alt="Supreme Motors Car Export"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyDetails;
