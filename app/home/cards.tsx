"use client";

import { BookOpen, Phone } from "lucide-react";

interface SafetyCardProps {
  image: string;
  title: string;
  description: string;
  readMoreLink?: string;
  callNumber?: string;
}

export default function SafetyCard({
  image,
  title,
  description,
  readMoreLink = "#",
  callNumber = "",
}: SafetyCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-900  rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      {/* Image Section */}
      <div className="relative h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col justify-between h-60">
        {/* Title & Description */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {description}
          </p>
        </div>

        {/* Futuristic Buttons */}
        <div className="mt-4 flex gap-3">
          {/* Read More */}
          <a
            href={readMoreLink}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-md hover:shadow-blue-500/50 hover:scale-105 transition"
          >
            <BookOpen className="size-4" />
            Read More
          </a>

          {/* Call Now */}
          <a
            href={callNumber ? `tel:${callNumber}` : "#"}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-medium shadow-md hover:shadow-green-500/50 hover:scale-105 transition"
          >
            <Phone className="size-4" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
