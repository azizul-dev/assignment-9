"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`
    px-5 py-2
    ${
      isActive
        ? "font-semibold text-white bg-white/10 backdrop-blur-lg border border-white/30 rounded-full shadow-md"
        : "text-white"
    }
  `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
