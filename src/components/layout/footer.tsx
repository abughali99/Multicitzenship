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
        quality={100}
        className="absolute inset-0 z-0 opacity-30 object-contain"
      />

      <div className="max-w-7xl mx-auto  px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col items-start space-y-4">
          <Image
            src={LogoMulti}
            alt="MultiCitizenships Logo"
            width={200}
            height={60}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed">
            {
              "Multicitizenships enables individuals and families to attain Global Citizenship by making investments in second residency and citizenship programs worldwide. "
            }
            <Link href="/aboutus" className="text-white hover:text-[#d8a16f]">
              Read more
            </Link>
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 pb-1 border-b-2 border-[#d8a16f] inline-block">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/aboutus" className="hover:text-[#d8a16f]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="hover:text-[#d8a16f]">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/citizenship" className="hover:text-[#d8a16f]">
                Citizenship by Investment
              </Link>
            </li>
            <li>
              <Link href="/residency" className="hover:text-[#d8a16f]">
                Residency by Investment
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#d8a16f]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#d8a16f]">
                Term of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#d8a16f]">
                Career
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contacts */}
        <div>
          <h3 className="font-semibold text-lg mb-4 pb-1 border-b-2 border-[#d8a16f] inline-block">Contacts</h3>
          <p className="font-semibold mb-2">Global Office Locations</p>
          <ul className="space-y-2 text-sm">
            <li>
              Amman- Jordan |{" "}
              <Link href="tel:+962770088880" className="hover:text-[#d8a16f]">
                +962 77 008 8880
              </Link>
            </li>
            <li>
              e-Mail:{" "}
              <Link href="mailto:info@multicitizenship.com" className="hover:text-[#d8a16f]">
                info@multicitizenship.com
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Location on Map */}
        <div>
          <h3 className="font-semibold text-lg mb-4 pb-1 border-b-2 border-[#d8a16f] inline-block">Location on Map</h3>
          <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.082014010418!2d35.84961537542449!3d31.958671674016337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b6adf389c284c11%3A0x5dfaedc3769b29de!2sMulticitizenships!5e0!3m2!1sen!2sjo!4v1754902091289!5m2!1sen!2sjo"
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
      <div className="max-w-7xl  mx-auto px-4 relative z-10 mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <span className="font-semibold text-lg pb-1 border-b-2 border-[#d8a16f] inline-block">Follow Us On</span>
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://www.facebook.com/multicitizenships1/"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1A3A] hover:bg-gray-200 transition-colors"
            aria-label="Facebook"
            target="_blank"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/multicitizenships/"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1A3A] hover:bg-gray-200 transition-colors"
            aria-label="Instagram"
            target="_blank"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/multicitizenships"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1A3A] hover:bg-gray-200 transition-colors"
            aria-label="LinkedIn"
            target="_blank"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/multicitize"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1A3A] hover:bg-gray-200 transition-colors"
            aria-label="Twitter"
            target="_blank"
          >
            <X className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.youtube.com/@MultiCitizenships"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#1A1A3A] hover:bg-gray-200 transition-colors"
            aria-label="YouTube"
            target="_blank"
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