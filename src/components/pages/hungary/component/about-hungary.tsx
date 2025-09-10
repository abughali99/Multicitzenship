"use client";

import {
  BarChart,
  Clock,
  Globe,
  Globe2,
  Handshake,
  MapPin,
  Plane,
  Rocket,
  Shield,
  Users,
  Users2,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import Greece from "@/assets/images/Greece.jpg";
import Image from "next/image";

export const AboutHungary = () => {
  const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "Prime Locatione",
      description:
        "Hungary's central European location offers a strategic base for exploring neighboring European countries and is easily accessible from around the world.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Universal Healthcare",
      description:
        "Enjoy access to Hungary's universal healthcare system, providing quality medical services to residents.",
    },
    {
      id: 3,
      icon: Handshake ,
      title: "Inclusive for Families And No Language Proficiency",
      description:
        "The program encompasses dependent children and dependent parents, fostering family unity. Hungary's program does not require language proficiency, making it accessible to a global audience",
    },
    {
      id: 4,
      icon: Globe,
      title: "Investment Options",
      description:
        "The program provides various investment routes, allowing flexibility to suit individual preferences.Cultural Richness",
    },
    {
      id: 5,
      icon: BarChart,
      title: "Cultural Richness",
      description:
        "Hungary offers a cultural experience like no other, from its culinary delights to its traditional festivals and events.",
    },
  ];


  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <>
  

      {/* Overview Section */}
      <motion.section
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.h2
            className="text-6xl font-bold mb-6 text-center text-[#242058]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Overview
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-6 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Greece, a captivating Mediterranean gem, boasts a rich history,
            stunning landscapes, and a vibrant culture. As a member of the
            European Union and the Schengen Area, Greece offers a high standard
            of living, excellent healthcare, and world-class education. Immerse
            yourself in the country’s ancient heritage, indulge in its
            delectable cuisine, and bask in its idyllic climate
          </motion.p>
        </div>
      </motion.section>

      {/* Why Choose Section */}
      <motion.section
        className=""
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.h2
            className="text-6xl font-bold mb-6 text-center text-[#242058]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Why Choose{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Hungary?
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-6 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
             Selecting Hungary’s Residency by Investment Program is a strategic
            decision for those seeking European residency. Hungary, celebrated
            for its rich heritage, cultural vibrancy, and stable economy, offers
            a transparent and accessible path to residency. Notably, Hungary
            ranks among the top choices in the European Union for investors and
            their families. Hungary stands among the top 30 most visited
            countries globally, boasting a wealth of history and culture. As a
            resident, you’ll enjoy access to an array of services, from
            universal healthcare to world-class education systems.

          </motion.p>

          <motion.section
            className="cards"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {featuresData.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <motion.div
                      key={feature.id}
                      className="text-center shadow-lg p-8 hover:shadow-xl transition-shadow rounded-lg border border-gray-200"
                      variants={fadeInUp}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <div>
                        <motion.div
                          className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + index * 0.1,
                          }}
                        >
                          <IconComponent className="w-8 h-8 text-[#242058]" />
                        </motion.div>
                        <div className="text-xl text-[#d8a16f] font-bold">
                          {feature.title}
                        </div>
                      </div>
                      <div>
                        <p className="text-muted-foreground mt-3">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        </div>
      </motion.section>

      {/* Qualification Section */}
      <motion.section
        className="qualification"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-12">
          <motion.h2
            className="text-6xl font-bold mb-6 text-center text-[#242058]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Qualification
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-6 text-center max-w-full mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            To be eligible for residency in Hungary, applicants must meet one of
            the investment criteria outlined below, in addition to satisfying
            the following prerequisites:
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl max-w-full mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              " Successful Due Diligence: Pass due diligence and background checks at different stages of the process",
              "Financial Eligibility: Demonstrate sufficient financial means to support themselves and family, with a clear source of wealth.",
              "Property Purchase Approval: Obtain approval from competent authorities to purchase residential property.",
              "Property Acquisition Capability: Demonstrate the financial capacity to buy residential property in Hungary and within the specified timeframe.",
              
            ].map((item, index) => (
              <motion.li
                key={index}
                className="mt-4 font-semibold text-lg pl-4"
                variants={fadeInUp}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>
    </>
  );
};
