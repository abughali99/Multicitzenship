import "@/components/pages/aboutus/about.css";
import Image from "next/image";
import logo from "@/assets/icons/bg logo.png";
import Greece from "@/assets/images/Greece.jpg";

export const HeroGreece = () => {
  return (
    <section
      className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-12"
      style={{
        backgroundImage: `url(${Greece.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#242058]/90 to-[#3A3785]/90"></div>

      {/* Decorative floating circles */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d8a16f] rounded-full mix-blend-soft-light filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d8a16f] rounded-full mix-blend-soft-light filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center relative z-10">
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Greece
        </h1>
        <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
          Greece, by having rich history, stunning landscapes, and Mediterranean
          lifestyle, offers an attractive opportunity for individuals seeking
          European residency through its Residency by Investment program.
          Located at the crossroads of Europe, Asia, and Africa, Greece provides
          access to a high standard of living, world-class healthcare, and
          top-tier education, all within the safety of an EU member state.
        </p>
      </div>

      {/* Extra floating dots */}
      <div className="absolute top-1/4 left-1/5 w-4 h-4 bg-white rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#d8a16f] rounded-full opacity-20 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#d8a16f] rounded-full opacity-30 animate-float animation-delay-4000"></div>

      {/* Logo */}
      <Image
        src={logo}
        alt="logo"
        width={230}
        height={230}
        className="absolute bottom-0 left-0 opacity-30"
      />
    </section>
  );
};
