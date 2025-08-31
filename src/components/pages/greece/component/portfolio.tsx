import Greece from "@/assets/logo/Flag-map_of_Greece.svg.png";
import layer from "@/assets/logo/Layer 1.png";
import Image from "next/image";
export const PortfolioGreece = () => {
  return (
    <>
      <section className="bg-[#242058] py-10">
        <div className="w-7xl mx-auto px-4 flex">
          <div className="py-5">
            <h2 className="text-[#d8a16f] text-2xl font-bold">Location</h2>
            <h6 className="text-white text-xl">
              Greece is in southeastern Europe, bordered by Albania, North Macedonia, Bulgaria, and Turkey, with the Aegean, Ionian, and Mediterranean Seas surrounding it, connecting Europe, Asia, and Africa.
            </h6>
          </div>
        </div>
        <div className="w-7xl mx-auto px-4 flex items-center">
          <div className="w-1/4">
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Contint</h2>
              <h6 className="text-white text-xl">Southeastern Europe</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Part</h2>
              <h6 className="text-white text-xl">European & Schengen</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Language</h2>
              <h6 className="text-white text-xl">Modern Greek</h6>
            </div>
          </div>
          <div className="w-1/4">
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Currency</h2>
              <h6 className="text-white text-xl">Euro</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Capital</h2>
              <h6 className="text-white text-xl">Anthens</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Totla Area</h2>
              <h6 className="text-white text-xl"> 131.957 km</h6>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <div className="flex flex-col items-center ">
              <Image
                src={layer}
                alt="saint lucia layer"
                width={150}
                height={150}
                className=" object-contain"
              />
              <h1 className="text-white font-bold text-3xl">10.43 M</h1>
            </div>
            <Image
              src={Greece}
              alt="Greece"
              width={250}
              height={250}
              className=" object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};
