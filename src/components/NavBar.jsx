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
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-6 py-4 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className=" flex items-center gap-2">
          {/* Logo */}
          <div
            className="relative w-[60px] h-[60px] rounded-full 
bg-white/10 backdrop-blur-lg border border-white/20
flex items-center justify-center"
          >
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
            className={`${dancing.className} text-4xl text-white/90`}
          >
            FurEver
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-2">
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
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/login">
            <Button
              className="px-6 font-semibold text-white 
  bg-white/10 backdrop-blur-lg 
  border border-white/20 rounded-full"
            >
              Login
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-4 px-4 pb-4">
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
            <Button
              className="px-6 font-semibold text-white 
  bg-white/10 backdrop-blur-lg 
  border border-white/20 rounded-full"
            >
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
