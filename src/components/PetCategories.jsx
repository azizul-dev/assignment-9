"use client";

import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Dogs",
    pets: "120+ Pets",
    image:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200",
  },

  {
    id: 2,
    name: "Cats",
    pets: "80+ Pets",
    image:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200",
  },

  {
    id: 3,
    name: "Birds",
    pets: "45+ Pets",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?q=80&w=1200",
  },

  {
    id: 4,
    name: "Rabbits",
    pets: "30+ Pets",
    image:
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=1200",
  },
];

const PetCategories = () => {
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
            Find Your Favorite Companion
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-5">
            Pet Categories
          </h2>

          <p className="max-w-2xl mx-auto text-white/60 leading-8 text-sm md:text-base">
            Explore different types of adorable pets waiting
            for a loving forever home.
          </p>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative h-[420px] rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 10px 40px rgba(0,0,0,0.30)",
              }}
            >
             
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

            
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

             
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div
                  className="inline-block px-4 py-1 rounded-full text-xs text-white mb-4"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {category.pets}
                </div>

                <h3 className="text-4xl font-black text-white mb-3">
                  {category.name}
                </h3>

                <p className="text-white/60 text-sm leading-7">
                  Discover loving {category.name.toLowerCase()} ready
                  for adoption and companionship.
                </p>

                
                <div className="w-0 group-hover:w-full h-[2px] bg-[#A8E6CF] mt-6 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PetCategories;