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

export const AboutDominica = () => {
 const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "No Residency Requirements & Experience",
      description:
        "There are no physical residency prerequisites, ensuring flexibility. No education or managerial experience required.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Travel Convenience",
      description:
        "Applicants are not obligated to visit Dominica during the application process, providing convenience.",
    },
    {
      id: 3,
      icon: Handshake ,
      title: "Inclusive for Families",
      description:
        "The program encompasses dependent children and siblings under 30, unmarried daughters under 30 and dependent parents or grandparents over 55, fostering family unity.",
    },
    {
      id: 4,
      icon: Globe,
      title: "Global Mobility",
      description:
        "With citizenship, enjoy visa-free travel to over 134 countries, including Europe’s Schengen zone, the U.K., Hong Kong, Malaysia, Singapore and Turkey.",
    },
    {
      id: 5,
      icon: BarChart,
      title: "Tax Benefits",
      description:
        "Minimal taxation, with no wealth, gift, inheritance, foreign income, or capital gains tax",
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
       One of the most beautiful islands in the Caribbean, the Commonwealth
            of Dominica established its citizenship by investment program in
            1993 to boost its investment. Roseau is the capital which located on
            the southwest coast and known for its 18th-century Creole
            architecture. Dominica’s currency is Dominican Peso (DOP), which is
            pegged to the USD at a rate of 0.018 (USD). English is the official
            language of Dominica; however, French dialects is widely spoken in
            Dominica. With Dominica passport you can have the access to 134
            visa-free destination worldwide. Adding to that, one of the most
            important benefits of the Dominican passport is a visa-free to
            China.

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
             DOMINICA?
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-lg leading-relaxed mb-6 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            The Dominican government extends a range of financial incentives to
            entrepreneurs seeking citizenship through investment in the country.
            These incentives encompass substantial tax breaks, exemptions from
            import duties and taxes, and simplified procedures. The Dominica
            Citizenship by Investment Program, provides potential applicants
            with a range of special benefits:

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
              To be eligible for citizenship in Dominica, applicants must meet one of the investment criteria outlined below, in addition to satisfying the following prerequisites:
          </motion.p>
          
          <motion.ul 
            className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl max-w-full mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "Applicant must be at least 18 years old",
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