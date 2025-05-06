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
  const textInView = useInView(textRef, { once: true, margin: "-50px" });
  const imageInView = useInView(imageRef, { once: true, margin: "-50px" });

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full my-20 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          variants={textVariants}
          className="space-y-6"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              About Supreme Motors
            </h2>
            <Separator className="mt-4 w-24 bg-orange-600 h-1" />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 text-lg leading-relaxed"
            whileHover={{ x: 5 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            Based in <strong>Chattogram, Bangladesh</strong>, Supreme Motors
            specializes in importing and exporting high-quality{" "}
            <strong>new and used cars</strong> from global markets.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-600"
            whileHover={{ x: 5 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            Our online platform enables everyday buyers to explore, compare, and
            purchase cars seamlessly.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {[
              "Import & Export",
              "New & Used Cars",
              "Bangladesh Based",
              "Customer-Centric",
            ].map((badge) => (
              <motion.div
                key={badge}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "tween", duration: 0.1 }}
              >
                <Badge variant="secondary">{badge}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={
            imageInView
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl overflow-hidden shadow-lg"
          whileHover={{
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Image
            src={hero}
            alt="Supreme Motors Car Export"
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyDetails;
