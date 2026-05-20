"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLocationDot,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall, IoArrowUp } from "react-icons/io5";
import { FaPaw, FaClock } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative  overflow-hidden">
   
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1a1612"
            fillOpacity="1"
            d="M0,96L60,101.3C120,107,240,117,360,133.3C480,149,600,171,720,165.3C840,160,960,128,1080,117.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

    
      <div className="bg-[#1a1612] text-white pt-28 pb-8 px-6 lg:px-16  relative z-10">
     
        <div className="absolute top-10 right-10 opacity-10 text-[180px] text-[#c08b5c]">
          <FaPaw />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
         
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-full overflow-hidden border border-[#c08b5c]/40">
                <Image
                 src="/images/logo.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>

              <h2 className="text-4xl font-bold text-[#f5f1ea]">FurEver</h2>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Connecting loving pets with caring families. Every pet deserves a
              forever home.
            </p>

           
            <div className="flex items-center gap-4 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                (Icon, idx) => (
                  <div
                    key={idx}
                    className="w-11 h-11 rounded-full border border-[#c08b5c]/30 flex items-center justify-center hover:bg-[#c08b5c] transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={18} />
                  </div>
                ),
              )}
            </div>
          </div>

         
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FaPaw className="text-[#c08b5c]" />
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">
              <Link href="/">Home</Link>
              <Link href="/pets">All Pets</Link>
              <Link href="/dashboard/my-requests">My Requests</Link>
              <Link href="/dashboard/add-pet">Add Pet</Link>
              <Link href="/dashboard">Dashboard</Link>
            </div>
          </div>

         
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FaPaw className="text-[#c08b5c]" />
              For Pet Lovers
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">
              <Link href="/">Why Adopt?</Link>
              <Link href="/">Pet Care Tips</Link>
              <Link href="/">Success Stories</Link>
              <Link href="/">Adoption Process</Link>
              <Link href="/">FAQs</Link>
            </div>
          </div>

        
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FaPaw className="text-[#c08b5c]" />
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-300">
              <div className="flex items-start gap-3">
                <FaLocationDot className="mt-1 text-[#c08b5c]" size={18} />
                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-[#c08b5c]" size={20} />
                <p>support@furever.com</p>
              </div>

              <div className="flex items-center gap-3">
                <IoCall className="text-[#c08b5c]" size={20} />
                <p>+880 1234-567890</p>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="text-[#c08b5c]" size={18} />
                <p>Sun - Fri: 9AM - 9PM</p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="mt-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Subscribe to Our Newsletter
            </h2>

            <p className="text-gray-300">
              Get the latest updates on pets, adoption stories, and helpful
              tips.
            </p>
          </div>

          <div className="flex w-full lg:w-auto flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-4 rounded-full bg-transparent border border-[#c08b5c]/30 outline-none min-w-[280px]"
            />

            <button className="px-8 py-4 rounded-full bg-[#c08b5c] hover:scale-105 transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
        </div>

       
       <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-gray-400 text-sm text-center">
            © 2026 FurEver. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-gray-400">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Cookie Policy</Link>
          </div>

      
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="w-12 h-12 rounded-full bg-[#c08b5c] flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            <IoArrowUp size={22} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
