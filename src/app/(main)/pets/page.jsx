"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaHeart,
  FaSearch,
} from "react-icons/fa";
import { MdVaccines } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import EyeButton from "@/components/EyeButton";

const AllPets = () => {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const fetchPets = async () => {
      const res = await fetch("http://localhost:8000/pet");
      const data = await res.json();
      setPets(data);
    };

    fetchPets();
  }, []);

  const filteredPets = pets.filter((pet) => {
    const matchesSearch = pet.petName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" ||
      pet.species.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  });

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
      <div className="fixed inset-0 bg-black/65 -z-10"></div>

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/10 blur-3xl rounded-full"></div>

      <div className="text-center mb-12">
        <p className="uppercase tracking-[6px] text-[#A8E6CF] text-xs mb-3">
          Pet Adoption Platform
        </p>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
          All Pets
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto text-sm">
          Explore adorable pets looking for a loving and caring home.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
     
        <div
          className="w-full md:w-[400px] h-14 rounded-2xl flex items-center px-4"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <FaSearch className="text-white/50 mr-3" />

          <input
            type="text"
            placeholder="Search pets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none w-full text-white placeholder:text-white/40"
          />
        </div>

       
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full md:w-[220px] h-14 rounded-2xl px-4 text-white outline-none"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
          }}
        >
          <option value="all" className="bg-black">
            All Categories
          </option>

          <option value="dog" className="bg-black">
            Dog
          </option>

          <option value="cat" className="bg-black">
            Cat
          </option>

          <option value="bird" className="bg-black">
            Bird
          </option>

          <option value="rabbit" className="bg-black">
            Rabbit
          </option>
        </select>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredPets.map((pet) => (
          <div
            key={pet._id}
            className="group relative rounded-[28px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 10px 35px rgba(0,0,0,0.22)",
            }}
          >
            <div className="relative h-[400px] overflow-hidden">
              <Image
                src={pet.imageUrl}
                alt={pet.petName}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover object-top transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            
              <div
                className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-[11px] font-bold"
                style={{
                  background: "rgba(255,255,255,0.14)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {pet.species}
              </div>

           
              <div
                className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-[11px] font-bold"
                style={{
                  background:
                    pet.gender === "Male"
                      ? "rgba(74,144,164,0.85)"
                      : "rgba(200,75,158,0.85)",
                }}
              >
                {pet.gender}
              </div>

             
              <button
                className="absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white transition hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <FaHeart size={14} />
              </button>

            
              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-black text-white mb-1">
                  {pet.petName}
                </h2>

                <p className="text-white/70 text-xs">
                  {pet.breed || "Mixed Breed"}
                </p>
              </div>
            </div>

           
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-white/50 text-[11px] mb-1">
                    Adoption Fee
                  </p>

                  <h3 className="text-xl font-bold text-[#A8E6CF]">
                    ৳ {pet.adoptionFee}
                  </h3>
                </div>

                <div
                  className="px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                  style={{
                    background: "rgba(34,197,94,0.2)",
                    border: "1px solid rgba(34,197,94,0.3)",
                  }}
                >
                  Available
                </div>
              </div>

           
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div
                  className="rounded-2xl p-3"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[#A8E6CF] mb-1 text-xs">
                    <FaMapMarkerAlt />
                    Location
                  </div>

                  <p className="text-white text-xs font-medium line-clamp-1">
                    {pet.location}
                  </p>
                </div>

                <div
                  className="rounded-2xl p-3"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[#A8E6CF] mb-1 text-xs">
                    <GiHealthNormal />
                    Health
                  </div>

                  <p className="text-white text-xs font-medium">
                    {pet.healthStatus}
                  </p>
                </div>

                <div
                  className="rounded-2xl p-3 col-span-2"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 text-[#A8E6CF] mb-1 text-xs">
                    <MdVaccines />
                    Vaccination
                  </div>

                  <p className="text-white text-xs font-medium">
                    {pet.vaccinationStatus || "Not Specified"}
                  </p>
                </div>
              </div>

            
              <p className="text-white/60 text-xs leading-6 mb-4 line-clamp-2 min-h-[48px]">
                {pet.description}
              </p>

            
              <div className="flex items-center gap-2">
                <Link
                  href={`/pets/${pet._id}`}
                  className="flex-1 h-10 px-3 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 transition duration-300 hover:scale-[1.02]"
                  style={{
                    background: "linear-gradient(90deg,#4A90A4,#A8E6CF)",
                  }}
                >
                  Adopt Now
                  <FaArrowRight size={12} />
                </Link>

                <div
                  className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <EyeButton href={`/pets/${pet._id}`} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    
      {filteredPets.length === 0 && (
        <div className="text-center mt-20">
          <h2 className="text-3xl font-black text-white mb-3">
            No Pets Found
          </h2>

          <p className="text-white/60">
            Try searching with another name or category.
          </p>
        </div>
      )}
    </div>
  );
};

export default AllPets;