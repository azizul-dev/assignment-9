"use client";

import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./NavLink";
import { Dancing_Script } from "next/font/google";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { AiOutlineLogout } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import { SiHomebridge } from "react-icons/si";
import { MdPets } from "react-icons/md";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  const desktopAuth = isPending ? (
    <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse" />
  ) : user ? (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-3 py-1.5">
     <Avatar>
          <Avatar.Image
            referrerPolicy="no-referrer"
            alt="John Doe"
            src={
              user?.image ||
              "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
            }
          />
          <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
      <span className="text-white/90 text-sm font-medium hidden lg:block">
        {user?.name}
      </span>
      <NavLink
        href="/dashboard"
        className="text-white/80 hover:text-teal-300 text-sm transition"
      >
        Dashboard
      </NavLink>
      <Button
        onClick={handleSignOut}
        size="sm"
        className="px-4 font-semibold text-white bg-red-500/30 border border-red-400/30 rounded-full"
      >
        <CiLogout />
        Logout
      </Button>
    </div>
  ) : (
    <Link href="/login">
      <Button className="px-6 font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full">
        Login
      </Button>
    </Link>
  );

  const mobileAuth = user ? (
    <div className="flex flex-col gap-3 pt-2 border-t border-white/10">
      <div className="flex items-center gap-3">
        <Avatar>
          <Avatar.Image
            referrerPolicy="no-referrer"
            alt="John Doe"
            src={
              user?.image ||
              "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
            }
          />
          <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
        </Avatar>
        <span className="text-white/90 text-sm font-medium">{user?.name}</span>
      </div>
      <NavLink
        href="/dashboard"
        className="text-white hover:text-teal-300 transition"
      >
        Dashboard
      </NavLink>
      <Button
        onClick={handleSignOut}
        className="w-full font-semibold text-white bg-red-500/30 border border-red-400/30 rounded-full"
      >
        <CiLogout />
        Logout
      </Button>
    </div>
  ) : (
    <Link href="/login">
      <Button className="w-full px-6 font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/20 rounded-full">
        Login
      </Button>
    </Link>
  );

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
            className="flex items-center gap-2 text-white hover:text-teal-300 transition"
          >
            <SiHomebridge className="text-lg" />
            <span>Home</span>
          </NavLink>
          <NavLink
            href="/pets"
            className="flex items-center gap-2 text-white hover:text-teal-300 transition"
          >
            <MdPets className=" text-lg" />
            All Pets
          </NavLink>
        </div>

        <div className="hidden md:flex items-center">{desktopAuth}</div>

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
            className="flex items-center gap-2 text-white hover:text-teal-300 transition"
          >
            <SiHomebridge className="text-lg" />
            <span>Home</span>
          </NavLink>
          <NavLink
            href="/pets"
            className="flex items-center gap-2 text-white hover:text-teal-300 transition"
          >
            <MdPets className=" text-lg" />
            All Pets
          </NavLink>
          {mobileAuth}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
