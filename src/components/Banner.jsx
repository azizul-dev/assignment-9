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
    image: "/images/3.png",
    title: "A New Member Awaits",
    subtitle: "Make your family complete with a furry companion full of love.",
    button: "View All Pets",
    link: "/pets",
  },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);

  // অটো স্লাইড
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{
            opacity: index === current ? 1 : 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.45)" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <div
          className="relative w-[100px] h-[100px] rounded-full 
       bg-white/10 backdrop-blur-lg border border-white/20
       flex items-center justify-center"
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={90}
            height={90}
            className="rounded-full object-cover"
          />
        </div>
        {/* Title */}
        <h1
          key={current + "title"}
          className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          {slides[current].title}
        </h1>

        {/* Subtitle */}
        <p
          key={current + "sub"}
          className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200"
        >
          {slides[current].subtitle}
        </p>

        {/* Button */}
        <Link href={slides[current].link}>
          <Button
            size="lg"
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
              padding: "0 2.5rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              height: "3rem",
              borderRadius: "999px",
            }}
          >
            {slides[current].button}
          </Button>
        </Link>

        {/* Dots */}
        <div className="flex gap-3 mt-10">
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
                transform: index === current ? "scale(1.3)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition"
        style={{ background: "rgba(255,255,255,0.15)" }}
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white text-2xl transition"
        style={{ background: "rgba(255,255,255,0.15)" }}
      >
        ›
      </button>
    </section>
  );
};

export default Banner;
