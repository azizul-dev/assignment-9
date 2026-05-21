"use client";

import { authClient } from "@/lib/auth-client";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const RequestPage = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  
  const fetchRequests = useCallback(async () => {
    try {
      const { data: sessionData } = await authClient.getSession();
      const { data: tokenData } = await authClient.token();

     
      const ownerEmail = sessionData?.user?.email;
      if (!ownerEmail) return;

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/adopting/owner/${ownerEmail}`,
        { headers: { authorization: `Bearer ${tokenData?.token}` } }
      );

       console.log("status:", res.status); 

      if (!res.ok) throw new Error("Failed");

      const data = await res.json();
      console.log("data:", data); 
      setRequests(Array.isArray(data) ? data : []);
    } catch {
      toast.error("Failed to load requests");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]); 

  const handleStatus = async (id, status, petId) => {
    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/adopting/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify({ status, petId }),
        }
      );

      if (!res.ok) throw new Error("Failed");

      toast.success(
        status === "approved" ? "Request Approved!" : "Request Rejected"
      );

      await fetchRequests(); 
    } catch {
      toast.error("Something went wrong");
    }
  };

  if (loading)
    return (
      <div className="p-6">
        <p className="text-white/60">Loading...</p>
      </div>
    );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Adoption Requests</h1>

      {requests.length === 0 ? (
        <p className="text-white/60">No Requests Found</p>
      ) : (
        <div className="space-y-4">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white/10 border border-white/10 rounded-xl p-4 text-white"
            >
              <h2 className="text-lg font-semibold">{req.petName}</h2>
              <p className="text-sm">{req.userName}</p>
              <p className="text-sm text-gray-300">{req.userEmail}</p>
              <p className="mt-2 text-sm">
                Status:{" "}
                <span
                  className={
                    req.status === "approved"
                      ? "text-green-400 font-semibold"
                      : req.status === "rejected"
                      ? "text-red-400 font-semibold"
                      : "text-yellow-400 font-semibold"
                  }
                >
                  {req.status}
                </span>
              </p>

              {req.status === "pending" && (
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => handleStatus(req._id, "approved", req.petId)}
                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm transition"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleStatus(req._id, "rejected", req.petId)}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestPage;