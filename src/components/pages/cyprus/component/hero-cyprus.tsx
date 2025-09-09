"use client";

import "@/components/pages/aboutus/about.css";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/assets/icons/bg logo.png";
import Cyprus from "@/assets/images/Cyprus.jpg";


export const HeroCyprus = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingElement = {
    initial: { y: 0, opacity: 0 },
    animate: { 
      y: [-15, 15, -15], 
      opacity: [0, 0.3, 0],
      transition: { 
        duration: 6, 
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-12"
      style={{
        backgroundImage: `url(${Cyprus.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#242058]/90 to-[#3A3785]/90"></div>

      {/* Decorative floating circles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#d8a16f] rounded-full mix-blend-soft-light filter blur-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#d8a16f] rounded-full mix-blend-soft-light filter blur-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
        ></motion.div>
      </div>

      {/* Content */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h1 
          className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
         Cyprus
        </motion.h1>
        <motion.p 
          className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
        Cyprus, with its stunning Mediterranean landscapes, strategic location
          at the crossroads of Europe, Asia, and Africa, and a favorable
          business environment, offers a unique Residency by Investment program.
          This program is ideal for individuals seeking access to the European
          lifestyle, high-quality healthcare, excellent education, and safety in
          a European Union member state.


        </motion.p>
      </motion.div>

      {/* Extra floating dots */}
      <motion.div
        className="absolute top-1/4 left-1/5 w-4 h-4 bg-white rounded-full opacity-20"
        
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
      ></motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#d8a16f] rounded-full opacity-20"
        
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#d8a16f] rounded-full opacity-30"
        
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
      ></motion.div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
      >
        <Image
          src={logo}
          alt="logo"
          width={230}
          height={230}
          className="absolute bottom-0 left-0"
        />
      </motion.div>
    </section>
  );
};