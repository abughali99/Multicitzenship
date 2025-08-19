"use client"
import { useState } from "react";
import { Button } from "./button";
import CallbackForm from "../pages/home/components/request-form";
import { X } from "lucide-react";

export const PobUp = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <>
      <Button
        onClick={openPopup}
        className="fixed right-0 top-1/2 -translate-y-1/2  hover:bg-[#242058] text-white py-3  shadow-lg z-40 h-[140px] w-[50px] cursor-pointer rounded-tl-[22px] rounded-tr-none rounded-br-[22px] rounded-bl-none bg-[#d8a16f]"
      >
       <span className="rotate-90 "> Get A Call Back</span>
      </Button>

            {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-card rounded-lg shadow-xl max-w-md w-full p-6 relative">
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer"
            >
              <X size={20} />
            </button>
         <CallbackForm/>
        
          </div>
        </div>
      )}
    </>
  );
};
