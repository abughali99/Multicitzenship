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

export const AboutSaintLucia = () => {
  const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "No Residency Requirements",
      description:
        "This program has no physical residency prerequisites, providing flexibility and convenience.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Travel Flexibility",
      description:
        "Applicants are not required to travel to Saint Kitts & Nevis during the application process, ensuring convenience and accessibility.",
    },
    {
      id: 3,
      icon: Workflow,
      title: "Efficient Processing",
      description:
        "Obtain citizenship within just three-six months , making it one of the swiftest programs available.",
    },
    {
      id: 4,
      icon: Users2,
      title: "Inclusive for Families",
      description:
        "The program extends to dependent children under 25, dependent siblings under 18 and parents above the age of 65 age enabling families to benefit from this unique opportunity",
    },
    {
      id: 5,
      icon: Globe,
      title: "Global Mobility",
      description:
        "With citizenship, enjoy visa-free travel to over 146 countries, including the Schengen Zone, the U.K., and Hong Kong",
    },
    {
      id: 6,
      icon: BarChart,
      title: "Tax Benefits",
      description:
        "Saint Lucia imposes no taxes on worldwide income, creating a favorable financial environment.",
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
            Saint Lucia is an island country located in the Eastern Caribbean
            and forms part of the Lesser Antilles. Today, Saint Lucia is a full
            member of the Commonwealth of Nations (British Commonwealth), United
            Nations, and the Caribbean Community (CARICOM)
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
              SAINT LUCIA?
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-6 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Saint Lucia’s Citizenship by Investment Board has systematically
            selected the best practices, drawing on the expertise of its
            Caribbean counterparts. Their objective is to simplify the program
            for investors while providing unprecedented benefits to the country
            and its residents. Saint Lucia recognizes dual citizenship, which
            may provide opportunities for company growth and tax breaks. The
            program also provides advantages such as:
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
            Saint Lucia’s Citizenship by Investment Program was established
            after parliamentary assent to Act No. 14 of 2015 on August 24, 2015.
            Regulations of the citizenship program are cited in statutory
            instrument no. 89 of 2015 with subsequent amendments being
            introduced in statutory instrument no. 1 of 2017.
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl max-w-full mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "The Main Applicant must be 18 years old or older.",
              "Good Character: Applicants must be known for their good behavior",
              "No Criminal Record: A clean history without any criminal record is essential",
              "Good Health: Applicants should be in good physical condition",
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