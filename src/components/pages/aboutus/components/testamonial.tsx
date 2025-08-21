"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amira Al-Qassim",
    role: "A World of Possibilities",
    content:
      "I was impressed by the global vision of MultiCitizenships. They provided me with insights and opportunities I hadn't even considered. Thanks to them, I now have the chance to explore new horizons and opportunities for my business. I couldn't be happier.",
    avatar: "/avatars/1.jpg", // Replace with your image paths
    rating: 5,
  },
  {
    id: 2,
    name: "Fawaz Al-Maktoum",
    role: "Unparalleled Support",
    content:
      "I can't express my gratitude enough to MultiCitizenships. They not only provided expert guidance but also exhibited an exceptional level of care and understanding throughout the process. Their team is not just professional; they're genuinely passionate about helping people achieve their dreams",
    avatar: "/avatars/2.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohammed Abdullah",
    role: "A Streamlined Journey to Residency",
    content:
      "MultiCitizenships made the complex journey to residency by investment feel effortless. They guided me through every step, from choosing the right program to final approval. I'm now a proud resident of a beautiful country, all thanks to this incredible team.",
    avatar: "/avatars/3.jpg",
    rating: 4,
  },
  
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlay, currentIndex]);

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At MultiCitizenships, our clients’ satisfaction is our most
            significant achievement. Here’s what some of them have to say about
            their experience with us:{" "}
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto overflow-hidden rounded-xl bg-white shadow-lg"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Testimonial Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full p-8 md:p-12"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Quote icon */}
                  <div className="mb-6 p-3 bg-[#d8a16f] rounded-full">
                    <Quote className="h-8 w-8 text-[#242058]" />
                  </div>

                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
                    "{testimonial.content}"
                  </p>

                  {/* Avatar */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-md">
                        {/* In a real project, you would use next/image */}
                        <div className="w-full h-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name and role */}
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
