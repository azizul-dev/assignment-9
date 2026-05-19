import Image from "next/image";

const Loading = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/4.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
     
      <div className="absolute inset-0 bg-black/75"></div>

   
      <div className="absolute w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>

   
      <div className="relative flex items-center justify-center z-10">
      
        <div
          className="
            w-24 h-24
            rounded-full
            border-[4px]
            border-white/10
            border-t-cyan-400
            border-r-pink-400
            animate-spin
          "
        ></div>

      
        <div
          className="
            absolute
            w-14
            h-14
            rounded-full
            overflow-hidden
            flex
            items-center
            justify-center
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
          "
        >
          <Image
            src="/images/logo.png"
            alt="logo"
            width={38}
            height={38}
            className="object-contain rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
