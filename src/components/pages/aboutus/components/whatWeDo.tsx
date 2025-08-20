import { Badge, CheckCircle } from "lucide-react";
import whatwedo from "@/assets/images/About-Us-image.jpg";
import Image from "next/image";
export const WhatWeDo = () => {
  return (
    <>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
   
            <h2 className="text-5xl lg:text-5xl font-bold text-[#242058] mb-4">
              Navigating the Path to Second Option
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              MultiCitizenships is the access key to the world's most exclusive
              citizenship by investment programs. Our specialists have a unique
              opportunity to secure residency through strategic investments
              options for specific needs and preferences of the clients.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image src={whatwedo} alt="what we do" width={400} height={500} className="w-full rounded-2xl" />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#d8a16f] mt-1 flex-shrink-0 " />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Expert Consultation
                  </h3>
                  <p className="text-muted-foreground">
                    We offer the passion for helping individuals and families to
                    achieve their dreams of international mobility.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#d8a16f] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Comprehensive Due Diligence
                  </h3>
                  <p className="text-muted-foreground">
                    We are driven by the passion for helping individuals and
                    families to achieve their dreams of international mobility.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-[#d8a16f] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    End-to-End Support
                  </h3>
                  <p className="text-muted-foreground">
                    From initial consultation to final approval, we guide you
                    through every step of the citizenship journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
