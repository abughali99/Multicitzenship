"use client";

import { motion } from "framer-motion";
import {
  Puzzle,
  Handshake,
  Users,
  TrendingUp,
  ThumbsUp,
  ShieldCheck,
} from "lucide-react";

export const ChooseUs = () => {
  const features = [
    {
      icon: Puzzle,
      title: "Tailored Solutions",
      description: "We recognize that every client has unique goals and preferences.",
    },
    {
      icon: Handshake,
      title: "Expertise and Experience",
      description:
        "With years of experience, we have a deep understanding of the complexity of programs worldwide.",
    },
    {
      icon: Users,
      title: "Transparency and Trust",
      description:
        "Our transparency keeps you informed throughout your journey, building trust in our honest, reliable guidance.",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven",
      description:
        "Our focus is on delivering results. We work tirelessly to help you achieve your international mobility goals, and we measure our success by your success.",
    },
    {
      icon: ThumbsUp,
      title: "Seamless Client Experience",
      description:
        "We aim to make your experience with us seamless and memorable. Our commitment to excellence extends beyond services.",
    },
    {
      icon: ShieldCheck,
      title: "Credibility & Competitive Advantage",
      description:
        "Our leverage of industry insights gives us a competitive edge to deliver on our commitments.",
    },
  ];

  return (
    <section className="chooseus py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="py-5"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#242058] text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Why Choose
            <span className="text-[#d8a16f]"> Us</span>
          </h2>
          <h3 className="text-5xl sm:text-7xl md:text-5xl font-bold my-4 text-[#a7a7a7]">
            Reasons to Choose Multicitizenships
          </h3>
          <p className="text-gray-400">
            We are here to open doors to global opportunities. Unlocking borders
            begins with these word—your passport to limitless possibilities. Read
            more ​
          </p>
        </motion.div>

        <div className="card">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#d8a16f]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-[#242058] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#d8a16f] transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="mt-6 h-1 bg-gradient-to-r from-[#242058] to-[#d8a16f] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
