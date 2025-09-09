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
import cyprus from "@/assets/images/cyprus-scaled.webp";
import Image from "next/image";

export const AboutCyprus = () => {
const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "Expedited Citizenship Approval",
      description:
        "Citizenship applications are typically approved within approximately six months, providing a quick and efficient route to European citizenship.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Simultaneous Residency and Citizenship Applications",
      description:
        "Cyprus allows for both residency and citizenship applications to be submitted simultaneously, streamlining the process and saving valuable time.",
    },
    {
      id: 3,
      icon: Handshake,
      title: "Dual Nationality Permitted",
      description:
        "Cyprus imposes no obligation to relinquish current nationality, allowing investors to hold dual citizenship and enjoy the benefits of both.",
    },
    {
      id: 4,
      icon: Globe,
      title: "Tax Advantages and EU Trade Freedom",
      description:
        "Cyprus offers low tax rates and benefits from free trade within the EU, making it advantageous for business and wealth management.",
    },
    {
      id: 5,
      icon: BarChart,
      title: "Full EU Rights",
      description:
        "Cyprus citizenship grants unrestricted rights to live, work, and study anywhere within the European Union, offering flexibility and freedom for both personal and professional endeavors.",
    },
    {
      id: 6,
      icon: BarChart,
      title: "Strategic Location with Easy Access to Key Markets",
      description:
        "Positioned at the crossroads of Europe, the Middle East, and North Africa, Cyprus serves as a bridge to these regions and provides direct access to the Mediterranean, facilitating international connections and business expansion.",
    },
    {
      id: 7,
      icon: BarChart,
      title: "Safety and Quality of Life",
      description:
        "As one of the safest countries globally with a population under 5 million, Cyprus offers a secure and tranquil environment. Coupled with a high standard of living, it’s an ideal choice for families and retiree s.",
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
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12 flex">
          <motion.div className="w-3/4 mx-auto flex flex-col justify-center items-center"
           initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
            <h2 className="text-6xl font-bold mb-6 text-[#242058]">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">
               Cyprus Residency by Investment Program?
              </span>{" "}
            </h2>
            <p className="text-lg leading-relaxed mb-6">
               The Cyprus Residency by Investment program, commonly known as the
              Cyprus Permanent Residency Program (PRP), enables non-EU nationals
              to obtain residency status through investment. The program offers
              permanent residency rights in Cyprus and provides a direct route
              toward European citizenship, with visa-free travel across the
              Schengen Area and an opportunity for applicants to live, work, and
              study in Cyprus.

            </p>
          </motion.div>
          <div className="w-1/4 m-auto">
            <Image
              src={cyprus}
              alt="Greece flag"
              width={300}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </section>

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
            Cyprus, known for its rich cultural heritage, mild climate, and high
            standard of living, is a member of the European Union and the
            Eurozone. Offering a secure and stable environment, Cyprus combines
            a business-friendly atmosphere with an attractive lifestyle, quality
            healthcare, and a booming economy. Cyprus is also a key destination
            for retirees, professionals, and families alike, drawn by the
            island’s unique blend of ancient history and modern infrastructure.

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
              Cyprus Residency by Investment?
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-6 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
          Choosing the Cyprus Residency by Investment Program provides
            numerous advantages for investors and families, offering a
            strategic, low-tax EU location with easy access to Europe and the
            Middle East. Here are the program’s key benefits:

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
           To qualify for the Cyprus Residency by Investment Program,
            applicants must meet the following criteria:
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl max-w-full mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              " Be at least 18 years old",
              " Possess a valid passport",
              "Hold a clean criminal record",
              "Spouse",
              "Children up to 21 years old",
              "  Complete the investment as per the program requirements",
              "Children up to 25 years old",
              "Parents of the main applicant",
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
