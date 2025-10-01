"use client";

import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

// ------------------- Types -------------------
type SlideData = {
  bg: string;
  title: string;
  subtitle: string;
};

interface HeroSliderProps {
  slides: SlideData[];
}

// ------------------- Components -------------------
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
    className={`absolute top-1/2 z-20 
      ${direction === "next" ? "right-6" : "left-6"} 
      -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 
      p-3 rounded-full shadow-lg hover:scale-110 transition`}
  >
    {direction === "next" ? (
      <FaChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
    ) : (
      <FaChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
    )}
  </button>
);

const CTAButton = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    className="mt-6 inline-block px-6 py-2 bg-yellow-500 rounded-full 
               text-black font-semibold hover:bg-yellow-600 transition"
  >
    {text}
  </Link>
);

const HeroSlide = ({ bg, title, subtitle }: SlideData) => (
  <div
    className="h-[70vh] w-full rounded-2xl flex flex-col items-center justify-center 
               text-white text-center px-6"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h2 className="text-4xl font-bold drop-shadow">{title}</h2>
    <p className="mt-3 max-w-xl">{subtitle}</p>
    <CTAButton href="tel:+917995792953" text="Call Now" />
  </div>
);

// ------------------- Main -------------------
export default function HeroSlider({ slides }: HeroSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  };

  return (
    <section className="relative w-full flex justify-center">
      <div className="w-[90%] overflow-hidden rounded-2xl shadow-lg relative">
        {/* 👆 relative makes arrows position correctly */}
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <HeroSlide key={i} {...slide} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
