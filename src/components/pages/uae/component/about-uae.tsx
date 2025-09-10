"use client";

import {
  BarChart,
  Clock,
  Globe,
  Globe2,
  Handshake,
  Home,
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

export const AboutUAE = () => {
const featuresData = [
    {
      id: 1,
      icon: Home,
      title: "Long-Term Residency",
      description:
        "Secure a 10-year visa with options to renew, ensuring peace of mind for you and your family.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Swift Processing",
      description:
        "Receive preliminary approval within 30 days",
    },
    {
      id: 3,
      icon: Handshake ,
      title: "No Minimum Stay Requirement",
      description:
        "Enjoy flexibility without a required minimum stay in the UAE",
    },
    {
      id: 4,
      icon: Globe,
      title: "Family Sponsorship",
      description:
        "Extend 10-year visa sponsorship to spouse, children, and parents",
    },
    {
      id: 5,
      icon: BarChart,
      title: "Minimal Documentation",
      description:
        "Benefit from a streamlined process with minimal paperwork",
    },
     {
      id: 6,
      icon: BarChart,
      title: "Remote Approval",
      description:
        "Obtain preliminary approval without needing to travel to the UAE",
    },
     {
      id: 7,
      icon: BarChart,
      title: "UAE Bank Account Access",
      description:
        "Open a personal bank account within the UAE",
    },
     {
      id: 8,
      icon: BarChart,
      title: "Tax-Free Personal Income",
      description:
        "Enjoy zero tax on personal income.",
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
                UAE/Dubai Golden Visa
              </span>{" "}
              -Residency by Investment?
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Choosing the UAE/Dubai Golden Visa program offers numerous
              advantages. The United Arab Emirates is a cultural melting pot,
              bringing together people from around the world, each with their
              unique stories and diverse skill sets. This diversity enriches the
              community and fosters a dynamic environment for innovation and
              collaboration. Situated at the crossroads of the Middle East,
              Asia, Europe, and Africa, the UAE boasts excellent air and sea
              connections, enhancing its strategic importance for global
              business. The Golden Visa allows expats to live, work, and study
              in the UAE without needing a national sponsor, granting 100%
              ownership of their businesses.

            </p>
          </motion.div>
          <div className="w-1/4 m-auto">
            <Image
              src={Greece}
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
          The United Arab Emirates (UAE) is a dynamic and thriving nation
            known for its modern architecture, diverse culture, and robust
            economy. As a leading global business hub, the UAE offers a high
            standard of living, exceptional healthcare, and top-tier education.
            Experience the vibrant lifestyle in cities like Dubai and Abu Dhabi,
            where luxury meets tradition, and explore a unique blend of cultural
            experiences and breathtaking landscapes.
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
              UAE/Dubai Golden Visa?
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-6 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Choosing the UAE/Dubai Golden Visa program offers numerous
            advantages. The United Arab Emirates is a cultural melting pot,
            bringing together people from around the world, each with their
            unique stories and diverse skill sets. This diversity enriches the
            community and fosters a dynamic environment for innovation and
            collaboration. Situated at the crossroads of the Middle East, Asia,
            Europe, and Africa, the UAE boasts excellent air and sea
            connections, enhancing its strategic importance for global business.
            The Golden Visa allows expats to live, work, and study in the UAE
            without needing a national sponsor, granting 100% ownership of their
            businesses.
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
            The Dubai Golden Visa Program is open to several categories of
            applicants, including
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl max-w-full mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "Be at least 18 years old",
              " Valid travel documents such as a passport",
              " Must pass a medical fitness test and obtain a security clearance",
              " Proof of investment and financial stability",
              "Spouse",
              "Children up to 25 years old",
              " Parents",
              "Parents of the spouse",
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
