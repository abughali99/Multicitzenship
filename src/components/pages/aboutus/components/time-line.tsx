"use client"

import { Building2, Globe, Award, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const timelineData = [
  {
    year: "Founded",
    location: "California, USA",
    title: "First Step",
    subtitle: "Founded in USA",
    description: "Pioneering Excellence in the Heart of America: Where Our Journey Began",
    icon: Building2,
    side: "right",
  },
  {
    year: "Expansion",
    location: "With Commitment",
    title: "Expansion Plan",
    subtitle: "International Expansion",
    description:
      "Driven by our commitment to global mobility, we expanded our presence beyond borders. Our reach extended, and so did our impact.",
    icon: Globe,
    side: "left",
  },
  {
    year: "Excellence",
    location: "Structure",
    title: "Brand Equity",
    subtitle: "Building Trust and Expertise",
    description:
      "Over the years, we've built a reputation for trust and expertise in the fields of Citizenship by Investment (CBI) and Residency by Investment (RBI). Our clients' dreams became our mission.",
    icon: Award,
    side: "right",
  },
  {
    year: "Jan 2021",
    location: "New Order",
    title: "Gulf and Levant Expansion",
    subtitle: "Gulf and Levant Expansion",
    description:
      "Our journey continues as we extend our services to the Gulf and Levant regions. With each step, we bring new opportunities.",
    icon: MapPin,
    side: "left",
  },
]

export function CompanyTimeline() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [scrollProgress, setScrollProgress] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || itemRefs.current.length === 0) return

      const windowHeight = window.innerHeight
      const timelineRect = timelineRef.current.getBoundingClientRect()

      let progress = 0

      // Find the furthest progressed item
      itemRefs.current.forEach((itemRef, index) => {
        if (!itemRef) return

        const itemRect = itemRef.getBoundingClientRect()
        const itemCenter = itemRect.top + itemRect.height / 2
        const viewportCenter = windowHeight / 2

        // Calculate how far past the center this item is
        if (itemCenter <= viewportCenter) {
          // Item has passed the center, contribute to progress
          const itemProgress = (index + 1) / timelineData.length
          progress = Math.max(progress, itemProgress)

          // Add fine-tuned progress within the current item
          const extraProgress = Math.min(1, Math.max(0, (viewportCenter - itemCenter) / (windowHeight * 0.3)))
          const nextItemProgress = Math.min(1, itemProgress + extraProgress * (1 / timelineData.length))
          progress = Math.max(progress, nextItemProgress)
        }
      })

      // Ensure progress starts when timeline comes into view
      if (timelineRect.top <= windowHeight && timelineRect.bottom >= 0) {
        progress = Math.max(progress, 0.05) // Minimum progress when timeline is visible
      }

      setScrollProgress(Math.min(1, progress))
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.3, rootMargin: "-50px" },
    )

    // Observe all timeline items
    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="bg-muted/30">

    <section className="py-24 px-6 max-w-7xl mx-auto ">
      <div className="text-center mb-20">
 
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-tight" style={{ color: "#242058" }}>
          Company Timeline
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
          Charting Success Through Time: Your Journey, Our Legacy
        </p>
      </div>

      {/* Timeline */}
      <div className="relative" ref={timelineRef}>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full">
          {/* Background line */}
          <div className="w-full h-full bg-gray-200 rounded-full" />
          <div
            className="absolute top-0 left-0 w-full rounded-full transition-all duration-500 ease-out"
            style={{
              backgroundColor: "#d8a16f",
              height: `${scrollProgress * 100}%`,
              boxShadow: scrollProgress > 0 ? "0 0 8px rgba(216, 161, 111, 0.3)" : "none",
            }}
          />
        </div>

        {/* Timeline items */}
        <div className="space-y-20">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center"
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
            >
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-md z-10 transition-all duration-500 ${
                  visibleItems.has(index) ? "scale-100 opacity-100" : "scale-75 opacity-50"
                }`}
                style={{ backgroundColor: visibleItems.has(index) ? "#d8a16f" : "#e5e7eb" }}
              />

              {/* Content */}
              <div className={`w-1/2 ${item.side === "right" ? "ml-auto pl-16" : "pr-16"}`}>
                <div
                  className={`bg-white rounded-lg shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-700 hover:-translate-y-1 ${
                    item.side === "left" ? "text-left" : ""
                  } ${
                    visibleItems.has(index)
                      ? "opacity-100 translate-x-0"
                      : `opacity-0 ${item.side === "left" ? "translate-x-8" : "-translate-x-8"}`
                  }`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-6 shadow-sm ${item.side === "left" ? "ml-auto" : ""}`}
                    style={{ backgroundColor: "#242058" }}
                  >
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  <div
                    className={`inline-block px-4 py-1.5 rounded-md text-xs font-semibold tracking-wide uppercase mb-5 ${item.side === "left" ? "ml-auto block" : ""}`}
                    style={{ backgroundColor: "#d8a16f", color: "white" }}
                  >
                    {item.year}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 tracking-tight" style={{ color: "#242058" }}>
                    {item.title}
                  </h3>

                  {/* Location */}
                  <p className="text-sm font-medium mb-4 opacity-80" style={{ color: "#d8a16f" }}>
                    {item.location}
                  </p>

                  <h4 className="text-lg font-medium mb-4 leading-tight" style={{ color: "#242058" }}>
                    {item.subtitle}
                  </h4>

                  <p className="text-gray-700 leading-relaxed text-sm font-light">{item.description}</p>
                </div>
              </div>

              <div
                className={`md:hidden absolute inset-0 transition-all duration-700 ${
                  visibleItems.has(index) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
              >
                <div className="pl-14 w-full">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                    {/* Icon */}
                    <div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 shadow-sm"
                      style={{ backgroundColor: "#242058" }}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Year badge */}
                    <div
                      className="inline-block px-3 py-1 rounded-md text-xs font-semibold tracking-wide uppercase mb-4"
                      style={{ backgroundColor: "#d8a16f", color: "white" }}
                    >
                      {item.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2 tracking-tight" style={{ color: "#242058" }}>
                      {item.title}
                    </h3>

                    {/* Location */}
                    <p className="text-xs font-medium mb-3 opacity-80" style={{ color: "#d8a16f" }}>
                      {item.location}
                    </p>

                    {/* Subtitle */}
                    <h4 className="text-base font-medium mb-3 leading-tight" style={{ color: "#242058" }}>
                      {item.subtitle}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 text-center">
        <div
          className="inline-flex items-center justify-center w-8 h-8 rounded-full shadow-sm"
          style={{ backgroundColor: "#d8a16f" }}
        >
          <div className="w-2 h-2 rounded-full bg-white opacity-90" />
        </div>
      </div>
    </section>
    </section>

  )
}
