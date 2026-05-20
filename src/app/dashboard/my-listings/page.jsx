export const dynamic = "force-dynamic";

import Image from "next/image";


import { FaMapMarkerAlt } from "react-icons/fa";
import { MdVaccines } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";


const MyListingPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch pets");
  }

  const pets = await res.json();

  const availablePets = pets.filter(
    (pet) => pet.status !== "adopted"
  );

  const adoptedPets = pets.filter(
    (pet) => pet.status === "adopted"
  );

  return (
    <div className="min-h-screen bg-[#0f172a] px-4 md:px-10 py-24">
    
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">
          My Listings
        </h1>

        <p className="text-gray-400 text-sm">
          Manage your pet listings easily
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
          <h2 className="text-3xl font-bold text-cyan-400">
            {pets.length}
          </h2>

          <p className="text-gray-300 text-sm mt-1">
            Total Listings
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
          <h2 className="text-3xl font-bold text-green-400">
            {availablePets.length}
          </h2>

          <p className="text-gray-300 text-sm mt-1">
            Available
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
          <h2 className="text-3xl font-bold text-pink-400">
            {adoptedPets.length}
          </h2>

          <p className="text-gray-300 text-sm mt-1">
            Adopted
          </p>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
          >
           
            <div className="relative h-[280px]">
              <Image
                src={pet.imageUrl || "/images/fallback.png"}
                alt={pet.petName}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-4 left-4">
                <h2 className="text-2xl font-bold text-white">
                  {pet.petName}
                </h2>

                <p className="text-sm text-gray-200">
                  {pet.breed || "Mixed Breed"}
                </p>
              </div>
            </div>

           
            <div className="p-5">
             
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs text-gray-400">
                    Adoption Fee
                  </p>

                  <h3 className="text-xl font-bold text-cyan-400">
                    ৳ {pet.adoptionFee}
                  </h3>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    pet.status === "adopted"
                      ? "bg-pink-500/20 text-pink-300"
                      : "bg-green-500/20 text-green-300"
                  }`}
                >
                  {pet.status === "adopted"
                    ? "Adopted"
                    : "Available"}
                </span>
              </div>

            
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  {pet.location}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <GiHealthNormal className="text-cyan-400" />
                  {pet.healthStatus}
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <MdVaccines className="text-cyan-400" />
                  {pet.vaccinationStatus || "Not Specified"}
                </div>
              </div>

           
              <p className="text-sm text-gray-400 mb-5 line-clamp-2">
                {pet.description}
              </p>

           
              <div className="flex items-center gap-3 flex-wrap">
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListingPage;