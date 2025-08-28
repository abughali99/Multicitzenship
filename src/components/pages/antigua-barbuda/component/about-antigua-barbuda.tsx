import {
  BarChart,
  Clock,
  Globe,
  Globe2,
  Handshake,
  MapPin,
  Plane,
  Rocket,
  Shield,
  Users,
  Users2,
  Workflow,
} from "lucide-react";

export const AboutAntiguaBarbuda = () => {
  const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "No Residency Requirements & Experience",
      description:
        "There are no physical residency prerequisites, ensuring flexibility. And no education or managerial experience is required.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Travel Convenience",
      description:
        "Applicants are not obligated to visit Antigua & Barbuda during the application process, providing convenience.",
    },
        {
      id: 3,
      icon: Rocket ,
      title: "Swift Processing",
      description:
        "Obtain citizenship within just two to four months, with an accelerated option for approval in just 90 days.",
    },
    {
      id: 4,
      icon: Handshake ,
      title: "Inclusive for Families",
      description:
        "The program encompasses dependent children and unmarried sibling of the main applicant or the spouse and dependent parents or grandparents over 55, fostering family unity.",
    },
    {
      id: 5,
      icon: Globe,
      title: "Global Mobility",
      description:
        "With citizenship, enjoy visa-free travel to over 143 countries, including Schengen member states, the U.K., Hong Kong, Singapore, and more",
    },
    {
      id: 6,
      icon: BarChart,
      title: "Tax Benefits",
      description:
        "Antigua & Barbuda imposes no taxes on worldwide income, ensuring financial advantages",
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
            Antigua and Barbuda, an independent Commonwealth nation in the
            Eastern Caribbean, beckons with 365 pristine beaches washed by
            turquoise waters. These lush tropical islands are widely celebrated
            as one of the world’s most breathtaking destinations. Consequently,
            tourism stands as the primary catalyst for their Gross Domestic
            Product (GDP), contributing approximately 60% of the islands’
            revenue, with primary markets including the United States, Canada,
            and Europe. In addition to its natural allure, Antigua and Barbuda
            are esteemed members of various international organizations,
            including the United Nations, the British Commonwealth, Caricom, and
            the Organization of American States (OAS)
          </p>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">
              Antigua & Barbuda?
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            Choosing the Antigua and Barbuda Citizenship by Investment Program
            is a sensible decision for a variety of reasons. Aside from the
            spectacular natural splendor of this Caribbean nation, the program
            provides a streamlined road to citizenship, making it one of the
            quickest paths to international mobility. Antigua and Barbuda is a
            Commonwealth member, which entitles citizens to certain benefits in
            the United Kingdom and other Commonwealth member countries
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
            To be eligible for citizenship in Antigua & Barbuda, applicants must
            meet one of the investment criteria outlined below, in addition to
            satisfying the following prerequisites
          </p>
          <div className="">
            <ul className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl">
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
