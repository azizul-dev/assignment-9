"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const links = [
    { href: "/dashboard/my-requests", label: "🐾 My Requests" },
    { href: "/dashboard/add-pet", label: "➕ Add Pet" },
    { href: "/dashboard/my-listings", label: "📋 My Listings" },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/images/1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ── Mobile View ── */}
      <div className="md:hidden flex flex-col min-h-screen">
        {/* Mobile Top Bar */}
        <div
          className="flex items-center gap-3 px-4 py-3 sticky top-0 z-50"
          style={{ background: "rgba(0,0,0,0.3)" }}
        >
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white p-1"
          >
            {sidebarOpen ? <RiCloseLine size={26} /> : <RiMenuLine size={26} />}
          </button>
          <span className={`${dancing.className} text-2xl text-white`}>
            FurEver
          </span>
        </div>

        {/* Mobile Overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <aside
          className="fixed left-0 top-0 z-40 h-screen w-64 p-6 flex flex-col gap-3 transition-transform duration-300"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(1px)",
            borderRight: "1px solid rgba(255,255,255,0.2)",
            transform: sidebarOpen ? "translateX(0)" : "translateX(-100%)",
          }}
        >
          <Link
            href="/"
            className="flex items-center gap-2 mb-4 mt-10"
            onClick={() => setSidebarOpen(false)}
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Image src="/images/logo.png" alt="logo" width={35} height={35} className="rounded-full object-cover" />
            </div>
            <span className={`${dancing.className} text-2xl text-white`}>FurEver</span>
          </Link>

         <Link href={'/dashboard'}><h2 className="text-white/70 text-xs uppercase tracking-widest mb-2 cursor-pointer">Menu</h2></Link>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setSidebarOpen(false)}
              className="px-4 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105"
              style={{
                background: pathname === link.href ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)",
              }}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-white/20 my-4" />

          <Link
            href="/"
            onClick={() => setSidebarOpen(false)}
            className="px-4 py-3 rounded-lg text-white flex items-center gap-2"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            🏠 Back to Home
          </Link>
        </aside>

        {/* Mobile Main Content — একদম top bar এর নিচে, কোনো extra padding নেই */}
        <main className="flex-1 w-full">
          {children}
        </main>
      </div>

      {/* ── Desktop View ── */}
      <div className="hidden md:flex min-h-screen">
        {/* Desktop Sidebar */}
        <aside
          className="w-64 min-h-screen p-6 flex flex-col gap-3 sticky top-0 self-start"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(1px)",
            borderRight: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Image src="/images/logo.png" alt="logo" width={35} height={35} className="rounded-full object-cover" />
            </div>
            <span className={`${dancing.className} text-2xl text-white`}>FurEver</span>
          </Link>

         <Link href={'/dashboard'}><h2 className="text-white/70 text-xs uppercase tracking-widest mb-2 cursor-pointer">Menu</h2></Link>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 rounded-lg text-white transition-all duration-300 hover:scale-105"
              style={{
                background: pathname === link.href ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.08)",
              }}
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-white/20 my-4" />

          <Link
            href="/"
            className="px-4 py-3 rounded-lg text-white flex items-center gap-2 transition-all duration-300 hover:scale-105"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            🏠 Back to Home
          </Link>
        </aside>

        {/* Desktop Main Content */}
        <main className="flex-1 w-full pt-4 px-4">
          {children}
          </main>
      </div>
    </div>
  );
}