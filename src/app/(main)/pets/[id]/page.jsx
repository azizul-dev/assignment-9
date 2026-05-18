import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaMapMarkerAlt,
  FaHeartbeat,
  FaArrowLeft,
} from "react-icons/fa";
import { MdVaccines } from "react-icons/md";
import { IoMaleFemale } from "react-icons/io5";

const PetDetailPage = async ({ params }) => {
  const { id }  = await params;

  // Fetch Single Pet
  const res = await fetch(`http://localhost:8000/pet/${id}`, {
    cache: "no-store",
  });

  const pet = await res.json();

  return (
    <div
      className="min-h-screen pt-28 pb-20 px-4 md:px-10 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      {/* Decorative Shapes */}
      <div className="absolute top-16 right-10 w-56 h-56 rounded-full border-[18px] border-[#8B5E3C]/20"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full border-[14px] border-[#A8E6CF]/20"></div>

      <div
        className="max-w-7xl mx-auto rounded-[30px] overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <div className="relative h-[400px] lg:h-auto min-h-[700px]">
            <Image
              src={pet.imageUrl}
              alt={pet.petName}
              fill
              className="object-cover"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Species */}
            <div
              className="absolute top-6 left-6 px-4 py-2 rounded-full text-white text-sm font-semibold"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
              }}
            >
              {pet.species}
            </div>

            {/* Gender */}
            <div
              className="absolute top-6 right-6 px-4 py-2 rounded-full text-white text-sm font-semibold"
              style={{
                background:
                  pet.gender === "Male"
                    ? "rgba(74,144,164,0.8)"
                    : "rgba(200,75,158,0.8)",
              }}
            >
              {pet.gender}
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-8 left-8">
              <p className="text-[#A8E6CF] uppercase tracking-[4px] text-sm mb-2">
                Forever Friend
              </p>

              <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-3">
                {pet.petName}
              </h1>

              <p className="text-white/80 text-lg">
                {pet.breed || "Mixed Breed"}
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="p-6 md:p-10 flex flex-col justify-between">
            <div>
              {/* Price */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-white/60 text-sm mb-2">
                    Ready for adoption
                  </p>

                  <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Meet {pet.petName}
                  </h2>
                </div>

                <div
                  className="px-5 py-4 rounded-2xl text-white font-bold text-xl"
                  style={{
                    background:
                      "linear-gradient(135deg,#4A90A4,#A8E6CF)",
                  }}
                >
                  ৳ {pet.adoptionFee}
                </div>
              </div>

              {/* INFO GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Location */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[#A8E6CF] mb-3">
                    <FaMapMarkerAlt />
                    <span className="text-sm uppercase tracking-wider">
                      Location
                    </span>
                  </div>

                  <p className="text-white text-lg font-semibold">
                    {pet.location}
                  </p>
                </div>

                {/* Age */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[#A8E6CF] mb-3">
                    <IoMaleFemale />
                    <span className="text-sm uppercase tracking-wider">
                      Age
                    </span>
                  </div>

                  <p className="text-white text-lg font-semibold">
                    {pet.age} Years Old
                  </p>
                </div>

                {/* Health */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[#A8E6CF] mb-3">
                    <FaHeartbeat />
                    <span className="text-sm uppercase tracking-wider">
                      Health
                    </span>
                  </div>

                  <p className="text-white text-lg font-semibold">
                    {pet.healthStatus || "Healthy"}
                  </p>
                </div>

                {/* Vaccination */}
                <div
                  className="rounded-2xl p-5"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[#A8E6CF] mb-3">
                    <MdVaccines />
                    <span className="text-sm uppercase tracking-wider">
                      Vaccine
                    </span>
                  </div>

                  <p className="text-white text-lg font-semibold">
                    {pet.vaccinationStatus || "Not Vaccinated"}
                  </p>
                </div>
              </div>

              {/* DESCRIPTION */}
              <div
                className="rounded-3xl p-6 mb-8"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  About {pet.petName}
                </h3>

                <p className="text-white/70 leading-8 whitespace-pre-line">
                  {pet.description}
                </p>
              </div>

              {/* Owner */}
              <div
                className="rounded-2xl p-5 mb-8"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p className="text-white/50 text-sm mb-2">
                  Pet Owner Contact
                </p>

                <p className="text-white font-medium break-all">
                  {pet.ownerEmail}
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col md:flex-row gap-4">
              {/* Adopt */}
              <button
                className="flex-1 py-4 rounded-2xl text-white text-lg font-bold transition duration-300 hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(90deg,#4A90A4,#A8E6CF)",
                }}
              >
                Adopt Now
              </button>

              {/* Back */}
              <Link
                href="/pets"
                className="flex items-center justify-center gap-2 flex-1 py-4 rounded-2xl text-white text-lg font-bold transition duration-300 hover:scale-[1.02]"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <FaArrowLeft />
                Back To Pets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetailPage;