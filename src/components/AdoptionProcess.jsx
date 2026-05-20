"use client";

import {
  FaMagnifyingGlass,
  FaFileCircleCheck,
  FaHandshake,
  FaHouse,
} from "react-icons/fa6";

const steps = [
  {
    id: 1,
    icon: <FaMagnifyingGlass size={26} />,
    title: "Browse Pets",
    description:
      "Explore available pets and find the perfect companion for your family.",
  },

  {
    id: 2,
    icon: <FaFileCircleCheck size={26} />,
    title: "Submit Request",
    description:
      "Fill out the adoption request form with your pickup date and details.",
  },

  {
    id: 3,
    icon: <FaHandshake size={26} />,
    title: "Meet & Approval",
    description:
      "Pet owners review requests and approve the best match for adoption.",
  },

  {
    id: 4,
    icon: <FaHouse size={26} />,
    title: "Bring Home",
    description:
      "Welcome your new furry friend into your loving forever home.",
  },
];

const AdoptionProcess = () => {
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
            Easy 4 Step Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-5">
            Adoption Process
          </h2>

          <p className="max-w-2xl mx-auto text-white/60 leading-8 text-sm md:text-base">
            A simple and smooth process to help pets find
            their forever loving homes.
          </p>
        </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative rounded-[30px] p-8 transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
              }}
            >
             
              <div className="absolute top-5 right-5 text-6xl font-black text-white/5">
                0{step.id}
              </div>

            
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg,#4d7c0f,#84cc16)",
                }}
              >
                {step.icon}
              </div>

              
              <h3 className="text-2xl font-black text-white mb-4">
                {step.title}
              </h3>

             
              <p className="text-white/60 leading-7 text-sm">
                {step.description}
              </p>

             
              <div className="w-0 group-hover:w-full h-[2px] bg-[#A8E6CF] mt-6 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdoptionProcess;