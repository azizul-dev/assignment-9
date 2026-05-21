"use client";

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const CancelRequestButton = ({ requestId }) => {
  const handleDelete = async () => {
    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/adopting/${requestId}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${tokenData?.token}`,
          },
        }
      );

      if (res.ok) {
        toast.success("Request deleted");
        window.location.reload();
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="cursor-pointer px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold hover:bg-red-500/20 transition"
    >
      Cancel Request
    </button>
  );
};

export default CancelRequestButton;