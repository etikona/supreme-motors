"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="text-center max-w-lg space-y-6">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block"
        >
          <Car className="w-14 h-14 text-rose-500" />
        </motion.div>

        <h1 className="text-5xl font-bold text-gray-900">Oops! 404</h1>
        <p className="text-gray-600 text-lg">
          The page you are looking for does not exist or has been moved.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            className="bg-orange-600 hover:bg-orange-700 text-white text-base px-6 py-3 rounded-md transition"
          >
            <Link href="/">Go Back Home</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
