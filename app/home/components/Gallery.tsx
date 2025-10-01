"use client";

import Image from "next/image";
import Slider from "react-slick";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 2,
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
              <div className="h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
