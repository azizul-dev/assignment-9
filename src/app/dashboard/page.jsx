// src/app/dashboard/page.jsx
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-white">
        Welcome to Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/dashboard/my-requests"
          className="p-6 rounded-xl transition hover:scale-105"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(1px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div className="text-3xl mb-3">🐾</div>
          <h2 className="text-xl font-semibold text-white">My Requests</h2>
          <p className="text-white/70 mt-2">View all your adoption requests</p>
        </Link>

        <Link
          href="/dashboard/add-pet"
          className="p-6 rounded-xl transition hover:scale-105"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(1px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div className="text-3xl mb-3">➕</div>
          <h2 className="text-xl font-semibold text-white">Add Pet</h2>
          <p className="text-white/70 mt-2">List a new pet for adoption</p>
        </Link>

        <Link
          href="/dashboard/my-listings"
          className="p-6 rounded-xl transition hover:scale-105"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(1px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div className="text-3xl mb-3">📋</div>
          <h2 className="text-xl font-semibold text-white">My Listings</h2>
          <p className="text-white/70 mt-2">Manage your pet listings</p>
        </Link>
      </div>
    </div>
  );
}
