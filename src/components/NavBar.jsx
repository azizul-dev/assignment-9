"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-3 md:px-6 py-3 md:py-4 border-b border-white/10">
   

      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
     
        <div className="flex items-center gap-2">
          
     
          <div className="relative w-[45px] h-[45px] md:w-[60px] md:h-[60px] rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center">
            
         
            <Image
              src="/images/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="rounded-full object-cover"
            />
          </div>

         
          <Link
            href="/"
            className={`${dancing.className} hidden md:block text-4xl text-white/90`}
          >
            FurEver
          </Link>
        </div>

      
        <div className="hidden md:flex gap-3 items-center">
          <NavLink
            href="/"
            className="text-white hover:text-teal-300 transition"
          >
            Home
          </NavLink>

          <NavLink
            href="/pets"
            className="text-white hover:text-teal-300 transition"
          >
            All Pets
          </NavLink>
        </div>

      
        <div className="hidden md:flex items-center">
          <Link href="/login">
          
            <Button className="px-6 font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full">
              Login
            </Button>
          </Link>
        </div>

      
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-white"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

     
      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-4 px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20">
          
          <NavLink
            href="/"
            className="text-white hover:text-teal-300 transition"
          >
            Home
          </NavLink>

          <NavLink
            href="/pets"
            className="text-white hover:text-teal-300 transition"
          >
            All Pets
          </NavLink>

          <Link href="/login">
      
            <Button className="w-full px-6 font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full">
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}