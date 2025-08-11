import Image from "next/image";
import Citizenships from "@/assets/images/Citizenships.jpg";
import resident from "@/assets/images/resident.jpg";

export const Services = () => {
  return (
    <section
      className="w-full py-16 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2
          id="services-heading"
          className="text-[#7B7B7B] text-3xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Services We <span className="text-[#4E489D]">Offer</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          Your trusted gateway to international mobility and securing a brighter
          future.
        </p>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Citizenship Card */}
          <article className="group relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={Citizenships}
              alt="Citizenships by Investment program"
              className="object-cover w-full h-[300px] sm:h-[400px]"
              priority
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/70" />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-white font-bold text-2xl md:text-3xl transition-all duration-300 group-hover:-translate-y-3">
                Citizenships By Investment
              </h3>
              <div className="overflow-hidden max-h-0 group-hover:max-h-[100px] transition-all duration-500">
                <a
                  href="/citizenship-programs"
                  className="mt-4 inline-block px-6 py-3 bg-white text-primary font-semibold rounded-lg"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </article>

          {/* Residency Card */}
          <article className="group relative overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={resident}
              alt="Residency by Investment program"
              className="object-cover w-full h-[300px] sm:h-[400px]"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/70" />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h3 className="text-white font-bold text-2xl md:text-3xl transition-all duration-300 group-hover:-translate-y-3">
                Residency By Investment
              </h3>
              <div className="overflow-hidden max-h-0 group-hover:max-h-[100px] transition-all duration-500">
                <a
                  href="/residency-programs"
                  className="mt-4 inline-block px-6 py-3 bg-white text-primary font-semibold rounded-lg"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
