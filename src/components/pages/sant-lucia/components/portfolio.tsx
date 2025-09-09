"use client";

import lucia from "@/assets/logo/saint-lucia.png";
import layer from "@/assets/logo/Layer 1.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const Portfolio = () => {
  // Animation variants
  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  };

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
      <motion.section 
        className="bg-[#242058] py-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="w-7xl mx-auto px-4 flex"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="py-5">
            <motion.h2 
              className="text-[#d8a16f] text-2xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Location
            </motion.h2>
            <motion.h6 
              className="text-white text-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
          Caribbean, island between the Caribbean Sea and the North Atlantic
              Ocean, north of Trinidad and Tobago


            </motion.h6>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-7xl mx-auto px-4 flex items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="w-1/4">
            <motion.div 
              className="py-3"
              variants={fadeInLeft}
            >
              <h2 className="text-[#d8a16f] text-2xl font-bold">Continent</h2>
              <h6 className="text-white text-xl">North America</h6>
            </motion.div>
            <motion.div 
              className="py-3"
              variants={fadeInLeft}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-[#d8a16f] text-2xl font-bold">Part</h2>
              <h6 className="text-white text-xl">Caribbean</h6>
            </motion.div>
            <motion.div 
              className="py-3"
              variants={fadeInLeft}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-[#d8a16f] text-2xl font-bold">Language</h2>
              <h6 className="text-white text-xl">English-Saint Lucian Creole</h6>
            </motion.div>
          </div>
          
          <div className="w-1/4">
            <motion.div 
              className="py-3"
              variants={fadeInLeft}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-[#d8a16f] text-2xl font-bold">Currency</h2>
              <h6 className="text-white text-xl">East Caribbean Doller</h6>
            </motion.div>
            <motion.div 
              className="py-3"
              variants={fadeInLeft}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-[#d8a16f] text-2xl font-bold">Capital</h2>
              <h6 className="text-white text-xl">Castries</h6>
            </motion.div>
            <motion.div 
              className="py-3"
              variants={fadeInLeft}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-[#d8a16f] text-2xl font-bold">Total Area</h2>
              <h6 className="text-white text-xl">616 sq. km</h6>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-1/2 flex justify-end items-center"
            variants={fadeInRight}
            transition={{ delay: 0.6 }}
          >
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Image
                src={layer}
                alt="saint lucia layer"
                width={150}
                height={150}
                className=" object-contain"
              />


              <motion.h1 
                className="text-white font-bold text-3xl mt-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                47.783
              </motion.h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
        <Image
              src={lucia}
              alt="saint lucia"
              width={250}
              height={250}
              className="object-contain"
            />



            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};