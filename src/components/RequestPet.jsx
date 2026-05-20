"use client";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const RequestPet = ({ petId, petName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRequests = async () => {
    setLoading(true);
    const { data: tokenData } = await authClient.token();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/adopting/pet/${petId}`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
        },
      );

      const data = await res.json();
      setRequests(data);
    } catch {
      toast.error("Failed to load requests");
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    fetchRequests();
  };

  const handleStatus = async (requestId, status, petId) => {
    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/adopting/${requestId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },

          body: JSON.stringify({ status, petId }),
        },
      );
      if (res.ok) {
        toast.success(`Request ${status}`);
        fetchRequests();
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <button
        onClick={handleOpen}
        className=" cursor-pointer flex-1 h-10 px-3 rounded-xl text-white text-sm font-bold flex items-center justify-center gap-2 transition duration-300 hover:scale-[1.02] whitespace-nowrap"
        style={{ background: "linear-gradient(90deg,#4A90A4,#A8E6CF)" }}
      >
        Requests
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-gray-900 text-white rounded-2xl w-full max-w-md mx-4 p-5 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">
                Adoption Requests for {petName}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white text-xl leading-none"
              >
                ✕
              </button>
            </div>

            {loading ? (
              <p className="text-center text-gray-400 py-6">Loading...</p>
            ) : requests.length === 0 ? (
              <p className="text-center text-gray-400 py-6">No requests yet</p>
            ) : (
              <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-1">
                {requests.map((req) => (
                  <div
                    key={req._id}
                    className="bg-gray-800 rounded-xl p-4 flex flex-col gap-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-sm">{req.userName}</p>
                        <p className="text-gray-400 text-xs">{req.userEmail}</p>
                      </div>

                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full shrink-0 ${
                          req.status === "approved"
                            ? "bg-green-500/20 text-green-400"
                            : req.status === "rejected"
                              ? "bg-red-500/20 text-red-400"
                              : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {req.status === "approved"
                          ? "✓ Approved"
                          : req.status === "rejected"
                            ? "✕ Rejected"
                            : "⏳ Pending"}
                      </span>
                    </div>

                    <div className="flex gap-4 text-xs text-gray-400">
                      <span>
                        Pickup:{" "}
                        <span className="text-white">
                          {req.pickupDate?.year}-{req.pickupDate?.month}-
                          {req.pickupDate?.day}
                        </span>
                      </span>
                      <span>
                        Requested:{" "}
                        <span className="text-white">
                          {new Date(req.requestDate).toLocaleDateString(
                            "en-US",
                            { month: "short", day: "numeric", year: "numeric" },
                          )}
                        </span>
                      </span>
                    </div>

                    {req.message && (
                      <p className="text-sm text-gray-300 bg-gray-700/50 rounded-lg px-3 py-2 italic"></p>
                    )}

                    {req.status === "pending" && (
                      <div className="flex gap-3 mt-1">
                        <button
                          onClick={() =>
                            handleStatus(req._id, "approved", req.petId)
                          }
                          className="flex-1 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition"
                        >
                          ✓ Approve
                        </button>
                        <button
                          onClick={() =>
                            handleStatus(req._id, "rejected", req.petId)
                          }
                          className="flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition"
                        >
                          ✕ Reject
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RequestPet;
