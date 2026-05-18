"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

const slides = [
  {
    image: "/images/1.png",
    title: "Find Your Forever Friend",
    subtitle:
      "Thousands of cats are waiting for a loving home. Give them a chance.",
    button: "Adopt Now",
    link: "/pets",
  },
  {
    image: "/images/2.png",
    title: "Give Love, Get Love",
    subtitle:
      "Every pet deserves a second chance at happiness with a caring family.",
    button: "Browse Pets",
    link: "/pets",
  },
  {
    image: "/images/4.png",
    title: "A New Member Awaits",
    subtitle:
      "Make your family complete with a furry companion full of love.",
    button: "View All Pets",
    link: "/pets",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
    
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: index === current ? 1 : 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",

            backgroundPosition: "center center",
          }}
        />
      ))}

     
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,0,0,0.45)",
        }}
      />

     
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center text-white px-4 md:px-6 pt-20 md:pt-0">
   

       
        <div className="relative w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center">
      
          <Image
            src="/images/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>

     
        <h1
          key={current + "title"}
          className="text-3xl sm:text-4xl md:text-7xl font-bold mb-4 max-w-xs sm:max-w-lg md:max-w-full"
        >
          {slides[current].title}
        </h1>

      
        <p
          key={current + "sub"}
          className="text-sm sm:text-base md:text-xl max-w-xs sm:max-w-md md:max-w-2xl px-2 mb-8 text-gray-200"
        >
          {slides[current].subtitle}
        </p>

    
        <Link href={slides[current].link}>
          <Button
            size="lg"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "0 1.5rem",
              fontSize: "1rem",
              fontWeight: "600",
              height: "2.8rem",
              borderRadius: "999px",
            }}
          >
            {slides[current].button}
          </Button>
        </Link>

   
        <div className="flex gap-2 md:gap-3 mt-6 md:mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                background:
                  index === current
                    ? "linear-gradient(135deg, #4A90A4, #A8E6CF)"
                    : "rgba(255,255,255,0.5)",
                transform:
                  index === current ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>

   
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center text-white text-2xl cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.15)",
        }}
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center text-white text-2xln cursor-pointer"
        style={{
          background: "rgba(255,255,255,0.15)",
        }}
      >
        ›
      </button>
    </section>
  );
};

export default Banner;