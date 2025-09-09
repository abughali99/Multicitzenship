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

export const AboutGreece = () => {
  const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "Affordable Real Estate Investment",
      description:
        "The program's minimum investment requirement of €250,000 in real estate is one of the most affordable in Europe, making it accessible for a wide range of investors.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Visa-Free Travel",
      description:
        "Gain unrestricted access to the Schengen Zone, allowing you to travel freely within 27 European countries.",
    },
    {
      id: 3,
      icon: Handshake,
      title: "Country for Retirement",
      description:
        "Greece has been ranked as the world’s number one country for retirement.",
    },
    {
      id: 4,
      icon: Globe,
      title: "Inclusive for Families:",
      description:
        "Your residency permit extends to your immediate family, including your spouse, children under 21, and dependent parents, making it a great opportunity to secure your family’s future",
    },
    {
      id: 5,
      icon: BarChart,
      title: "Path to European Citizenship",
      description:
        "After 7 years of continuous residency status, you may apply for Greek citizenship, opening doors to full European Union rights and benefits.",
    },
    {
      id: 6,
      icon: BarChart,
      title: "Lifestyle Benefits",
      description:
        "Greece offers a Mediterranean lifestyle with a great balance between work and leisure, plus access to world-class healthcare, education, and a booming tourism industry.",
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
                Greece Residency by Investment?
              </span>{" "}
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              The Greece Residency by Investment program, commonly known as the
              Golden Visa program, allows non-EU nationals to obtain Greek
              residency by investing in the country. This program not only
              grants residency rights in Greece but also opens the door to
              visa-free travel across 172 countries, which includes 27 European
              countries.
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
              Greece?
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mb-6 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Choosing the Greece Residency by Investment Program offers numerous
            advantages. Beyond its rich history and stunning Mediterranean
            landscapes, the program provides a straightforward pathway to
            European residency, granting visa-free access to the Schengen Area.
            As a member of the European Union, Greece offers its residents
            access to a range of EU benefits, including the freedom to travel,
            live, and do business within other EU member states.
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
            To be eligible for residency in Greece, applicants must meet one of
            the investment criteria outlined below, along with fulfilling the
            following prerequisites:
          </motion.p>

          <motion.ul
            className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl max-w-full mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              " Be at least 18 years old.",
              " Possess a valid passport",
              "Enter Greece legally",
              "Spouse",
              "Children up to 21 years old",
              " Complete the required investment in full, such as purchasing property valued at a minimum of €250,000.",
              "Parents of the main applicant",
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
