import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

import { FaMapMarkerAlt, FaHeart, FaArrowRight } from "react-icons/fa";

import { MdVaccines } from "react-icons/md";

import { GiHealthNormal } from "react-icons/gi";

import EyeButton from "./EyeButton";

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`, {
    cache: "no-store",
  });

  const featuredPet = await res.json();

  return (
    <div
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/images/4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      
      <div className="absolute inset-0 bg-[#140d08]/85"></div>

    
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full"></div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
     
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-14">
          <div>
            <p className="uppercase tracking-[6px] text-[#A8E6CF] text-xs mb-4">
              Find Your Best Friend
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
              Featured Pets
            </h2>

            <p className="text-white/60 max-w-xl text-sm md:text-base leading-7">
              Discover loving pets waiting for a forever home. Give them love,
              care, and a beautiful life.
            </p>
          </div>

          <Link href="/pets">
            <Button className="h-14 px-8 rounded-2xl text-white font-semibold bg-gradient-to-r from-lime-700 to-lime-500 hover:scale-105 transition-all duration-300">
              View All Pets
            </Button>
          </Link>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredPet.map((pet) => (
            <div
              key={pet._id}
              className="group rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.30)",
              }}
            >
             
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={pet.imageUrl}
                  alt={pet.petName}
                  fill
                  className="object-cover object-center transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

            
                <div
                  className="absolute top-4 left-4 px-4 py-1 rounded-full text-white text-xs font-bold"
                  style={{
                    background: "rgba(255,255,255,0.20)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {pet.species}
                </div>

          
                <div
                  className="absolute top-4 right-4 px-4 py-1 rounded-full text-white text-xs font-bold"
                  style={{
                    background: pet.gender === "Male" ? "#4DA8DA" : "#D65DB1",
                  }}
                >
                  {pet.gender}
                </div>

            
                <button
                  className="absolute bottom-5 right-5 w-12 h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <FaHeart />
                </button>

              
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-4xl font-black text-white mb-2">
                    {pet.petName}
                  </h2>

                  <p className="text-white/70 text-sm">
                    {pet.breed || "Mixed Breed"}
                  </p>
                </div>
              </div>

            
              <div className="p-5">
            
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-white/40 text-xs mb-1">Adoption Fee</p>

                    <h3 className="text-3xl font-black text-[#A8E6CF]">
                      ৳ {pet.adoptionFee}
                    </h3>
                  </div>

                  <div
                    className="px-5 py-2 rounded-full text-sm font-bold text-white"
                    style={{
                      background: "rgba(132,204,22,0.20)",
                      border: "1px solid rgba(132,204,22,0.30)",
                    }}
                  >
                    Available
                  </div>
                </div>

               
                <div className="grid grid-cols-2 gap-4 mb-5">
                
                  <div
                    className="rounded-3xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-2 text-[#A8E6CF] mb-2 text-xs">
                      <FaMapMarkerAlt />
                      Location
                    </div>

                    <p className="text-white text-sm font-medium line-clamp-1">
                      {pet.location}
                    </p>
                  </div>

                
                  <div
                    className="rounded-3xl p-4"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-2 text-[#A8E6CF] mb-2 text-xs">
                      <GiHealthNormal />
                      Health
                    </div>

                    <p className="text-white text-sm font-medium">
                      {pet.healthStatus}
                    </p>
                  </div>

                
                  <div
                    className="rounded-3xl p-4 col-span-2"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="flex items-center gap-2 text-[#A8E6CF] mb-2 text-xs">
                      <MdVaccines />
                      Vaccination
                    </div>

                    <p className="text-white text-sm font-medium">
                      {pet.vaccinationStatus || "Up to date"}
                    </p>
                  </div>
                </div>

             
                <p className="text-white/60 text-sm leading-7 mb-6 line-clamp-2 min-h-[56px]">
                  {pet.description}
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <EyeButton href={`/pets/${pet._id}`} />
                  </div>

                
                  <Link href={`/pets/${pet._id}`} className="flex-1">
                    <button
                      className="w-full h-14 rounded-2xl text-white font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300"
                      style={{
                        background: "linear-gradient(90deg,#4d7c0f,#65a30d)",
                      }}
                    >
                      View Details
                      <FaArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
