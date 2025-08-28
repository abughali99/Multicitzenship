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

export const AboutSaintLucia = () => {
  const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "No Residency Requirements",
      description:
        "This program has no physical residency prerequisites, providing flexibility and convenience.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Travel Flexibility",
      description:
        "Applicants are not required to travel to Saint Kitts & Nevis during the application process, ensuring convenience and accessibility.",
    },
    {
      id: 3,
      icon: Workflow,
      title: "Efficient Processing",
      description:
        "Obtain citizenship within just three-six months , making it one of the swiftest programs available.",
    },
    {
      id: 4,
      icon: Users2,
      title: "Inclusive for Families",
      description:
        "The program extends to dependent children under 25, dependent siblings under 18 and parents above the age of 65 age enabling families to benefit from this unique opportunity",
    },
    {
      id: 5,
      icon: Globe,
      title: "Global Mobility",
      description:
        "With citizenship, enjoy visa-free travel to over 146 countries, including the Schengen Zone, the U.K., and Hong Kong",
    },
    {
      id: 6,
      icon: BarChart,
      title: "Tax Benefits",
      description:
        "Saint Lucia imposes no taxes on worldwide income, creating a favorable financial environment.",
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
            Saint Lucia is an island country located in the Eastern Caribbean
            and forms part of the Lesser Antilles. Today, Saint Lucia is a full
            member of the Commonwealth of Nations (British Commonwealth), United
            Nations, and the Caribbean Community (CARICOM)
          </p>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">
              SAINT LUCIA?
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            Saint Lucia’s Citizenship by Investment Board has systematically
            selected the best practices, drawing on the expertise of its
            Caribbean counterparts. Their objective is to simplify the program
            for investors while providing unprecedented benefits to the country
            and its residents. Saint Lucia recognizes dual citizenship, which
            may provide opportunities for company growth and tax breaks. The
            program also provides advantages such as:
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
            Saint Lucia’s Citizenship by Investment Program was established
            after parliamentary assent to Act No. 14 of 2015 on August 24, 2015.
            Regulations of the citizenship program are cited in statutory
            instrument no. 89 of 2015 with subsequent amendments being
            introduced in statutory instrument no. 1 of 2017.
          </p>
          <div className="">
            <ul className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl">
                <li className="mt-4 font-semibold text-lg">The Main Applicant must be 18 years old or older.</li>
              <li className="mt-4 font-semibold text-lg">
                Good Character: Applicants must be known for their good
                behavior.
              </li>
               <li className="mt-4 font-semibold text-lg">
                No Criminal Record: A clean history without any criminal record
                is essential.
              </li>
             <li className="mt-4 font-semibold text-lg">
                Good Health: Applicants should be in good physical condition.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
