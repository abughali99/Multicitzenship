import dominica from "@/assets/logo/dominicaFlag.png";
import layer from "@/assets/logo/Layer 1.png";
import Image from "next/image";
export const PortfolioKitts = () => {
  return (
    <>
      <section className="bg-[#242058] py-10">
        <div className="w-7xl mx-auto px-4 flex">
          <div className="py-5">
            <h2 className="text-[#d8a16f] text-2xl font-bold">Location</h2>
            <h6 className="text-white text-xl">
              Caribbean, islands in the Caribbean Sea, about one-third of the
              way from Puerto Rico to Trinidad and Tobago
            </h6>
          </div>
        </div>
        <div className="w-7xl mx-auto px-4 flex items-center">
          <div className="w-1/4">
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Contint</h2>
              <h6 className="text-white text-xl">North America</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Part</h2>
              <h6 className="text-white text-xl">Caribbean</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Language</h2>
              <h6 className="text-white text-xl">English-Dominica Creole</h6>
            </div>
          </div>
          <div className="w-1/4">
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Currency</h2>
              <h6 className="text-white text-xl">British West Indies Doller</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Capital</h2>
              <h6 className="text-white text-xl">Roseau</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Totla Area</h2>
              <h6 className="text-white text-xl"> 751 sq. km</h6>
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
              <h1 className="text-white font-bold text-3xl">76,597</h1>
            </div>
            <Image
              src={dominica}
              alt="saint lucia"
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
