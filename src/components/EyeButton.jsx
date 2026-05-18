"use client";
import Link from "next/link";

export default function EyeButton({ href }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-lg flex items-center justify-center group/eye relative overflow-hidden"
      style={{ background: "rgba(255,255,255,0.15)" }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        className="relative z-10 transition-all duration-300 group-hover/eye:stroke-[#A8E6CF]"
        style={{
          filter: "drop-shadow(0 0 0px transparent)",
        }}
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>

      {/* Scan Line */}
      <div
        className="scan-line absolute left-0 w-full h-[2px] opacity-0 group-hover/eye:opacity-100 rounded-full z-20"
        style={{
          background: "linear-gradient(90deg, transparent, #A8E6CF, transparent)",
        }}
      />
    </Link>
  );
}