import {
  BarChart,
  Clock,
  Globe,
  Globe2,
  Handshake,
  Home,
  MapPin,
  Plane,
  Shield,
  Users,
  Users2,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import Dubai from "@/assets/images/dubai.jpg"

export const AboutUAE = () => {
  const featuresData = [
    {
      id: 1,
      icon: Home,
      title: "Long-Term Residency",
      description:
        "Secure a 10-year visa with options to renew, ensuring peace of mind for you and your family.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Swift Processing",
      description:
        "Receive preliminary approval within 30 days",
    },
    {
      id: 3,
      icon: Handshake ,
      title: "No Minimum Stay Requirement",
      description:
        "Enjoy flexibility without a required minimum stay in the UAE",
    },
    {
      id: 4,
      icon: Globe,
      title: "Family Sponsorship",
      description:
        "Extend 10-year visa sponsorship to spouse, children, and parents",
    },
    {
      id: 5,
      icon: BarChart,
      title: "Minimal Documentation",
      description:
        "Benefit from a streamlined process with minimal paperwork",
    },
     {
      id: 6,
      icon: BarChart,
      title: "Remote Approval",
      description:
        "Obtain preliminary approval without needing to travel to the UAE",
    },
     {
      id: 7,
      icon: BarChart,
      title: "UAE Bank Account Access",
      description:
        "Open a personal bank account within the UAE",
    },
     {
      id: 8,
      icon: BarChart,
      title: "Tax-Free Personal Income",
      description:
        "Enjoy zero tax on personal income.",
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
                UAE/Dubai Golden Visa
              </span>{" "}
              -Residency by Investment?
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Choosing the UAE/Dubai Golden Visa program offers numerous
              advantages. The United Arab Emirates is a cultural melting pot,
              bringing together people from around the world, each with their
              unique stories and diverse skill sets. This diversity enriches the
              community and fosters a dynamic environment for innovation and
              collaboration. Situated at the crossroads of the Middle East,
              Asia, Europe, and Africa, the UAE boasts excellent air and sea
              connections, enhancing its strategic importance for global
              business. The Golden Visa allows expats to live, work, and study
              in the UAE without needing a national sponsor, granting 100%
              ownership of their businesses.
            </p>
          </div>
          <div className="w-1/4 m-auto">
            <Image
              src={Dubai}
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
            The United Arab Emirates (UAE) is a dynamic and thriving nation
            known for its modern architecture, diverse culture, and robust
            economy. As a leading global business hub, the UAE offers a high
            standard of living, exceptional healthcare, and top-tier education.
            Experience the vibrant lifestyle in cities like Dubai and Abu Dhabi,
            where luxury meets tradition, and explore a unique blend of cultural
            experiences and breathtaking landscapes.
          </p>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">
              UAE/Dubai Golden Visa?
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            Choosing the UAE/Dubai Golden Visa program offers numerous
            advantages. The United Arab Emirates is a cultural melting pot,
            bringing together people from around the world, each with their
            unique stories and diverse skill sets. This diversity enriches the
            community and fosters a dynamic environment for innovation and
            collaboration. Situated at the crossroads of the Middle East, Asia,
            Europe, and Africa, the UAE boasts excellent air and sea
            connections, enhancing its strategic importance for global business.
            The Golden Visa allows expats to live, work, and study in the UAE
            without needing a national sponsor, granting 100% ownership of their
            businesses.
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
            The Dubai Golden Visa Program is open to several categories of
            applicants, including
          </p>
          <div className="">
            <ul className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl">
              <li className="mt-4 font-semibold text-lg">
                Be at least 18 years old
              </li>
              <li className="mt-4 font-semibold text-lg">
                Valid travel documents such as a passport
              </li>
              <li className="mt-4 font-semibold text-lg">
                Must pass a medical fitness test and obtain a security clearance
              </li>
              <li className="mt-4 font-semibold text-lg">
                Proof of investment and financial stability
              </li>
              <li className="mt-4 font-semibold text-lg">Spouse</li>
              <li className="mt-4 font-semibold text-lg">
                Children up to 25 years old
              </li>
              <li className="mt-4 font-semibold text-lg">Parents</li>
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
