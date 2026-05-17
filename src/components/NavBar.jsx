"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const gradientStyle = {
    background: "linear-gradient(135deg, #4A90A4, #5BB8D4, #A8E6CF)",
    color: "white",
    border: "none",
  };

  return (
    <nav className="shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className=" flex items-center gap-2">
          {/* Logo */}
          <div className="relative w-[60px] h-[60px] rounded-full bg-[linear-gradient(135deg,#4A90A4,#5BB8D4,#A8E6CF)] flex items-center justify-center">
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
            className="text-2xl font-bold bg-[linear-gradient(135deg,#4A90A4,#5BB8D4,#A8E6CF)] bg-clip-text text-transparent"
          >
            FurEver
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-2">
          <NavLink href="/" className="hover:text-teal-500 transition">
            Home
          </NavLink>
          <NavLink href="/pets" className="hover:text-teal-500 transition">
            All Pets
          </NavLink>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/login">
            <Button style={gradientStyle} className="px-6 font-semibold">
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
          <NavLink href="/" className="hover:text-teal-500">
            Home
          </NavLink>
          <NavLink href="/pets" className="hover:text-teal-500">
            All Pets
          </NavLink>
          <Link href="/login">
            <Button
              style={{ ...gradientStyle, width: "100%" }}
              className="font-semibold"
            >
              Login
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
