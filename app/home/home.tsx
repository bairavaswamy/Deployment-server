"use client";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SafetyCard from "./cards";
import { useMemo } from "react";

// Types for safety cards data
type CardData = {
  image: string;
  title: string;
  description: string;
  readMoreLink: string;
  callNumber: string;
};

// All cards data
const cardsData = [
    {
      image: "/images/balcony-net.jpg",
      title: "Balcony Safety Nets",
      description:
        "Installed to protect children, pets, and belongings from falling. Ideal for terraces, balconies, windows, and pools.",
      readMoreLink: "/services/balcony",
      callNumber: "+917995792953",
    },
    {
      image: "/images/invisible-grill.jpg",
      title: "Invisible Grills",
      description:
        "Modern, stylish, and safe invisible grills that secure your home without blocking the view.",
      readMoreLink: "/services/invisible",
      callNumber: "+917995792953",
    },
    {
      image: "/images/pigeon-net.jpg",
      title: "Pigeon Safety Nets",
      description:
        "Keep pigeons away from balconies and windows while maintaining airflow and hygiene.",
      readMoreLink: "/services/pigeon",
      callNumber: "+917995792953",
    },
    {
      image: "/images/residential-net.jpg",
      title: "Residential Safety Nets",
      description:
        "Safety nets for apartments, villas, and independent houses to protect your loved ones.",
      readMoreLink: "/services/residential",
      callNumber: "+917995792953",
    },
    {
      image: "/images/sports-net.jpg",
      title: "Sports Safety Nets",
      description:
        "Durable nets for playgrounds, cricket, football, and other sports facilities.",
      readMoreLink: "/services/sports",
      callNumber: "+917995792953",
    },
    {
      image: "/images/construction-net.jpg",
      title: "Construction Safety Nets",
      description:
        "Strong nets designed for construction sites to prevent debris and ensure worker safety.",
      readMoreLink: "/services/construction",
      callNumber: "+917995792953",
    },
    {
      image: "/images/pool-net.jpg",
      title: "Swimming Pool Nets",
      description: "Prevent accidents by securing your swimming pools with safety nets.",
      readMoreLink: "#",
      callNumber: "+917995792953",
    },
    {
      image: "/images/stair-net.jpg",
      title: "Staircase Safety Nets",
      description: "Best protection for staircases in apartments and commercial spaces.",
      readMoreLink: "#",
      callNumber: "+917995792953",
    },
  ];
// Custom Arrow Component with Accessibility
const Arrow = ({
  direction,
  onClick,
}: {
  direction: "next" | "prev";
  onClick?: () => void;
}) => (
  <button
    aria-label={direction === "next" ? "Next slide" : "Previous slide"}
    onClick={onClick}
    className={`absolute top-1/2 ${
      direction === "next" ? "right-4" : "left-4"
    } -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow cursor-pointer hover:scale-110 transition z-10`}
  >
    {direction === "next" ? (
      <FaChevronRight className="text-gray-800 dark:text-white w-5 h-5" />
    ) : (
      <FaChevronLeft className="text-gray-800 dark:text-white w-5 h-5" />
    )}
  </button>
);

// Custom Hook for gallery images
function useGalleryImages(count: number) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        src: `/images/gallery_${i + 1}.jpg`,
      })),
    [count]
  );
}

// Responsive carousel settings
const carouselSettings = ({
  slidesToShow,
  slidesToScroll,
  speed,
  dots = true,
}: {
  slidesToShow: number;
  slidesToScroll: number;
  speed: number;
  dots?: boolean;
}) => ({
  dots,
  infinite: true,
  autoplay: true,
  speed,
  autoplaySpeed: 2500,
  slidesToShow,
  slidesToScroll,
  arrows: true,
  nextArrow: <Arrow direction="next" />,
  prevArrow: <Arrow direction="prev" />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: Math.min(3, slidesToShow), slidesToScroll: Math.min(2, slidesToScroll) } },
    { breakpoint: 768, settings: { slidesToShow: Math.min(2, slidesToShow), slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
});

export default function HomePage() {
  const galleryImages = useGalleryImages(12);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="h-20" />
      <section className="relative w-full flex justify-center">
        <div className="w-[90%] overflow-hidden rounded-2xl shadow-lg">
          <Slider {...carouselSettings({ slidesToShow: 1, slidesToScroll: 1, speed: 600 })}>
            <div
              className="h-[70vh] w-full bg-[url('/images/slider_1.jpg')] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold rounded-2xl"
              aria-label="Safe & Secure Homes"
            >
              Safe & Secure Homes
            </div>
            <div
              className="h-[70vh] w-full bg-[url('/images/slider_4.jpg')] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold rounded-2xl"
              aria-label="Invisible Grills for Modern Living"
            >
              Invisible Grills for Modern Living
            </div>
            <div
              className="h-[70vh] w-full bg-[url('/images/slider_3.jpg')] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold rounded-2xl"
              aria-label="Protect Your Family & Pets"
            >
              Protect Your Family & Pets
            </div>
          </Slider>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-10">Our Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsData.map((card, index) => (
            <SafetyCard key={index} {...card} />
          ))}
        </div>
      </section>

      <section className="py-14 bg-gray-100 dark:bg-gray-800 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
        <div className="relative w-full max-w-7xl mx-auto">
          <Slider {...carouselSettings({ slidesToShow: 4, slidesToScroll: 2, speed: 700 })}>
            {galleryImages.map((img) => (
              <div key={img.id} className="px-2">
                <div className="h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img.src}
                    alt={`Gallery ${img.id + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
            <p className="italic text-gray-700 dark:text-gray-200">
              "Servanisafety nets installed invisible grills at my home. They look amazing and provide complete safety."
            </p>
            <footer className="mt-4 font-semibold">– Ramesh Kumar</footer>
          </blockquote>
          <blockquote className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow">
            <p className="italic text-gray-700 dark:text-gray-200">
              "Excellent service and professional team. My balcony is now safe for my kids and pets."
            </p>
            <footer className="mt-4 font-semibold">– Priya Sharma</footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-gradient-to-br from-green-200 to-blue-300 dark:from-green-700 dark:to-blue-800 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Home?</h2>
        <a
          href="/contactUs"
          className="inline-block px-8 py-4 bg-white dark:bg-gray-900 text-green-700 dark:text-green-300 font-semibold rounded-full shadow-lg hover:scale-105 transition"
        >
          Contact Us Today
        </a>
      </section>

      <section className="py-16 bg-indigo-600 dark:bg-indigo-800 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto">
          At Servanisafety nets, our mission is to create safe, hygienic, and modern living spaces for families, children, and pets. With innovative safety solutions, we blend protection with elegance.
        </p>
      </section>
    </div>
  );
}
