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

export const AboutHungary = () => {
  const featuresData = [
    {
      id: 1,
      icon: Globe2,
      title: "Prime Locatione",
      description:
        "Hungary's central European location offers a strategic base for exploring neighboring European countries and is easily accessible from around the world.",
    },
    {
      id: 2,
      icon: Plane,
      title: "Universal Healthcare",
      description:
        "Enjoy access to Hungary's universal healthcare system, providing quality medical services to residents.",
    },
    {
      id: 3,
      icon: Handshake ,
      title: "Inclusive for Families And No Language Proficiency",
      description:
        "The program encompasses dependent children and dependent parents, fostering family unity. Hungary's program does not require language proficiency, making it accessible to a global audience",
    },
    {
      id: 4,
      icon: Globe,
      title: "Investment Options",
      description:
        "The program provides various investment routes, allowing flexibility to suit individual preferences.Cultural Richness",
    },
    {
      id: 5,
      icon: BarChart,
      title: "Cultural Richness",
      description:
        "Hungary offers a cultural experience like no other, from its culinary delights to its traditional festivals and events.",
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
            Hungary, a country in the center of Europe, is known for its rich
            cultural history, ancient sites, and dynamic way of life. This warm
            nation offers a fusion of tradition and modernity, giving its
            residents a great standard of living. Hungary is a hub for business
            and tourism thanks to its booming economy, varied landscapes, and
            strategic location. With a strong emphasis on education and
            innovation, Hungary continues to draw tourists and investors from
            around the world.
          </p>
        </div>
      </section>
      <section className="">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-6xl font-bold mb-6 text-center text-[#242058]">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">
              Hungary?
            </span>
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-center">
            Selecting Hungary’s Residency by Investment Program is a strategic
            decision for those seeking European residency. Hungary, celebrated
            for its rich heritage, cultural vibrancy, and stable economy, offers
            a transparent and accessible path to residency. Notably, Hungary
            ranks among the top choices in the European Union for investors and
            their families. Hungary stands among the top 30 most visited
            countries globally, boasting a wealth of history and culture. As a
            resident, you’ll enjoy access to an array of services, from
            universal healthcare to world-class education systems.
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
            To be eligible for residency in Hungary, applicants must meet one of
            the investment criteria outlined below, in addition to satisfying
            the following prerequisites:
          </p>
          <div className="">
            <ul className="list-disc list-inside text-lg space-y-2 marker:text-[#d8a16f] marker:text-3xl">
              <li className="mt-4 font-semibold text-lg">
                Successful Due Diligence: Pass due diligence and background
                checks at different stages of the process
              </li>
              <li className="mt-4 font-semibold text-lg">
                Financial Eligibility: Demonstrate sufficient financial means to
                support themselves and family, with a clear source of wealth.
              </li>
              <li className="mt-4 font-semibold text-lg">
                Property Purchase Approval: Obtain approval from competent
                authorities to purchase residential property.
              </li>
              <li className="mt-4 font-semibold text-lg">
                Property Acquisition Capability: Demonstrate the financial
                capacity to buy residential property in Hungary and within the
                specified timeframe.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
