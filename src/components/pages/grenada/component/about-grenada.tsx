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

export const AboutGrenada = () => {
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
            Grenada, known as the ‘Spice Isle,’ is a picturesque Caribbean
            nation celebrated for its stunning natural beauty, stable economy,
            and warm cultural diversity. The country offers investment
            opportunities in green sectors like agriculture and renewable
            energy. As a member of international organizations, Grenada stands
            as a sought-after destination, combining natural splendor, economic
            potential, and vibrant culture.
          </p>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">
              Grenada?
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            The Grenada Citizenship by Investment Program is a prime choice for
            individuals seeking an advantageous route to international
            citizenship. Grenada stands as a jewel in the Caribbean, known for
            its breathtaking natural beauty and economic stability. Choosing
            Grenada citizenship also offers a tax-efficient environment, with no
            language proficiency requires, or managerial experience. It’s a
            pathway to a brighter future in a nation that combines stunning
            landscapes with attractive economic opportunities, making Grenada an
            inviting destination for global citizens seeking new horizons.
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
            To be eligible for citizenship in Grenada, applicants must meet one
            of the investment criteria outlined below, in addition to satisfying
            the following prerequisites:
          </p>
          <div className="">
            <ul className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl">
              <li className="mt-4 font-semibold text-lg">
                Good Character: Applicants must be known for their good behavior{" "}
              </li>
              <li className="mt-4 font-semibold text-lg">
                No Criminal Record: A clean history without any criminal record
                is essential
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
