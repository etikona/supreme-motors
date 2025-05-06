"use client";

import { motion } from "framer-motion";
import { Flag, Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  {
    title: "Our Mission",
    description:
      "Redefine car ownership through seamless, trustworthy trading experiences across local and global markets.",
    icon: <Target className="w-8 h-8" />,
    color: "bg-blue-100/50",
  },
  {
    title: "Our Vision",
    description:
      "Become Bangladesh's premier car trade hub through innovation, transparency, and lasting trust.",
    icon: <Eye className="w-8 h-8" />,
    color: "bg-green-100/50",
  },
  {
    title: "Our Objective",
    description:
      "Connect buyers with premium global vehicles and simplify every step from search to delivery.",
    icon: <Flag className="w-8 h-8" />,
    color: "bg-purple-100/50",
  },
];

const cardVariants = {
  offscreen: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const MissionVisionSection = () => {
  return (
    <section className="w-full my-20 py-20 px-6 md:px-12 ">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900"
        >
          Our Core Principles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
        >
          The driving force behind Supreme Motors' excellence
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={item.title}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="h-full" // Added for equal height
          >
            <Card
              className={`group relative h-full flex flex-col rounded-2xl overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${item.color}`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50" />

              <CardContent className="p-8 flex flex-col items-center text-center flex-1">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-6 p-4 rounded-full bg-white shadow-sm border"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed flex-1">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionSection;
