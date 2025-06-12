import React, { useState, useEffect } from "react";
import { CircleArrowLeft, CircleArrowRight, Link } from "lucide-react";
import { Link as LinkIcon } from "lucide-react";

const slides = [
  {
    image: "https://source.unsplash.com/random/800x400?1",
    heading: "Truthify",
    description: "A fake news prevention social media app",
    link: "https://github.com/niveditacs03/TextExtractor",
  },
  {
    image: "https://source.unsplash.com/random/800x400?2",
    heading: "SPARK",
    description: "College workshop management website",
    link: "https://github.com/niveditacs03/TextExtractor",
  },
  {
    image: "https://source.unsplash.com/random/800x400?3",
    heading: "Trading Simulator",
    description: "A trading simulator",
    link: "https://github.com/niveditacs03/TextExtractor",
  },
  {
    image: "https://source.unsplash.com/random/800x400?4",
    heading: "Alertify",
    description: "Women's safety app",
    link: "https://github.com/niveditacs03/TextExtractor",
  },
  {
    image: "https://source.unsplash.com/random/800x400?5",
    heading: "Bloom",
    description: "An online NFT flower shop",
    link: "https://github.com/niveditacs03/TextExtractor",
  },
  {
    image: "https://source.unsplash.com/random/800x400?6",
    heading: "Textractor",
    description: "Text extraction from images",
    link: "https://github.com/niveditacs03/TextExtractor",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((index + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="bg-white p-6 rounded-xl shadow w-[1000px] border mt-10 relative overflow-hidden ml-50">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`transition-opacity duration-500 ease-in-out ${
            i === index ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="rounded-lg w-full h-100 object-cover"
          />
          <div className="flex flex-row items-center gap-2 mt-4">
            <h2 className="text-2xl font-bold">{slide.heading}</h2>
            {slide.link && (
              <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black cursor-pointer"
              >
                <LinkIcon className="w-5 h-5" />
              </a>
            )}
          </div>

          <p className="text-gray-600">{slide.description}</p>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
      >
        <CircleArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
      >
        <CircleArrowRight />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
