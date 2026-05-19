import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-white">
        Welcome to Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full p-4">
        <Link
          href="/dashboard/my-requests"
          className="p-5 md:p-6 rounded-xl transition-all duration-300 hover:scale-105"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(1px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-white text-xl">{/* icon */}</span>

              <h2 className="text-lg md:text-xl font-semibold text-white">
                My Requests
              </h2>
            </div>

            <p className="text-white/70 mt-2 text-sm md:text-base">
              View all your adoption requests
            </p>
          </div>
        </Link>

        <Link
          href="/dashboard/add-pet"
          className="p-5 md:p-6 rounded-xl transition-all duration-300 hover:scale-105"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(1px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
        <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-white text-xl">{/* icon */}</span>

              <h2 className="text-lg md:text-xl font-semibold text-white">
                My Listings
              </h2>
            </div>

            <p className="text-white/70 mt-2 text-sm md:text-base">
             List a new pet for adoption
            </p>
          </div>
        </Link>

        <Link
          href="/dashboard/my-listings"
          className="p-5 md:p-6 rounded-xl transition-all duration-300 hover:scale-105"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(1px)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-white text-xl">{/* icon */}</span>

              <h2 className="text-lg md:text-xl font-semibold text-white">
                My Listings
              </h2>
            </div>

            <p className="text-white/70 mt-2 text-sm md:text-base">
              Manage your pet listings
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
