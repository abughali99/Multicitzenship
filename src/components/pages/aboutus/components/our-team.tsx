"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import mai from "@/assets/team/mai 2.png";
import nis from "@/assets/team/Nisreen Jabbri.png";
import abd from "@/assets/team/Abdullah.png";
import farah from "@/assets/team/Farah Al Qaisi.png";
import moh from "@/assets/team/Mohammed Al-Jammal.png";
import majd from "@/assets/team/Majd Tran.png";
import logo from "@/assets/icons/bg logo.png";

interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
}

export const OurTeam = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Mai Enizat",
      role: "Chief Executive Director",
      image: mai,
    },
    {
      name: "Nisreen Jabbri",
      role: "Senior Processing Consultant",
      image: nis,
    },
    {
      name: "Abdallah Enizat",
      role: "Processing Consultant",
      image: abd,
    },
    {
      name: "Farah Al Qaisi",
      role: "Processing Consultant",
      image: farah,
    },
    {
      name: "Mohammed Al-Jammal",
      role: "Processing Consultant",
      image: moh,
    },
    {
      name: "Majd Abu-Tarbosh",
      role: "Legal Translator",
      image: majd,
    },
  ];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <motion.section 
      className="max-w-7xl mx-auto my-5 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="">
        <div className="my-5">
          <motion.div 
            className="flex flex-col justify-center items-center text-center py-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-6xl lg:text-7xl font-bold text-[#242058] text-center">
              Our Amazing Team
            </h1>
            <motion.p 
              className="py-5 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              At MultiCitizenships, we take immense pride in our dynamic and knowledgeable team, a harmonious blend of experience and innovation. Allow us to introduce the some of our dedicated group, each playing a vital role in our journey to assist you in achieving your dreams of international mobility.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col items-center text-center my-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="relative flex flex-col justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  width={400}
                  height={600}
                  className="object-cover w-full p-3 rounded-2xl"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-[#d8a16f] font-semibold text-sm tracking-wider">
                {teamMembers[0].role}
              </p>
              <h3 className="text-4xl font-bold text-[#242058]">
                {teamMembers[0].name}
              </h3>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-5"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {teamMembers.slice(1).map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  className="object-cover rounded-2xl"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <p className="text-[#d8a16f] font-semibold text-sm tracking-wider">
                  {member.role}
                </p>
                <h3 className="text-2xl font-bold text-[#242058]">
                  {member.name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.5, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image 
          src={logo} 
          alt="logo" 
          width={100} 
          height={100} 
          className='absolute top-0 right-0 opacity-[0.5] w-[200px]'
        />
      </motion.div>
    </motion.section>
  );
};