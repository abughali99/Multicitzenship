import world from "@/assets/images/wrold.webp";
import { Facebook, Instagram, Linkedin, TicketCheckIcon, Twitter, X, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogoMulti from "@/assets/icons/MC-345x125-light.png"

export const Footer = () => {
  return (
 <footer className="relative bg-[#242058] text-[#E0E0E0] py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background pattern */}
      <Image
        src={world}
        alt="World map pattern background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0 opacity-30"
      />

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col items-start space-y-4">
          <Image
            src="/images/multicitizenships-logo.png"
            alt="MultiCitizenships Logo"
            width={200}
            height={60}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed">
            {
              "Multicitizenships enables individuals and families to attain Global Citizenship by making investments in second residency and citizenship programs worldwide. "
            }
            <Link href="#" className="text-[#63B3ED] hover:underline">
              Read more
            </Link>
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 pb-1 border-b-2 border-[#D4AF37] inline-block">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Citizenship by Investment
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Residency by Investment
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Term of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Career
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contacts */}
        <div>
          <h3 className="font-semibold text-lg mb-4 pb-1 border-b-2 border-[#D4AF37] inline-block">Contacts</h3>
          <p className="font-semibold mb-2">Global Office Locations</p>
          <ul className="space-y-2 text-sm">
            <li>
              Amman- Jordan |{" "}
              <Link href="tel:+962770088880" className="hover:underline">
                +962 77 008 8880
              </Link>
            </li>
            <li>
              Riyadh- KSA |{" "}
              <Link href="tel:+966548044243" className="hover:underline">
                +966 54 8044243
              </Link>
            </li>
            <li>
              Dubai- UAE |{" "}
              <Link href="tel:+971565747350" className="hover:underline">
                +971 56 5747350
              </Link>
            </li>
            <li>
              e-Mail:{" "}
              <Link href="mailto:info@multicitizenship.com" className="hover:underline">
                info@multicitizenship.com
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Location on Map */}
        <div>
          <h3 className="font-semibold text-lg mb-4 pb-1 border-b-2 border-[#D4AF37] inline-block">Location on Map</h3>
          <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.9000000000004!2d35.8933333!3d31.9533333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDE3JzQyLjAiTiAzNcKwNTMnMzYuMCJF!5e0!3m2!1sen!2sjo!4v1678901234567!5m2!1sen!2sjo"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MultiCitizenships Location on Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Follow Us On section */}
      <div className="container mx-auto px-4 relative z-10 mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-lg pb-1 border-b-2 border-[#D4AF37] inline-block">Follow Us On</span>
        </div>
        <div className="flex space-x-4">
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1A3A] hover:bg-gray-200 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1A3A] hover:bg-gray-200 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1A3A] hover:bg-gray-200 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1A3A] hover:bg-gray-200 transition-colors"
            aria-label="Twitter"
          >
            <X className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1A3A] hover:bg-gray-200 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5" />
          </Link>
          {/* Custom SVG for TikTok as it's not in Lucide React */}
          {/* <Link
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1A3A] hover:bg-gray-200 transition-colors"
            aria-label="TikTok"
          >
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="TikTok icon"
              width={24}
              height={24}
              unoptimized // Use unoptimized for SVG placeholders
            />
          </Link> */}
        </div>
      </div>
    </footer>
  );
};