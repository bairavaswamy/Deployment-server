"use client";

import Slider from "react-slick";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

type SlideData = {
  bg: string;
  title: string;
  subtitle: string;
};

interface HeroSliderProps {
  slides: SlideData[];
}

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

const HeroSlide = ({
  bg,
  title,
  subtitle,
  isFirst,
}: SlideData & { isFirst: boolean }) => (
  <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden flex items-center justify-center text-white text-center px-6">
    <Image
      src={bg}
      alt={title}
      fill
      style={{ objectFit: "cover", objectPosition: "center" }}
      loading={isFirst ? "eager" : "lazy"}
      priority={isFirst}
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 bg-black/30">
      <h2 className="text-4xl font-bold drop-shadow">{title}</h2>
      <p className="mt-3 max-w-xl">{subtitle}</p>
      <CTAButton href="tel:+917995792953" text="Call Now" />
    </div>
  </div>
);

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
        <Slider {...settings}>
          {slides.map((slide, i) => (
            <HeroSlide key={i} {...slide} isFirst={i === 0} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
