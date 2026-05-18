import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { FaMapMarkerAlt, FaArrowRight, FaHeart } from "react-icons/fa";
import { MdVaccines } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import EyeButton from "@/components/EyeButton";

const AllPets = async () => {
  const res = await fetch("http://localhost:8000/pet", {
    cache: "no-store",
  });

  const pets = await res.json();

  return (
    <div
      className="min-h-screen px-4 md:px-10 py-10 pt-28 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/65 -z-10"></div>

      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="text-center mb-14">
        <p className="uppercase tracking-[6px] text-[#A8E6CF] text-sm mb-3">
          Find Your Companion
        </p>

        <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
          Adopt a Lovely Pet
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
          Give these adorable animals a loving home and make your life happier
          with a loyal companion.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="group relative rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
            }}
          >
            {/* Hover Border */}
            {/* Hover Border */}
            <div
              className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
              style={{
                border: "1px solid transparent",
                background:
                  "linear-gradient(135deg, rgba(74,144,164,0.6), rgba(168,230,207,0.4), rgba(74,144,164,0.6)) border-box",
                WebkitMask:
                  "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            ></div>

            {/* Image */}
            <div className="relative h-[300px] overflow-hidden">
              <Image
                src={pet.imageUrl}
                alt={pet.petName}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Species */}
              <div
                className="absolute top-4 left-4 px-4 py-2 rounded-full text-white text-xs font-bold"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {pet.species}
              </div>

              {/* Gender */}
              <div
                className="absolute top-4 right-4 px-4 py-2 rounded-full text-white text-xs font-bold"
                style={{
                  background:
                    pet.gender === "Male"
                      ? "rgba(74,144,164,0.85)"
                      : "rgba(200,75,158,0.85)",
                }}
              >
                {pet.gender}
              </div>

              {/* Favorite */}
              <button
                className="absolute bottom-4 right-4 w-11 h-11 rounded-full flex items-center justify-center text-white transition hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <FaHeart />
              </button>

              {/* Bottom Content */}
              <div className="absolute bottom-5 left-5">
                <h2 className="text-3xl font-black text-white mb-1">
                  {pet.petName}
                </h2>

                <p className="text-white/70 text-sm">
                  {pet.breed || "Mixed Breed"}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Price + Status */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-white/50 text-xs mb-1">Adoption Fee</p>

                  <h3 className="text-2xl font-bold text-[#A8E6CF]">
                    ৳ {pet.adoptionFee}
                  </h3>
                </div>

                <div
                  className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                  style={{
                    background: "rgba(34,197,94,0.2)",
                    border: "1px solid rgba(34,197,94,0.3)",
                  }}
                >
                  Available
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div
                  className="rounded-2xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[#A8E6CF] mb-2 text-sm">
                    <FaMapMarkerAlt />
                    Location
                  </div>

                  <p className="text-white text-sm font-medium">
                    {pet.location}
                  </p>
                </div>

                <div
                  className="rounded-2xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[#A8E6CF] mb-2 text-sm">
                    <GiHealthNormal />
                    Health
                  </div>

                  <p className="text-white text-sm font-medium">
                    {pet.healthStatus}
                  </p>
                </div>

                <div
                  className="rounded-2xl p-4 col-span-2"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[#A8E6CF] mb-2 text-sm">
                    <MdVaccines />
                    Vaccination
                  </div>

                  <p className="text-white text-sm font-medium">
                    {pet.vaccinationStatus || "Not Specified"}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/60 text-sm leading-7 mb-7 line-clamp-3">
                {pet.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                {/* Adopt */}
                <Link
                  href={`/pets/${pet._id}`}
                  className="flex-1 py-3 rounded-2xl text-white font-bold flex items-center justify-center gap-2 transition duration-300 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(90deg,#4A90A4,#A8E6CF)",
                  }}
                >
                  Adopt Now
                  <FaArrowRight size={13} />
                </Link>

                {/* View */}
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <EyeButton href={`/pets/${pet._id}`} />
                </div>

                {/* Edit */}
                <Link
                  href={`/pets/${pet._id}/edit`}
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition duration-300 hover:scale-110"
                  style={{
                    background: "rgba(74,144,164,0.18)",
                    border: "1px solid rgba(74,144,164,0.25)",
                  }}
                >
                  <CiEdit size={20} />
                </Link>

                {/* Delete */}
                <button
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white transition duration-300 hover:scale-110"
                  style={{
                    background: "rgba(239,68,68,0.15)",
                    border: "1px solid rgba(239,68,68,0.2)",
                  }}
                >
                  <RiDeleteBin6Fill size={18} />
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
