"use client";

import { authClient } from "@/lib/auth-client";
import { Form, Input, TextField, Label, FieldError } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmError, setConfirmError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    if (user.password !== user.confirmPassword) {
      setConfirmError("Passwords do not match");
      return;
    }

    setConfirmError("");

    const { data, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
      toast.success("SignUp Successful");
      redirect("/");
    }

    if (error) {
      toast.error("Signup Failed");
    }
  };

  const handleGoogleSignin = async () =>{
    await authClient.signIn.social({
      provider: "google"
    })
  }

  return (
    <div
      className="
        min-h-screen
        flex
        items-start
        justify-center
        px-4
        pt-35
        pb-6
      "
      style={{
        backgroundImage: "url('/images/4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "rgba(0,0,0,0.6)",
        }}
      />

      <div
        className="w-full max-w-xl p-4 rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <div className="flex flex-col items-center mb-5">
          <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center mb-2">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={45}
              height={45}
              className="rounded-full object-cover"
            />
          </div>

          <span className={`${dancing.className} text-4xl text-white`}>
            FurEver
          </span>

          <p className="text-white/60 text-sm mt-1">Create your account</p>
        </div>

        <Form onSubmit={onSubmit} className="flex flex-col gap-3">
          <TextField isRequired name="name">
            <Label className="text-white/80 text-sm mb-1 block">
              Full Name
            </Label>

            <Input
              placeholder="Your Name"
              className="
                w-full
                px-2
                py-3
                rounded-xl
                text-white
                placeholder-white/40
                outline-none
              "
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />

            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="text-white/80 text-sm mb-1 block">Email</Label>

            <Input
              placeholder="Enter Your Email"
              className="
                w-full
                px-4
                py-2.5
                rounded-xl
                text-white
                placeholder-white/40
                outline-none
              "
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />

            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          <TextField name="image">
            <Label className="text-white/80 text-sm mb-1 block">
              Photo URL
            </Label>

            <Input
              placeholder="https://example.com/photo.jpg"
              className="
                w-full
                px-4
                py-2.5
                rounded-xl
                text-white
                placeholder-white/40
                outline-none
              "
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            />

            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          <TextField
            isRequired
            name="password"
            type={showPassword ? "text" : "password"}
            validate={(value) => {
              if (value.length < 6) {
                return "At least 6 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Must contain one uppercase letter";
              }

              if (!/[a-z]/.test(value)) {
                return "Must contain one lowercase letter";
              }

              return null;
            }}
          >
            <Label className="text-white/80 text-sm mb-1 block">Password</Label>

            <div className="relative">
              <Input
                placeholder="Enter your password"
                className="
                  w-full
                  px-4
                  py-2.5
                  pr-12
                  rounded-xl
                  text-white
                  placeholder-white/40
                  outline-none
                "
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-white/60
                  hover:text-white
                "
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>

            <FieldError className="text-red-400 text-xs mt-1" />
          </TextField>

          <div className="flex flex-col gap-1">
            <label className="text-white/80 text-sm">Confirm Password</label>

            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                required
                className="
                  w-full
                  px-4
                  py-2.5
                  pr-12
                  rounded-xl
                  text-white
                  placeholder-white/40
                  outline-none
                "
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="
                  absolute
                  right-3
                  top-1/2
                  -translate-y-1/2
                  text-white/60
                  hover:text-white
                "
              >
                {showConfirm ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </button>
            </div>

            {confirmError && (
              <p className="text-red-400 text-xs">{confirmError}</p>
            )}
          </div>

          <button
            type="submit"
            className="
              w-full
              py-2.5
              rounded-xl
              font-semibold
              text-white
              transition
              hover:opacity-90
              mt-2
            "
            style={{
              background: "linear-gradient(135deg, #4A90A4, #A8E6CF)",
            }}
          >
            Create Account
          </button>

          <p className="text-center text-white/60 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-teal-300 hover:underline">
              Login
            </Link>
          </p>
        </Form>
        <div className="flex items-center gap-3 my-2">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-white/50 text-sm">OR</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <button onClick={handleGoogleSignin}
          type="button"
          className="w-full flex items-center justify-center gap-3 py-2.5 rounded-xl text-white font-medium transition hover:bg-white/15 cursor-pointer"
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="22"
            height="22"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.3 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.4-6.5 6.9l6.2 5.2C39.7 36.2 44 30.7 44 24c0-1.3-.1-2.3-.4-3.5z"
            />
          </svg>

          <span>Continue with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
