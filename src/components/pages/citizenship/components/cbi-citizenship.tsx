"use client";

import { Globe, Shield, TrendingUp, Calculator, Home } from "lucide-react";
import { motion } from "framer-motion";


const benefits = [
  {
    id: 1,
    icon: Globe,
    title: "Global Access",
    description:
      "Getting a second citizenship gives you access to several nations around the world. Travel is made easier, and there are more prospects for both personal and professional growth.",
  },
  {
    id: 2,
    icon: Shield,
    title: "Security and Stability",
    description:
      "The political stability and robust economies of many nations that provide citizenship by investment programs are well-known. Citizenship in such a country can guarantee the future security of families and their possessions.",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Economic Diversification",
    description:
      "Individuals can diversify their financial holdings, reduce risks, and explore new business ideas or investments in rising markets by investing in a new country.",
  },
  {
    id: 4,
    icon: Calculator,
    title: "Tax Advantages",
    description:
      "Some countries that offer citizenship by investment schemes have enticing tax laws that might result in considerable financial savings.",
  },
  {
    id: 5,
    icon: Home,
    title: "Residential Options",
    description:
      "Getting a second citizenship gives you the freedom to live wherever you want. Your new citizenship offers the flexibility to live life on your terms.",
  },
];

export const CBICitizenship = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Flip Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#242058]">
              Benefits of Citizenship by Investment
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Citizenship by investment programs provide a variety of advantages
              that can improve your life and open up new opportunities. Here are
              some of the main advantages:
            </p>
          </motion.div>
          {benefits.map((benefit ,index) => (
            <motion.div
              key={benefit.id}
              className="group perspective"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front side */}
                <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center backface-hidden">
                  <benefit.icon className="w-12 h-12  mb-4 text-[#242058]" />
                  <h3 className="text-xl font-semibold text-[#242058]">
                    {benefit.title}
                  </h3>
                </div>

                {/* Back side */}
                <div className="absolute inset-0 bg-[#d8a16f] text-white rounded-lg shadow-lg p-6 flex items-center justify-center text-center rotate-y-180 backface-hidden">
                  <p>{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
