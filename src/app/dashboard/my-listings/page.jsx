export const dynamic = "force-dynamic";
import Image from "next/image";

import { FaMapMarkerAlt, FaArrowRight, FaHeart } from "react-icons/fa";
import { MdVaccines } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import EyeButton from "@/components/EyeButton";
import EditModal from "@/components/EditModal";

import DeleteCart from "@/components/DeleteCart";
import RequestPet from "@/components/RequestPet";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const MyListingPage = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log("TOKEN:", token);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error(`API error: ${res.status}`);

  const pets = await res.json();
  

  const availablePets = pets.filter((pet) => pet.status !== "adopted");

  const adoptedPets = pets.filter((pet) => pet.status === "adopted");

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
          My Dashboard
        </p>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
          My Listings
        </h1>

        <p className="text-white/60 max-w-2xl mx-auto text-sm">
          Manage your pet listings and adoption requests easily.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
        <div
          className="rounded-3xl p-6 text-center"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-4xl font-black text-[#A8E6CF] mb-1">
            {pets.length}
          </h2>

          <p className="text-white/70">Total Listings</p>
        </div>

        <div
          className="rounded-3xl p-6 text-center"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-4xl font-black text-emerald-400 mb-1">
            {availablePets.length}
          </h2>

          <p className="text-white/70">Available</p>
        </div>

        <div
          className="rounded-3xl p-6 text-center"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-4xl font-black text-pink-400 mb-1">
            {adoptedPets.length}
          </h2>

          <p className="text-white/70">Adopted</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {pets.map((pet) => (
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
            <div
              className="absolute inset-0 rounded-[28px] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
              style={{
                border: "1px solid transparent",
                background:
                  "linear-gradient(135deg, rgba(74,144,164,0.5), rgba(168,230,207,0.3), rgba(74,144,164,0.5)) border-box",
                WebkitMask:
                  "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            ></div>

            <div className="relative h-[400px]  overflow-hidden">
              <Image
                src={pet.imageUrl}
                alt={pet.petName}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="  object-cover object-top transition duration-700 group-hover:scale-105 "
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
                  <p className="text-white/50 text-[11px] mb-1">Adoption Fee</p>

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

              <div className="flex  items-center gap-4">
                <RequestPet petId={pet._id} petName={pet.petName} />

                {/* <Link
                  href={`/pets/${pet._id}`}
                  className="flex-1 h-10 px-3 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 transition duration-300 hover:scale-[1.02] whitespace-nowrap"
                  style={{
                    background: "linear-gradient(90deg,#4A90A4,#A8E6CF)",
                  }}
                >
                  Requests
                  <FaArrowRight size={12} />
                </Link> */}

                <div
                  className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <EyeButton href={`/pets/${pet._id}`} />
                </div>

                <EditModal pet={pet} />

                {/* <Button
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition duration-300 hover:scale-110 shrink-0"
                  style={{
                    background: "rgba(239,68,68,0.15)",
                    border: "1px solid rgba(239,68,68,0.2)",
                  }}
                >
                  <RiDeleteBin6Fill size={16} />
                </Button> */}
                <DeleteCart pet={pet} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListingPage;
