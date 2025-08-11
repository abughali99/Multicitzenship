"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import saint from "@/assets/logo/st-lucia.png.webp";
import dominca from "@/assets/logo/dominica.png.webp";
import kitts from "@/assets/logo/saint-kitts-andnevis.png.webp";
import grenada from "@/assets/logo/Grenada.png.webp";
import barbuda from "@/assets/logo/Antigua.png.webp";
import logo from "@/assets/icons/bg logo.png";
import Image from "next/image";

export const Citizenship = () => {
  const countries = [
    {
      name: "Saint Lucia",
      logo: saint,
      link: "/citizenship/saint-lucia",
      description: "With a St. Lucia passport, enjoy visa-free access to 134+ countries",
    },
    {
      name: "Dominica",
      logo: dominca,
      link: "/citizenship/dominica",
      description: "With a Dominica passport, enjoy visa-free access to 134+ countries",
    },
    {
      name: "Saint Kitts & Nevis",
      logo: kitts,
      link: "/citizenship/saint-kitts",
      description: "With a ST. Kitts passport, enjoy visa-free access to 149+ countries",
    },
    {
      name: "Grenada",
      logo: grenada,
      link: "/citizenship/grenada",
      description: "With a Grenada passport, enjoy visa-free access to 137+ countries",
    },
    {
      name: "Antigua & Barbuda",
      logo: barbuda,
      link: "/citizenship/antigua",
      description: "With an Antigua & Barbuda passport, enjoy visa-free access to 143+ countries",
    },
  ];

  return (
    <section className="Citizenship bg-[#242058] py-10 relative">
      {/* Background Logo */}
      <Image
        src={logo}
        width={350}
        height={600}
        alt="background logo"
        className="absolute bottom-6 right-0 opacity-10 z-0"
      />

      <div className="max-w-7xl mx-auto relative z-10 px-4">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Citizenship Programs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400"
        >
          Some programs offer a pathway to a second option
        </motion.p>

        {/* Desktop Grid */}
        <div className="hidden md:flex flex-wrap gap-10 justify-center text-white py-5">
          {countries.map((country, index) => (
            <motion.a
              key={index}
              href={country.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center w-48 p-4"
            >
              <Image
                src={country.logo}
                alt={`${country.name} flag`}
                className="w-16 h-16 mb-3 object-cover"
              />
              <h3 className="text-lg font-semibold">{country.name}</h3>
              <p className="text-sm opacity-80 mt-1">{country.description}</p>
            </motion.a>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden py-5">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
            }}
          >
            {countries.map((country, index) => (
              <SwiperSlide key={index}>
                <motion.a
                  href={country.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center w-48 p-4 mx-auto"
                >
                  <Image
                    src={country.logo}
                    alt={`${country.name} flag`}
                    className="w-16 h-16 mb-3 object-cover"
                  />
                  <h3 className="text-lg font-semibold">{country.name}</h3>
                  <p className="text-sm opacity-80 mt-1">{country.description}</p>
                </motion.a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
