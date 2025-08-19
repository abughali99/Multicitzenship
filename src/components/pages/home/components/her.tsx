"use client";
import hero from "@/assets/images/stock-photo-passports-of-two-caribbean-states-saint-kitts-and-nevis-and-dominica-on-a-map-of-the-caribbean-sea-1950319306-transformed-1.jpeg";
import Image from "next/image";
import icon from "@/assets/icons/divider-beige.svg";
import { motion } from "framer-motion";

export const Heroection = () => {
  return (
    <section
      className="relative h-[60vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      {/* Overlay */}
      <div className="overlay custom-bg top-0 absolute w-full h-full"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full px-4 text-center">
        
        {/* Subtitle */}
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl font-bold text-white bg-[#D8A16F] px-6 py-1.5 rounded-[12px]"
        >
          Excellence of Experience
        </motion.h4>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-5xl font-semibold my-2 sm:my-4 text-white"
        >
          Get Your Second Passport With
        </motion.h2>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#D8A16F] mb-4"
        >
          Multicitizenships
        </motion.h1>

        {/* Divider Icon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image src={icon} width={100} height={50} alt="icon" className="ms-[160%]" />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-sm sm:text-base md:text-lg text-white max-w-2xl"
        >
          Unlock a World of Opportunities with Our Trusted Citizenship and
          Residency Solutions. Your Journey to Global Mobility Starts Now.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-6 px-6 py-2 text-base sm:text-lg md:text-xl font-semibold text-white custom-button rounded-2xl transition-all duration-300"
        >
          Get Your Consultation
        </motion.button>
      </div>
    </section>
  );
};
