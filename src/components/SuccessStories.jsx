"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";

const stories = [
  {
    id: 1,
    name: "Sarah Johnson",
    pet: "Charlie",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
    petImage:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200",
    story:
      "Charlie completely changed our lives. He’s loving, playful, and became part of our family from the very first day.",
  },

  {
    id: 2,
    name: "Michael Brown",
    pet: "Luna",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200",
    petImage:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200",
    story:
      "Adopting Luna was the best decision ever. She brings happiness and warmth into our home every single day.",
  },

  {
    id: 3,
    name: "Emily Davis",
    pet: "Max",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1200",
    petImage:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=1200",
    story:
      "Max helped me overcome loneliness and stress. He’s not just a pet — he’s truly my best friend.",
  },
];

const SuccessStories = () => {
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
            Happy Adoption Stories
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-5">
            Success Stories
          </h2>

          <p className="max-w-2xl mx-auto text-white/60 leading-8 text-sm md:text-base">
            Real stories from loving families who found
            happiness and companionship through pet adoption.
          </p>
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.30)",
              }}
            >
            
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={story.petImage}
                  alt={story.pet}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

               
                <div className="absolute bottom-5 left-5">
                  <p className="text-white/60 text-sm mb-1">
                    Adopted Pet
                  </p>

                  <h3 className="text-4xl font-black text-white">
                    {story.pet}
                  </h3>
                </div>
              </div>

            
              <div className="p-6">
              
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#A8E6CF]">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {story.name}
                    </h4>

                    <p className="text-white/50 text-sm">
                      Pet Adopter
                    </p>
                  </div>
                </div>

               
                <div className="flex items-center gap-1 text-yellow-400 mb-5">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

               
                <p className="text-white/60 leading-8 text-sm">
                  {story.story}
                </p>

               
                <div className="w-0 group-hover:w-full h-[2px] bg-[#A8E6CF] mt-7 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;