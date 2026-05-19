"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const AdoptionStatusButton = ({ request, petId }) => {
  if (!request) {
    return (
      <Link
        href={`/pets/${petId}`}
        className="flex-1 h-10 px-3 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 transition duration-300 hover:scale-[1.02] whitespace-nowrap"
        style={{
          background: "linear-gradient(90deg,#4A90A4,#A8E6CF)",
        }}
      >
        Adopt Now
        <FaArrowRight size={12} />
      </Link>
    );
  }

  if (request.status === "pending") {
    return (
      <button
        disabled
        className="flex-1 h-10 px-3 rounded-xl bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-sm font-bold"
      >
        Pending
      </button>
    );
  }

  if (request.status === "approved") {
    return (
      <button
        disabled
        className="flex-1 h-10 px-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-bold"
      >
        Approved
      </button>
    );
  }

  if (request.status === "rejected") {
    return (
      <button
        disabled
        className="flex-1 h-10 px-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-bold"
      >
        Rejected
      </button>
    );
  }

  return null;
};

export default AdoptionStatusButton;