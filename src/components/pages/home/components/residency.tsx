import UAE from "@/assets/logo/UAE-png.webp";
import Greece from "@/assets/logo/Greece-png.webp";
import Cyprus from "@/assets/logo/Cyprus-png.webp";
import Hungary from "@/assets/logo/Hungary.png.webp";
import logo from "@/assets/icons/bg logo.png"

import Image from "next/image";

export const Residency = () => {
  const countries = [
    {
      name: "UAE",
      logo: UAE,
      link: "/citizenship/UAE",
      description: "Secure 10-year UAE residency with easy renewal, family inclusion, global mobility, and exceptional business opportunities.",
    },
    {
      name: "Cyprus",
      logo: Greece,
      link: "/citizenship/Greece",
      description: "Gain Greek residency with investment, granting visa-free EU travel, real estate benefits, and cultural immersion.",
    },
    {
      name: "Cyprus",
      logo: Cyprus,
      link: "/citizenship/Cyprus",
      description: "Invest in Cyprus for EU residency, enjoying a stable economy, booming business prospects, and Mediterranean living.",
    },
    {
      name: "Hungary",
      logo: Hungary,
      link: "/citizenship/Hungary",
      description: "Obtain Hungarian residency via investment, accessing EU travel, family benefits, and a vibrant economy.",
    },
   
  ];

  return (
    <section className="Citizenship bg-[#d8a16f] py-10 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
          Residency  Programs
        </h2>
        <p  className="text-black">Some Programs Provide A Gateway to Global Residency Opportunities​</p>
        <div className="flex flex-wrap gap-24 justify-center text-white py-5">
          {countries.map((country, index) => (
            <a
              key={index}
              href={country.link}
              className="flex flex-col items-center text-center w-60 p-4"
            >
              <Image
                src={country.logo}
                alt={`${country.name} flag`}
                className="w-16 h-16 mb-3 object-cover"
              />
              <h3 className="text-lg font-semibold">{country.name}</h3>
              <p className="text-sm opacity-80 mt-1">{country.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
