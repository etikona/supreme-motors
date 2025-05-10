"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import asha from "../../../public/assets/asha.jpg";
import rafy from "../../../public/assets/rafy.jpg";
const founders = [
  {
    name: "Aisha Akter Asha",
    title: "Managing Director (MD)",
    image: asha, // Add real image to public/assets
    bio: "BBA in Management Studies, Gopalganj Science and Technology University",
    socials: {
      facebook: "https://www.facebook.com/aishaakter.asha15",
      linkedin: "https://bd.linkedin.com/in/aisha-akter-asha-b53a2a355",
      instagram: "https://www.instagram.com/__ashaa_._",
    },
  },
  {
    name: "Redoan Al Aziz Rafy",
    title: "Chief Executive Officer (CEO)",
    image: rafy, // Add real image to public/assets
    bio: "BBA in Management Studies, Gopalganj Science and Technology University",
    socials: {
      facebook: "https://www.facebook.com/profile.php?id=100007551554732",
      linkedin: "#",
      instagram: "https://www.instagram.com/radoan_rafy/",
    },
  },
];

const FoundersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Meet the Founders
        </h2>
        <p className="mt-2 text-gray-600">
          Passionate minds behind Supreme Motors
        </p>
      </div>

      <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {founders.map((founder, index) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Card className="rounded-2xl overflow-hidden shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {founder.name}
                </h3>
                <p className="text-blue-600 font-medium">{founder.title}</p>
                <p className="mt-2 text-sm text-gray-600">{founder.bio}</p>
                <div className="flex gap-4 mt-4">
                  <a href={founder.socials.facebook} target="">
                    <Facebook className="w-5 h-5 text-blue-500 hover:text-blue-700" />
                  </a>
                  <a href={founder.socials.linkedin} target="_blank">
                    <Linkedin className="w-5 h-5 text-blue-700 hover:text-blue-900" />
                  </a>
                  <a href={founder.socials.instagram} target="_blank">
                    <Instagram className="w-5 h-5 text-pink-500 hover:text-pink-600" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FoundersSection;
