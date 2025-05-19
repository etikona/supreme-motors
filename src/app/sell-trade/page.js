"use client";

import { motion } from "framer-motion";

export default function SellTradePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16 flex flex-col items-center justify-center text-gray-800">
      <div className="max-w-5xl w-full text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Global Car Selling & Trading
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Unlock opportunities worldwide. Whether selling or trading, our
            platform connects you to a global network with reliable logistics
            and unmatched expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {[
            {
              title: "🌍 Global Network",
              desc: "Reach trusted buyers, dealers, and traders across continents through our international connections.",
            },
            {
              title: "📦 Seamless Logistics",
              desc: "From pickup to overseas delivery — we handle every step with certified partners and transparent tracking.",
            },
            {
              title: "🔄 Flexible Trade Options",
              desc: "Trade your vehicle for another, upgrade within our inventory, or partner with local and international agents.",
            },
            {
              title: "🧾 Legal & Customs Expertise",
              desc: "Compliant with import/export regulations, we ensure smooth documentation for cross-border transfers.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="mt-16 text-sm text-gray-500">
            Serving customers in over 20+ countries with integrity, speed, and
            precision.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
