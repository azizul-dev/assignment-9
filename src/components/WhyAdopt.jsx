"use client";

import {
  FaHeart,
  FaHouse,
  FaPaw,
  FaShieldHeart,
} from "react-icons/fa6";

const WhyAdopt = () => {
  const reasons = [
    {
      id: 1,
      icon: <FaHeart size={28} />,
      title: "Save a Precious Life",
      description:
        "Every adoption gives a homeless pet a second chance to live a happy and loving life.",
    },

    {
      id: 2,
     icon: <FaHouse size={28} />,
      title: "Find a Loyal Companion",
      description:
        "Pets bring unconditional love, emotional support, and happiness into your family.",
    },

    {
      id: 3,
      icon: <FaPaw size={28} />,
      title: "Support Animal Welfare",
      description:
        "Adopting helps reduce the number of stray animals and supports responsible pet care.",
    },

    {
      id: 4,
      icon: <FaShieldHeart size={28} />,
      title: "Improve Mental Wellness",
      description:
        "Spending time with pets can reduce stress, anxiety, and loneliness in everyday life.",
    },
  ];

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
            Give Them A Better Life
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-5">
            Why Adopt Pets?
          </h2>

          <p className="max-w-2xl mx-auto text-white/60 leading-8 text-sm md:text-base">
            Adopting a pet is not just about bringing an animal
            home — it’s about creating a lifelong friendship,
            saving lives, and filling your world with love and
            happiness.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group rounded-[30px] p-7 transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
              }}
            >
            
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg,#4d7c0f,#84cc16)",
                }}
              >
                {reason.icon}
              </div>

              
              <h3 className="text-2xl font-black text-white mb-4">
                {reason.title}
              </h3>

            
              <p className="text-white/60 leading-7 text-sm">
                {reason.description}
              </p>

             
              <div className="w-0 group-hover:w-full h-[2px] bg-[#A8E6CF] mt-6 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;