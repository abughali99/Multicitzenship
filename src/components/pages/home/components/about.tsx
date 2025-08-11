import aboutimg from "@/assets/images/1-a.jpeg.webp";
import Image from "next/image";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <section
      className="w-full py-16 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col px-4">
        {/* Heading */}
        <h2
          id="about-heading"
          className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          About Our Company
        </h2>
        <p className="text-gray-500 max-w-2xl mb-8">
          We are a trusted service provider of Citizenship & Residency by Investment.
        </p>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-black mb-6">
              Multicitizenships is a trusted gateway to actualizing dreams of
              international mobility and securing a brighter future. With a
              vibrant team of consultants and processing professionals,
              Multicitizenships is seasoned in two distinct pathways:
            </p>

            <strong className="block text-lg">Obtaining Second Citizenship By Investment</strong>
            <p className="text-gray-500 mb-5">
              This program offers different country options to choose from
              based on individual needs and suitability.
            </p>

            <strong className="block text-lg">
              Securing Residency Opportunities through Strategic Investments
            </strong>
            <p className="text-gray-500 mb-5">
              This program offers a unique opportunity to secure residency
              through strategic investments tailored to the specific needs and
              preferences of individuals.
            </p>

                       <Link href={"/"} className="ont-semibold text-white custom-button rounded-2xl w-fit">

              Read More
            </Link>
          </div>

          {/* Image */}
          <div className="flex-1">
            <Image
              src={aboutimg}
              alt="Multicitizenships office team discussing investment opportunities"
              width={500}
              height={300}
              className="w-full h-auto rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
