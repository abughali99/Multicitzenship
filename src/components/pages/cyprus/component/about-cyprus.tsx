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
import cyprus from "@/assets/images/cyprus-scaled.webp";

export const AboutCyprus = () => {
  const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "Expedited Citizenship Approval",
      description:
        "Citizenship applications are typically approved within approximately six months, providing a quick and efficient route to European citizenship.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Simultaneous Residency and Citizenship Applications",
      description:
        "Cyprus allows for both residency and citizenship applications to be submitted simultaneously, streamlining the process and saving valuable time.",
    },
    {
      id: 3,
      icon: Handshake,
      title: "Dual Nationality Permitted",
      description:
        "Cyprus imposes no obligation to relinquish current nationality, allowing investors to hold dual citizenship and enjoy the benefits of both.",
    },
    {
      id: 4,
      icon: Globe,
      title: "Tax Advantages and EU Trade Freedom",
      description:
        "Cyprus offers low tax rates and benefits from free trade within the EU, making it advantageous for business and wealth management.",
    },
    {
      id: 5,
      icon: BarChart,
      title: "Full EU Rights",
      description:
        "Cyprus citizenship grants unrestricted rights to live, work, and study anywhere within the European Union, offering flexibility and freedom for both personal and professional endeavors.",
    },
    {
      id: 6,
      icon: BarChart,
      title: "Strategic Location with Easy Access to Key Markets",
      description:
        "Positioned at the crossroads of Europe, the Middle East, and North Africa, Cyprus serves as a bridge to these regions and provides direct access to the Mediterranean, facilitating international connections and business expansion.",
    },
    {
      id: 7,
      icon: BarChart,
      title: "Safety and Quality of Life",
      description:
        "As one of the safest countries globally with a population under 5 million, Cyprus offers a secure and tranquil environment. Coupled with a high standard of living, it’s an ideal choice for families and retiree s.",
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
                Cyprus Residency by Investment Program?
              </span>{" "}
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              The Cyprus Residency by Investment program, commonly known as the
              Cyprus Permanent Residency Program (PRP), enables non-EU nationals
              to obtain residency status through investment. The program offers
              permanent residency rights in Cyprus and provides a direct route
              toward European citizenship, with visa-free travel across the
              Schengen Area and an opportunity for applicants to live, work, and
              study in Cyprus.
            </p>
          </div>
          <div className="w-1/4 m-auto">
            <Image
              src={cyprus}
              alt="cyprus"
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
            Cyprus, known for its rich cultural heritage, mild climate, and high
            standard of living, is a member of the European Union and the
            Eurozone. Offering a secure and stable environment, Cyprus combines
            a business-friendly atmosphere with an attractive lifestyle, quality
            healthcare, and a booming economy. Cyprus is also a key destination
            for retirees, professionals, and families alike, drawn by the
            island’s unique blend of ancient history and modern infrastructure.
          </p>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">
              Cyprus Residency by Investment?
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            Choosing the Cyprus Residency by Investment Program provides
            numerous advantages for investors and families, offering a
            strategic, low-tax EU location with easy access to Europe and the
            Middle East. Here are the program’s key benefits:
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
            To qualify for the Cyprus Residency by Investment Program,
            applicants must meet the following criteria:
          </p>
          <div className="">
            <ul className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl">
              <li className="mt-4 font-semibold text-lg">
                Be at least 18 years old
              </li>
              <li className="mt-4 font-semibold text-lg">
                Possess a valid passport
              </li>
              <li className="mt-4 font-semibold text-lg">
                Hold a clean criminal record
              </li>
              <li className="mt-4 font-semibold text-lg">Spouse</li>
              <li className="mt-4 font-semibold text-lg">
                Children up to 21 years old
              </li>
              <li className="mt-4 font-semibold text-lg">
                Complete the investment as per the program requirements
              </li>
              <li className="mt-4 font-semibold text-lg">
                Children up to 25 years old
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
