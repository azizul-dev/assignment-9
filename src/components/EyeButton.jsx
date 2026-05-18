"use client";

import Link from "next/link";

export default function EyeButton({ href }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-lg flex items-center justify-center group/eye relative overflow-hidden"
      style={{ background: "rgba(255,255,255,0.15)" }}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        
     
        <div
          className="absolute w-5 h-[2px] bg-white rounded-full transition-all duration-700 group-hover/eye:translate-y-[-8px]"
        />
 
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute scale-0 opacity-0 transition-all duration-700 ease-in-out group-hover/eye:scale-100 group-hover/eye:opacity-100"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      
      <div
        className="absolute inset-0 opacity-0 group-hover/eye:opacity-100 transition duration-700"
        style={{
          background:
            "radial-gradient(circle at center, rgba(168,230,207,0.3), transparent 70%)",
        }}
      />

       
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover/eye:opacity-100 transition duration-700"
        style={{
          border: "1px solid rgba(168,230,207,0.7)",
          boxShadow: "0 0 18px rgba(168,230,207,0.5)",
        }}
      />
    </Link>
  );
}