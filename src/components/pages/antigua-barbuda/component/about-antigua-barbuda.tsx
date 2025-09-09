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

export const AboutAntiguaBarbuda = () => {
  const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "No Residency Requirements & Experience",
      description:
        "There are no physical residency prerequisites, ensuring flexibility. And no education or managerial experience is required.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Travel Convenience",
      description:
        "Applicants are not obligated to visit Antigua & Barbuda during the application process, providing convenience.",
    },
    {
      id: 3,
      icon: Rocket,
      title: "Swift Processing",
      description:
        "Obtain citizenship within just two to four months, with an accelerated option for approval in just 90 days.",
    },
    {
      id: 4,
      icon: Handshake,
      title: "Inclusive for Families",
      description:
        "The program encompasses dependent children and unmarried sibling of the main applicant or the spouse and dependent parents or grandparents over 55, fostering family unity.",
    },
    {
      id: 5,
      icon: Globe,
      title: "Global Mobility",
      description:
        "With citizenship, enjoy visa-free travel to over 143 countries, including Schengen member states, the U.K., Hong Kong, Singapore, and more",
    },
    {
      id: 6,
      icon: BarChart,
      title: "Tax Benefits",
      description:
        "Antigua & Barbuda imposes no taxes on worldwide income, ensuring financial advantages",
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
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
            Antigua and Barbuda, an independent Commonwealth nation in the
            Eastern Caribbean, beckons with 365 pristine beaches washed by
            turquoise waters. These lush tropical islands are widely celebrated
            as one of the world's most breathtaking destinations. Consequently,
            tourism stands as the primary catalyst for their Gross Domestic
            Product (GDP), contributing approximately 60% of the islands'
            revenue, with primary markets including the United States, Canada,
            and Europe. In addition to its natural allure, Antigua and Barbuda
            are esteemed members of various international organizations,
            including the United Nations, the British Commonwealth, Caricom, and
            the Organization of American States (OAS)
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
              Antigua & Barbuda?
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg leading-relaxed mb-6 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Choosing the Antigua and Barbuda Citizenship by Investment Program
            is a sensible decision for a variety of reasons. Aside from the
            spectacular natural splendor of this Caribbean nation, the program
            provides a streamlined road to citizenship, making it one of the
            quickest paths to international mobility. Antigua and Barbuda is a
            Commonwealth member, which entitles citizens to certain benefits in
            the United Kingdom and other Commonwealth member countries
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
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div>
                        <motion.div 
                          className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
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
            To be eligible for citizenship in Antigua & Barbuda, applicants must
            meet one of the investment criteria outlined below, in addition to
            satisfying the following prerequisites
          </motion.p>
          
          <motion.ul 
            className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl max-w-full mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "Good Character: Applicants must be known for their good behavior",
              "No Criminal Record: A clean history without any criminal record is essential",
              "Good Health: Applicants should be in good physical condition",
              "Demonstrate a substantial personal net worth"
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