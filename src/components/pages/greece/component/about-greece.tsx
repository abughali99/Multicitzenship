import {
  BarChart,
  Clock,
  Globe,
  Globe2,
  Handshake,
  MapPin,
  Plane,
  Shield,
  Users,
  Users2,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Greece from "@/assets/images/Greece.jpg";

export const AboutGreece = () => {
  const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "Affordable Real Estate Investment",
      description:
        "The program's minimum investment requirement of €250,000 in real estate is one of the most affordable in Europe, making it accessible for a wide range of investors.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Visa-Free Travel",
      description:
        "Gain unrestricted access to the Schengen Zone, allowing you to travel freely within 27 European countries.",
    },
    {
      id: 3,
      icon: Handshake,
      title: "Country for Retirement",
      description:
        "Greece has been ranked as the world’s number one country for retirement.",
    },
    {
      id: 4,
      icon: Globe,
      title: "Inclusive for Families:",
      description:
        "Your residency permit extends to your immediate family, including your spouse, children under 21, and dependent parents, making it a great opportunity to secure your family’s future",
    },
    {
      id: 5,
      icon: BarChart,
      title: "Path to European Citizenship",
      description:
        "After 7 years of continuous residency status, you may apply for Greek citizenship, opening doors to full European Union rights and benefits.",
    },
    {
      id: 6,
      icon: BarChart,
      title: "Lifestyle Benefits",
      description:
        "Greece offers a Mediterranean lifestyle with a great balance between work and leisure, plus access to world-class healthcare, education, and a booming tourism industry.",
    },
  ];
  return (
    <>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12 flex">
          <div className="w-3/4 mx-auto flex flex-col justify-center items-center">
            <h2 className="text-6xl font-bold mb-6 text-[#242058]">
              What is{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">
                Greece Residency by Investment?
              </span>{" "}
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              The Greece Residency by Investment program, commonly known as the
              Golden Visa program, allows non-EU nationals to obtain Greek
              residency by investing in the country. This program not only
              grants residency rights in Greece but also opens the door to
              visa-free travel across 172 countries, which includes 27 European
              countries.
            </p>
          </div>
          <div className="w-1/4 m-auto">
            <Image
              src={Greece}
              alt="UAE flag"
              width={300}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Overview
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            Greece, a captivating Mediterranean gem, boasts a rich history,
            stunning landscapes, and a vibrant culture. As a member of the
            European Union and the Schengen Area, Greece offers a high standard
            of living, excellent healthcare, and world-class education. Immerse
            yourself in the country’s ancient heritage, indulge in its
            delectable cuisine, and bask in its idyllic climate
          </p>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">
              Greece?
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            Choosing the Greece Residency by Investment Program offers numerous
            advantages. Beyond its rich history and stunning Mediterranean
            landscapes, the program provides a straightforward pathway to
            European residency, granting visa-free access to the Schengen Area.
            As a member of the European Union, Greece offers its residents
            access to a range of EU benefits, including the freedom to travel,
            live, and do business within other EU member states.
          </p>
          <section className="cards">
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                  {featuresData.map((feature) => {
                    const IconComponent = feature.icon;
                    return (
                      <div
                        key={feature.id}
                        className="text-center shadow-lg p-8 hover:shadow-lg transition-shadow rounded-lg border border-gray-200"
                      >
                        <div>
                          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="w-8 h-8 text-[#242058]" />
                          </div>
                          <div className="text-xl text-[#d8a16f] font-bold">
                            {feature.title}
                          </div>
                        </div>
                        <div>
                          <p className="text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
      <section className="qualification">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Qualification
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            To be eligible for residency in Greece, applicants must meet one of
            the investment criteria outlined below, along with fulfilling the
            following prerequisites:
          </p>
          <div className="">
            <ul className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl">
              <li className="mt-4 font-semibold text-lg">
                Be at least 18 years old.
              </li>
              <li className="mt-4 font-semibold text-lg">
                Possess a valid passport
              </li>
              <li className="mt-4 font-semibold text-lg">
                Enter Greece legally
              </li>
              <li className="mt-4 font-semibold text-lg">Spouse</li>
              <li className="mt-4 font-semibold text-lg">
                Children up to 21 years old
              </li>
                <li className="mt-4 font-semibold text-lg">
                  Complete the required investment in full, such as purchasing
                  property valued at a minimum of €250,000.
                </li>
                <li className="mt-4 font-semibold text-lg">
                  Parents of the main applicant
                </li>
                <li className="mt-4 font-semibold text-lg">
                  Parents of the spouse
                </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
