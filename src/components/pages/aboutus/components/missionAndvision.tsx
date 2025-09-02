"use client";

import { Award, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

export const MissionAndVision = () => {
  return (
    <>
      {/* Mission & Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-5xl lg:text-5xl font-bold mb-4 text-[#242058]">
              <span className="text-[#d8a16f]">Our</span> Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe in opening doors to global opportunities while maintaining the highest standards of service and
              integrity.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="p-8 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Shield className="w-8 h-8 text-[#d8a16f]" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-[#242058]">Obtaining Second Citizenship by Investment</h3>
                <p className="text-muted-foreground">
                  We provide comprehensive guidance through strategic investment programs that lead to
                  second citizenship.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="p-8 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Users className="w-8 h-8 text-[#d8a16f]" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-[#242058]">
                  Securing Residency Opportunities through Strategic Investments
                </h3>
                <p className="text-muted-foreground">
                  Our expertise spans multiple jurisdictions, offering diverse residency options through proven
                  investment channels.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="p-8 text-center">
                <motion.div 
                  className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Award className="w-8 h-8 text-[#d8a16f]" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4 text-[#242058]">Navigating the Path to Second Option</h3>
                <p className="text-muted-foreground">
                  We are driven by the passion for helping individuals and families to achieve their dreams of
                  international mobility.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};