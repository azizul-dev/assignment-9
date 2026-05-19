import Link from "next/link";
import { FaArrowLeft, FaPaw } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/10 blur-3xl rounded-full"></div>

      {/* Card */}
      <div
        className="w-full max-w-2xl rounded-[36px] p-10 md:p-16 text-center relative"
        style={{
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        {/* Paw Icon */}
        <div className="flex justify-center mb-6">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(74,144,164,0.25), rgba(168,230,207,0.15))",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <FaPaw className="text-4xl text-cyan-300" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-9xl font-black text-white mb-4">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-black text-white mb-4">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-white/60 text-sm md:text-lg leading-8 max-w-xl mx-auto mb-10">
          The page you are looking for does not exist or may have been moved.
          Let’s help you find your way back home.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl text-white font-bold transition duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(90deg,#4A90A4,#A8E6CF)",
            boxShadow: "0 10px 30px rgba(74,144,164,0.35)",
          }}
        >
          <FaArrowLeft />
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;