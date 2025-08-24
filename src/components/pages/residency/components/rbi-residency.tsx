"use client";

import { Globe, Shield, TrendingUp, Calculator, Home } from "lucide-react";
import BO from "@/assets/icons/business-opportunities.svg"

const benefits = [
  {
    id: 1,
    icon: Globe,
    title: "International Mobility",
    description:
      "Acquiring residency in a foreign country provides the flexibility to travel, live, and work within that nation. It's a gateway to exploring new countries and cultures.",
  },
  {
    id: 2,
    icon: Shield,
    title: "Business Opportunities",
    description:
      "Individuals can diversify their financial holdings, reduce risks, and explore new business ideas or investments in rising markets by investing in a new country.",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Family Inclusion",
    description:
      "Residency programs allow family members to apply, ensuring that your loved ones can also benefit from the new opportunities and lifestyle.",
  },
  {
    id: 4,
    icon: Home,
    title: "Healthcare Benefits",
    description:
      "Enjoy access to world-class healthcare systems, ensuring the well-being of your family and peace of mind.",
  },
  {
    id: 5,
    icon: Calculator,
    title: "Tax Efficiency",
    description:
      "Residency by investment programs offer favorable tax policies that can lead to significant financial savings.",
  },
];

export const RBIResidency  = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
    

        {/* Flip Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-[#242058]">
            Benefits of Citizenship by Investment
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Citizenship by investment programs provide a variety of advantages
            that can improve your life and open up new opportunities. Here are
            some of the main advantages:
          </p>
        </div>
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="group perspective"
            >
              <div className="relative w-full h-64 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                
                {/* Front side */}
                <div className="absolute inset-0 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center backface-hidden">
                  <benefit.icon className="w-12 h-12  mb-4 text-[#242058]" />
                  <h3 className="text-xl font-semibold text-[#242058]">{benefit.title}</h3>
                </div>

                {/* Back side */}
                <div className="absolute inset-0 bg-[#d8a16f] text-white rounded-lg shadow-lg p-6 flex items-center justify-center text-center rotate-y-180 backface-hidden">
                  <p>{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
