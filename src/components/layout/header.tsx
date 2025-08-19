"use client"

import Link from "next/link"
import { Facebook, Instagram, Youtube, Twitter, MessageCircle, ChevronDown, Menu, X, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import logo from "@/assets/images/Untitled-2.png"

export default function EnhancedHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ]

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/blog", label: "Blog & News" },
    { href: "/contact", label: "Contact Us" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#242058] to-[#242058] text-white py-2 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-xs sm:text-sm font-medium">{"Let's Have Quick Chat on"}</span>
            <Button
              size="sm"
              className="bg-[#00c950] text-[#242058] hover:bg-gray-100 hover:scale-105 transition-all duration-200 h-8 px-3 rounded-full shadow-sm"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
      </svg>
              <span className="hidden sm:inline text-xs font-medium text-white">WhatsApp</span>
              <span className="sm:hidden text-xs font-medium text-white">Chat</span>
            </Button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                className="w-6 h-6 sm:w-7 sm:h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                aria-label={label}
              >
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#242058] group-hover:text-[#242058] transition-colors" />
              </Link>
            ))}
            <Link
              href="#"
              className="w-6 h-6 sm:w-7 sm:h-7 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 group"
              aria-label="Google"
            >
              <span className="text-[#242058] group-hover:text-[#242058] text-xs font-bold transition-colors">G</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`bg-white shadow-sm border-b sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-md backdrop-blur-sm bg-white/95" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 lg:gap-3 group">
              <div className="relative">
                <Image
                  src={logo}
                  width={150}
                  height={50}
                  alt="Company Logo"
                  className="h-10 w-auto sm:h-12 lg:h-14 transition-transform duration-200 "
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navigationItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-700 hover:text-[#242058]  text-2xm  transition-all duration-200 relative group py-2 font-bold"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#242058] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
              {/* Desktop Actions */}
              <div className="hidden md:flex items-center gap-3 lg:gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#242058] text-[#242058] hover:bg-[#242058] hover:text-white transition-all duration-200 h-9 bg-transparent"
                    >
                      English
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>Arabic</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button className="bg-[#242058] hover:bg-[#2d2e5f] text-white transition-all duration-200 hover:scale-105 shadow-sm h-9">
                  <Phone className="w-4 h-4 mr-2" />
                  Get A Call Back
                </Button>
              </div>

              {/* Mobile Actions */}
              <div className="md:hidden flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#242058] text-[#242058] hover:bg-[#242058] hover:text-white px-2 h-8 bg-transparent"
                    >
                      EN
                      <ChevronDown className="w-3 h-3 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>EN</DropdownMenuItem>
                    <DropdownMenuItem>AR</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button size="sm" className="bg-[#242058] hover:bg-[#2d2e5f] text-white px-2 text-xs h-8">
                  <Phone className="w-3 h-3 mr-1" />
                  Call
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2 h-8 w-8"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-5 h-5">
                  <Menu
                    className={`w-5 h-5 absolute transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    className={`w-5 h-5 absolute transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                    }`}
                  />
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-4 pb-2 border-t mt-4">
              <nav className="flex flex-col space-y-1">
                {navigationItems.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-gray-700 hover:text-[#242058] hover:bg-gray-50 font-medium py-3 px-2 rounded-lg transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Menu Actions */}
              <div className="pt-4 mt-4 border-t space-y-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full border-[#242058] text-[#242058] hover:bg-[#242058] hover:text-white justify-center bg-transparent"
                    >
                      English
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>Arabic</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  className="w-full bg-[#242058] hover:bg-[#2d2e5f] text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Get A Call Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
