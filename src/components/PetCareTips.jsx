"use client";

import {
  FaBowlFood,
  FaHeartPulse,
  FaPumpSoap,
} from "react-icons/fa6";

import { MdPets } from "react-icons/md";

const tips = [
  {
    id: 1,
    icon: <FaBowlFood size={28} />,
    title: "Healthy Nutrition",
    description:
      "Provide balanced meals and fresh water daily to keep your pet healthy and energetic.",
  },

  {
    id: 2,
    icon: <MdPets size={30} />,
    title: "Daily Exercise",
    description:
      "Regular walks and playtime help pets stay active, happy, and mentally healthy.",
  },

  {
    id: 3,
    icon: <FaHeartPulse size={28} />,
    title: "Regular Checkups",
    description:
      "Routine vet visits and vaccinations protect your pets from diseases and health risks.",
  },

  {
    id: 4,
    icon: <FaPumpSoap size={28} />,
    title: "Proper Grooming",
    description:
      "Bathing and grooming help maintain cleanliness and improve your pet’s comfort.",
  },
];

const PetCareTips = () => {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{
        backgroundImage: "url('/images/4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#140d08]/88"></div>

      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
      
        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-[#A8E6CF] text-xs mb-4">
            Pet Wellness Guide
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-5">
            Pet Care Tips
          </h2>

          <p className="max-w-2xl mx-auto text-white/60 leading-8 text-sm md:text-base">
            Simple care tips to keep your furry friends healthy,
            active, and full of happiness every day.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="group rounded-[30px] p-7 transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg,#4d7c0f,#84cc16)",
                }}
              >
                {tip.icon}
              </div>

              <h3 className="text-2xl font-black text-white mb-4">
                {tip.title}
              </h3>

              <p className="text-white/60 leading-7 text-sm">
                {tip.description}
              </p>

              <div className="w-0 group-hover:w-full h-[2px] bg-[#A8E6CF] mt-6 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetCareTips;