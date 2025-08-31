import dominica from "@/assets/logo/UeaFlag.png";
import layer from "@/assets/logo/Layer 1.png";
import Image from "next/image";
export const PortfolioUAE = () => {
  return (
    <>
      <section className="bg-[#242058] py-10">
        <div className="w-7xl mx-auto px-4 flex">
          <div className="py-5">
            <h2 className="text-[#d8a16f] text-2xl font-bold">Location</h2>
            <h6 className="text-white text-xl">
             The United Arab Emirates (UAE) is in the southeastern Arabian Peninsula, bordered by Saudi Arabia and Oman, with coastlines along the Persian Gulf and Gulf of Oman. Its strategic position connects Asia, Europe, and Africa, making it a global trade and travel hub
            </h6>
          </div>
        </div>
        <div className="w-7xl mx-auto px-4 flex items-center">
          <div className="w-1/4">
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Contint</h2>
              <h6 className="text-white text-xl">Middle East</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Part</h2>
              <h6 className="text-white text-xl">West Asia</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Language</h2>
              <h6 className="text-white text-xl">Arabic</h6>
            </div>
          </div>
          <div className="w-1/4">
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Currency</h2>
              <h6 className="text-white text-xl">UAE Dirham (AED)</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Capital</h2>
              <h6 className="text-white text-xl">Abu Dhabi</h6>
            </div>
            <div className="py-3">
              <h2 className="text-[#d8a16f] text-2xl font-bold">Totla Area</h2>
              <h6 className="text-white text-xl"> 83.600 km</h6>
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
              <h1 className="text-white font-bold text-3xl">9,517 M</h1>
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
