"use client";

import Link from "next/link";

export default function EyeButton({ href }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-xl flex items-center justify-center relative overflow-hidden group"
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
      
        <div
          className="
            absolute
            w-5
            h-[2px]
            bg-white
            rounded-full
            transition-all
            duration-700
            ease-in-out
            group-hover:opacity-0
            group-hover:scale-0
          "
        ></div>

      
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="
            absolute
            scale-0
            opacity-0
            transition-all
            duration-700
            ease-in-out
            group-hover:scale-100
            group-hover:opacity-100
          "
        >
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      
      <div
        className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition duration-700
        "
        style={{
          background:
            "radial-gradient(circle, rgba(168,230,207,0.18) 0%, transparent 70%)",
        }}
      ></div>

     
      <div
        className="
          absolute inset-0 rounded-xl
          opacity-0
          group-hover:opacity-100
          transition duration-700
          pointer-events-none
        "
        style={{
          border: "1px solid rgba(168,230,207,0.4)",
          boxShadow: "0 0 18px rgba(168,230,207,0.25)",
        }}
      ></div>
    </Link>
  );
}