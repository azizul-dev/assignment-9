"use client";

import toast from "react-hot-toast";

const CancelRequestButton = ({ requestId }) => {
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/adopting/${requestId}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        toast.success("Request deleted");
        window.location.reload();
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold hover:bg-red-500/20 transition"
    >
      Cancel Request
    </button>
  );
};

export default CancelRequestButton;