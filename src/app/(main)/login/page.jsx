"use client";
import { authClient } from "@/lib/auth-client";
import { redirect,  } from "next/navigation"; // ✅ redirect এর বদলে useRouter
import toast from "react-hot-toast";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
      toast.success("Login Successful");
      redirect.push("/");
    }
    if (error) {
      toast.error("Login Failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 pt-20"
      style={{
        backgroundImage: "url('/images/4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="fixed inset-0 -z-10" style={{ background: "rgba(0,0,0,0.6)" }} />

      <div
        className="w-full max-w-md p-8 rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
       
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-3">
            <Image src="/images/logo.png" alt="logo" width={50} height={50} className="rounded-full object-cover" />
          </div>
          <span className={`${dancing.className} text-3xl text-white`}>FurEver</span>
          <p className="text-white/60 text-sm mt-1">Welcome back!</p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">

      
          <div className="flex flex-col gap-1">
            <label className="text-white/80 text-sm">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 outline-none"
              style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
            />
          </div>

       
          <div className="flex flex-col gap-1">
            <label className="text-white/80 text-sm">Password</label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter your password"
                className="w-full px-4 py-3 pr-12 rounded-xl text-white placeholder-white/40 outline-none"
                style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
              >
                {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
              </button>
            </div>
          </div>

         
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white transition hover:opacity-90 mt-2"
            style={{ background: "linear-gradient(135deg, #4A90A4, #A8E6CF)" }}
          >
            Login
          </button>

          
          <p className="text-center text-white/60 text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-teal-300 hover:underline font-semibold">
              Create Account
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;