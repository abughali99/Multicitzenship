import hero from "@/assets/images/stock-photo-passports-of-two-caribbean-states-saint-kitts-and-nevis-and-dominica-on-a-map-of-the-caribbean-sea-1950319306-transformed-1.jpeg";
import Image from "next/image";
import icon from "@/assets/icons/divider-beige.svg";
export const Heroection = () => {
  return (
    <>
      <section
        className="relative h-[60vh]  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="overlay custom-bg top-0 absolute w-full h-full "></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full px-4 text-center">
          <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white bg-[#D8A16F] px-6 py-1.5 rounded-[12px]">
            Excellence of Experience
          </h4>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold my-2 sm:my-4 text-white">
            Get Your Second Passport With
          </h2>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#D8A16F] mb-4">
            Multicitizenships
          </h1>

          <Image
            src={icon}
            width={100}
            height={50}
            alt="icon"
            className="ms-[40%]"
          />

          <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl">
            Unlock a World of Opportunities with Our Trusted Citizenship and
            Residency Solutions. Your Journey to Global Mobility Starts Now.
          </p>

          <button className="mt-6 px-6 py-2 text-base sm:text-lg md:text-xl font-semibold text-white custom-button rounded-2xl transition-all duration-300">
            Get Your Consultation
          </button>
        </div>
      </section>
    </>
  );
};
