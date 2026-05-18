// src/app/dashboard/layout.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard/my-requests", label: "🐾 My Requests" },
    { href: "/dashboard/add-pet", label: "➕ Add Pet" },
    { href: "/dashboard/my-listings", label: "📋 My Listings" },
  ];

  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundImage: "url('/images/1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Sidebar */}
      <aside
        className="w-64 p-6 flex flex-col gap-3"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(1px)",
          borderRight: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {/* Logo */}
        <Link href={'/'}><div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={35}
              height={35}
              className="rounded-full object-cover"
            />
          </div>
          <span className={`${dancing.className} text-2xl text-white`}>
            FurEver
          </span>
        </div></Link>

        <h2 className="text-white/70 text-xs uppercase tracking-widest mb-2">
          Menu
        </h2>

        {/* Nav Links */}
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-3 rounded-lg text-white transition"
            style={{
              background:
                pathname === link.href
                  ? "rgba(255,255,255,0.25)"
                  : "rgba(255,255,255,0.08)",
            }}
          >
            {link.label}
          </Link>
        ))}

        {/* Divider */}
        <div className="border-t border-white/20 my-4" />

        {/* Home বাটন */}
        <Link
          href="/"
          className="px-4 py-3 rounded-lg text-white transition flex items-center gap-2"
          style={{ background: "rgba(255,255,255,0.08)" }}
        >
          🏠 Back to Home
        </Link>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-white/30">{children}</main>
    </div>
  );
}
