import React, { useState, useEffect } from "react";
import { CircleArrowLeft, CircleArrowRight, Link } from "lucide-react";
import { Link as LinkIcon } from "lucide-react";
import bloom from "../images/bloom.png";
import spark from "../images/spark.png";
import trade from "../images/trade.png";
import truthify from "../images/truthify.png";
import afreen from "../images/afreen.png";
import keeper from "../images/keeper.png";
import sool from "../images/sool.png";
import todo from "../images/todo.png";
import qr from "../images/qr.png";
import alertify from "../images/alertify.png";
import drums from '../images/drums.png'

const slides = [
  {
    image: truthify,
    heading: "Truthify",
    description: "A fake news prevention social media app",
    link: "https://github.com/niveditacs03/Truthify",
  },
  {
    image: spark,
    heading: "SPARK",
    description: "College workshop management website",
    link: "https://github.com/ScholasticSync",
  },
  {
    image: trade,
    heading: "Trading Simulator",
    description: "A trading simulator",
    link: "https://github.com/niveditacs03/trading-simulator",
  },
  {
    image: bloom,
    heading: "Bloom",
    description: "An online NFT flower shop",
    link: "https://flower-shop-internship.vercel.app/",
  },
  {
    image: afreen,
    heading: "Afreen's Academy",
    description: "Frontend of an internship work, I made the home page and the about me page.",
    link: "https://afreen-s-academy.vercel.app/",
  },
  {
    image: alertify,
    heading: "Alertify",
    description: "Women's safety app",
    link: "https://github.com/niveditacs03/Alertify",
  },
  {
    image: drums,
    heading: "Virtual Beats",
    description: "An online set of drums",
    link: "https://virtual-beats.vercel.app/",
  },
  {
    image: keeper,
    heading: "Keeper app",
    description: "A note keeping app",
    link: "https://notebook-app-smoky.vercel.app/",
  },
  {
    image: sool,
    heading: "Smart contract",
    description:
      "Optimised a banking smart contract to make it  20% more optimal",
    link: "https://github.com/niveditacs03/SmartContract",
  },
  {
    image: todo,
    heading: "To do list",
    description: "A simple to do list",
    link: "https://to-do-list-six-virid-65.vercel.app/",
  },
  {
    image: qr,
    heading: "QR code generator",
    description: "A site that converts anything into a QR code!",
    link: "https://qr-code-generator-azure-mu.vercel.app/",
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
    <div className="bg-white p-6 rounded-xl shadow w-[1000px] border mt-10 relative overflow-hidden ml-50 cursor-pointer">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`transition-opacity duration-500 ease-in-out ${
            i === index ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          <a href={slide.link} target="_blank" rel="noopener noreferrer">
            <img
              src={slide.image}
              alt={slide.heading}
              className={`rounded-lg w-full h-115 ${
                slide.heading === "Alertify" ? "object-contain" : "object-cover"
              } cursor-pointer bg-white`}
            />
          </a>

          <div className="flex flex-row items-center gap-2 mt-4">
            <h2 className="text-2xl font-bold">{slide.heading}</h2>
            {slide.link && (
              <a
                href={slide.link}
                target="_blank"
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
