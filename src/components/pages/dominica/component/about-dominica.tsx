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

export const AboutDominica = () => {
  const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "No Residency Requirements & Experience",
      description:
        "There are no physical residency prerequisites, ensuring flexibility. No education or managerial experience required.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Travel Convenience",
      description:
        "Applicants are not obligated to visit Dominica during the application process, providing convenience.",
    },
    {
      id: 3,
      icon: Handshake ,
      title: "Inclusive for Families",
      description:
        "The program encompasses dependent children and siblings under 30, unmarried daughters under 30 and dependent parents or grandparents over 55, fostering family unity.",
    },
    {
      id: 4,
      icon: Globe,
      title: "Global Mobility",
      description:
        "With citizenship, enjoy visa-free travel to over 134 countries, including Europe’s Schengen zone, the U.K., Hong Kong, Malaysia, Singapore and Turkey.",
    },
    {
      id: 5,
      icon: BarChart,
      title: "Tax Benefits",
      description:
        "Minimal taxation, with no wealth, gift, inheritance, foreign income, or capital gains tax",
    },
  ];
  return (
    <>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Overview
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            One of the most beautiful islands in the Caribbean, the Commonwealth
            of Dominica established its citizenship by investment program in
            1993 to boost its investment. Roseau is the capital which located on
            the southwest coast and known for its 18th-century Creole
            architecture. Dominica’s currency is Dominican Peso (DOP), which is
            pegged to the USD at a rate of 0.018 (USD). English is the official
            language of Dominica; however, French dialects is widely spoken in
            Dominica. With Dominica passport you can have the access to 134
            visa-free destination worldwide. Adding to that, one of the most
            important benefits of the Dominican passport is a visa-free to
            China.
          </p>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">
              DOMINICA?
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            The Dominican government extends a range of financial incentives to
            entrepreneurs seeking citizenship through investment in the country.
            These incentives encompass substantial tax breaks, exemptions from
            import duties and taxes, and simplified procedures. The Dominica
            Citizenship by Investment Program, provides potential applicants
            with a range of special benefits:
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
            To be eligible for citizenship in Dominica, applicants must meet one of the investment criteria outlined below, in addition to satisfying the following prerequisites:
          </p>
          <div className="">
            <ul className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl">
              <li className="mt-4 font-semibold text-lg">
                Applicant must be at least 18 years old
              </li>
              <li className="mt-4 font-semibold text-lg">
                Good Character: Applicants must be known for their good behavior
              </li>
              <li className="mt-4 font-semibold text-lg">
                No Criminal Record: A clean history without any criminal record
                is essential
              </li>
              <li className="mt-4 font-semibold text-lg">
                Good Health: Applicants should be in good physical condition
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
