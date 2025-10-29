import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`border-4 border-black bg-white transition-all duration-300 ${
        isHovered ? "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid md:grid-cols-12">
        {/* Swiper zamiast jednego zdjęcia */}
        <div
          className={`md:col-span-5 ${
            index % 2 === 0 ? "md:order-1" : "md:order-2"
          } relative overflow-hidden`}
        >
          <div className="aspect-[4/3] md:aspect-auto md:h-full relative">
            <Swiper
              pagination={{ clickable: true }}
              navigation
              modules={[Pagination, Navigation]}
              className="h-full "
              style={{
            '--swiper-navigation-color': '#fde047',
            '--swiper-pagination-color': '#fde047',
        }}
            >
              {project.images?.map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`${project.title} ${i + 1}`}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute top-4 left-4 bg-yellow-300 border-2 border-black px-3 py-1 font-mono font-bold text-sm z-10">
              {project.year}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div
          className={`md:col-span-7 ${
            index % 2 === 0 ? "md:order-2" : "md:order-1"
          } p-6 md:p-8 flex flex-col justify-center`}
        >
          <div className="mb-4">
            <span className="font-mono text-sm font-bold">
              [{String(index + 1).padStart(2, "0")}]
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 leading-tight">
            {project.title}
          </h3>

          <p className="text-base md:text-lg mb-6 leading-relaxed text-gray-700">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="border-2 border-black px-3 py-1 text-sm font-mono font-bold bg-gray-100"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-4 border-black bg-yellow-300 px-6 py-3 font-mono font-bold uppercase hover:bg-black hover:text-yellow-300 transition-all duration-300 w-fit group"
            >
              Zobacz projekt
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          ) : (
            <p
              className="inline-flex items-center gap-2 border-4 border-black bg-gray-300 px-6 py-3 font-mono font-bold uppercase hover:bg-black hover:text-gray-300 transition-all duration-300 w-fit group"
            >
              Projekt niedostępny
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
