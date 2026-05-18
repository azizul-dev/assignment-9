import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrView } from "react-icons/gr";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import EyeButton from "@/components/EyeButton";

const AllPets = async () => {
  const res = await fetch("http://localhost:8000/pet");
  const pets = await res.json();

  return (
    <div
      className="min-h-screen px-4 md:px-10 py-10 pt-24"
      style={{
        backgroundImage: "url('/images/4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div
        className="fixed inset-0 -z-10"
        style={{ background: "rgba(0,0,0,0.55)" }}
      />

      {/* Title */}
      <h1 className="text-4xl font-bold text-white text-center mb-2">
        All Pets
      </h1>
      <p className="text-white/60 text-center mb-10">
        Find your perfect furry companion
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="rounded-2xl overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl group relative
    flex flex-row md:flex-col"
            style={{
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            {/* Border Animation */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, #4A90A4, #A8E6CF, #4A90A4)",
                padding: "1px",
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />

            {/* Pet Image — মোবাইলে বামে, desktop এ উপরে */}
            <div className="relative w-32 h-full min-h-[160px] md:w-full md:h-52 shrink-0">
              <Image
                src={pet.imageUrl}
                alt={pet.petName}
                fill
                className="object-cover"
              />
              {/* Species Badge */}
              <span
                className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full text-white font-semibold"
                style={{ background: "rgba(0,0,0,0.5)" }}
              >
                {pet.species}
              </span>
              {/* Gender Badge */}
              <span
                className="absolute top-2 left-2 text-xs px-2 py-1 rounded-full text-white font-semibold"
                style={{
                  background:
                    pet.gender === "Male"
                      ? "rgba(74,144,164,0.8)"
                      : "rgba(200,75,158,0.8)",
                }}
              >
                {pet.gender}
              </span>
              {/* Available Badge — মোবাইলে নিচে */}
              <span
                className="absolute bottom-2 left-2 md:left-auto md:right-2 text-xs px-2 py-1 rounded-full text-white font-semibold"
                style={{ background: "rgba(34,197,94,0.8)" }}
              >
                ✓
              </span>
            </div>

            {/* Pet Info — মোবাইলে ডানে, desktop এ নিচে */}
            <div className="p-3 md:p-4 flex flex-col justify-between flex-1">
              {/* Name + Price একলাইনে মোবাইলে */}
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h2 className="text-base md:text-xl font-bold text-white">
                    {pet.petName}
                  </h2>
                  <p className="text-white/50 text-xs">
                    {pet.species} • {pet.breed || "Mixed"}
                  </p>
                </div>
                <span className="text-white font-bold text-sm md:text-lg shrink-0 ml-2">
                  ৳{pet.adoptionFee}
                </span>
              </div>

              {/* Location + Age */}
              <div className="flex flex-col gap-0.5 mb-2">
                <p className="text-white/70 text-xs">📍 {pet.location}</p>
                <p className="text-white/70 text-xs">🎂 {pet.age} yrs</p>
                <p className="text-white/70 text-xs">
                  💉 {pet.vaccinationStatus || "Not specified"}
                </p>
              </div>

              {/* Requests count — desktop only */}
              <p className="text-white/50 text-xs mb-2 hidden md:block">
                0 requests
              </p>

              {/* Buttons */}
              <div className="flex gap-1.5">
                {/* Request */}
                <Link
                  href={`/pets/${pet._id}`}
                  className="flex-1 py-1.5 md:py-2 rounded-lg text-xs font-semibold text-white text-center transition hover:opacity-90 flex items-center justify-center"
                  style={{
                     background: "linear-gradient(90deg, transparent, #A8E6CF, transparent)",
                  }}
                >
                  Request
                </Link>

                {/* View */}
                <EyeButton href={`/pets/${pet._id}`} />

                {/* Edit */}
                <Link
                  href={`/pets/${pet._id}/edit`}
                  className="w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center text-white transition hover:opacity-90 shrink-0"
                  style={{ background: "rgba(74,144,164,0.5)" }}
                >
                  <CiEdit size={14} />
                </Link>

                {/* Delete */}
                <button
                  className="w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center text-white transition hover:opacity-90 shrink-0"
                  style={{ background: "rgba(239,68,68,0.5)" }}
                >
                  <RiDeleteBin3Fill size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPets;
