"use client";

import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface GalleryProps {
  images: string[];
}

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Next Slide"
    className="absolute top-1/2 right-[-20] z-20 -translate-y-1/2 bg-white bg-opacity-60 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
  >
    <FaChevronRight className="w-6 h-6" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Previous Slide"
    className="absolute top-1/2 left-[-20] z-20 -translate-y-1/2 bg-white bg-opacity-60 text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
  >
    <FaChevronLeft className="w-6 h-6" />
  </button>
);

export default function Gallery({ images }: GalleryProps) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <section className="py-14 bg-gray-100 dark:bg-gray-800 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
      <div className="relative w-full max-w-7xl mx-auto">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i} className="px-2">
              <div className="relative h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={i < 4}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
