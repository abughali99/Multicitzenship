"use client";

import "@/components/pages/aboutus/about.css";
import logo from "@/assets/icons/bg logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants with smoother transitions
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94] 
    }
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.03, 1],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Floating element animation
const floatingElement = {
  initial: { y: 0, opacity: 0 },
  animate: { 
    y: [-12, 12, -12], 
    opacity: [0, 0.3, 0],
    transition: { 
      duration: 6, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const HeroAboutus = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative bg-gradient-to-br from-[#242058] to-[#3A3785] min-h-[50vh] flex items-center justify-center overflow-hidden py-12"
      >
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-[#d8a16f] rounded-full mix-blend-soft-light filter blur-xl"
          ></motion.div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
            className="absolute bottom-10 right-10 w-96 h-96 bg-[#d8a16f] rounded-full mix-blend-soft-light filter blur-xl"
          ></motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center relative z-10"
        >
          <motion.div className="mb-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="text-white text-sm font-semibold tracking-wider">
                WELCOME TO OUR STORY
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            About{" "}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f] bg-[length:200%_auto]"
            >
              Us
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            We are a passionate team dedicated to creating exceptional digital
            experiences that make a difference in people's lives.
          </motion.p>
        </motion.div>

        {/* Floating elements with smoother animation */}
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ delay: 0.8 }}
          className="absolute top-1/4 left-1/5 w-4 h-4 bg-white rounded-full"
        ></motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ delay: 1.2 }}
          className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#d8a16f] rounded-full"
        ></motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ delay: 1.6 }}
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#d8a16f] rounded-full"
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        >
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="absolute bottom-0 left-0 w-[230px]"
          />
        </motion.div>
      </motion.section>
    </>
  );
};