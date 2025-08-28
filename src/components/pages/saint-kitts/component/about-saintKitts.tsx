import {
  BarChart,
  Clock,
  Globe,
  Globe2,
  MapPin,
  Plane,
  Shield,
  Users,
  Users2,
  Workflow,
} from "lucide-react";

export const AboutSaintKitts = () => {
  const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "No Residency Requirements",
      description:
        "There are no physical residency prerequisites, ensuring flexibility.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Travel Flexibility",
      description:
        "Applicants are not obligated to visit St. Kitts & Nevis during the application process, providing convenience.",
    },
    {
      id: 3,
      icon: Workflow,
      title: "Swift Processing",
      description:
        "Obtain citizenship within just two to four months, with an accelerated option for approval in just 90 days.",
    },
    {
      id: 4,
      icon: Users2,
      title: "Inclusive for Families",
      description:
        "The program encompasses dependent children and siblings under 30 and dependent parents or grandparents over 55, fostering family unity.",
    },
    {
      id: 5,
      icon: Globe,
      title: "Global Mobility",
      description:
        "With citizenship, enjoy visa-free travel to over 155 countries, including Schengen member states, the U.K., Hong Kong, Singapore, and more.",
    },
    {
      id: 6,
      icon: BarChart,
      title: "Tax Benefits",
      description:
        "St. Kitts & Nevis imposes no taxes on worldwide income, ensuring financial advantages",
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
            St. Kitts was once known as the Gibraltar of the West Indies for its
            domination of 18th- century colonial battles. Its official name is
            The Federation of Saint Christopher (St. Kitts and Nevis), while its
            known by the name of St Kitts & Nevis, the capital of St Kitts is
            Basseterre holding a Kittitian nationality, and the capital of Nevis
            is Charlestown holding a Nevisian nationality.
          </p>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">
              SAINT St Kitts & Nevis?
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            St. Kitts and Nevis is fast-becoming a magnet for Foreign Direct
            Investment (FDI) in key sectors, such as tourism-related real
            estate, financial services and offshore education–medical university
            institutions, primarily. St. Kitts & Nevis recognizes dual
            citizenship, allowing investors to retain the benefits of their
            current passports. As a pioneer in the field, the St. Kitts & Nevis
            Citizenship by Investment Program brings forth a range of distinct
            benefits for applicants:
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
           To be eligible for citizenship in St. Kitts & Nevis, applicants must meet one of the investment criteria outlined below, in addition to satisfying the following prerequisites:
          </p>
          <div className="">
            <ul className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl">
              <li className="mt-4 font-semibold text-lg">
                Good Character: Applicants must be known for their good behavior
              </li>
              <li className="mt-4 font-semibold text-lg">
              No Criminal Record: A clean history without any criminal record is essential
              </li>
              <li className="mt-4 font-semibold text-lg">
              Good Health: Applicants should be in good physical condition
              </li>
              <li className="mt-4 font-semibold text-lg">
                Demonstrate a substantial personal net worth
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
