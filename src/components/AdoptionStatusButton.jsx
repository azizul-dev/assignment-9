"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const AdoptionStatusButton = ({ petId, request }) => {
  const router = useRouter();

  const { data: session } = authClient.useSession();

  const handleClick = () => {
    // login না থাকলে login page
    if (!session?.user) {
      toast.error("Please login first");

      router.push("/login");

      return;
    }

    // already requested
    if (request?.status === "pending") {
      toast.error("You already requested adoption");

      return;
    }

    // already adopted
    if (request?.status === "approved") {
      toast.error("This pet is already adopted");

      return;
    }

    // details page
    router.push(`/pets/${petId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="
        flex-1
        h-10
        rounded-xl
        text-white
        font-semibold
        text-sm
        transition-all
        duration-300
        hover:scale-[1.02]
      "
      style={{
        background: "linear-gradient(135deg,#84cc16,#65a30d)",
      }}
    >
      Adopt Now
    </button>
  );
};

export default AdoptionStatusButton;