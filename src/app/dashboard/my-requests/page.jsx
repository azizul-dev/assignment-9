import CancelRequestButton from "@/components/cancelRequestButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

const MyRequestsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:8000/adopting/${user?.id}`, {
    cache: "no-store",
  });

  const requests = await res.json();

  const total = requests.length;

  const pending = requests.filter((item) => item.status === "pending").length;

  const approved = requests.filter((item) => item.status === "approved").length;

  const rejected = requests.filter((item) => item.status === "rejected").length;

  return (
    <div className="min-h-screen text-white">
      <div className="mb-10">
        <p className="text-pink-400 text-sm font-semibold uppercase tracking-[4px] mb-3">
          My Requests
        </p>

        <h1 className="text-4xl md:text-5xl font-black mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
            Adoption Requests
          </span>
        </h1>

        <p className="text-white/60 text-lg">
          Track the status of all your adoption requests here.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
        <div
          className="rounded-[28px] p-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-4xl font-black mb-2">{total}</h2>

          <p className="text-white/60">Total</p>
        </div>

        <div
          className="rounded-[28px] p-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-4xl font-black text-yellow-400 mb-2">
            {pending}
          </h2>

          <p className="text-white/60">Pending</p>
        </div>

        <div
          className="rounded-[28px] p-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-4xl font-black text-green-400 mb-2">
            {approved}
          </h2>

          <p className="text-white/60">Approved</p>
        </div>

        <div
          className="rounded-[28px] p-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-4xl font-black text-red-400 mb-2">{rejected}</h2>

          <p className="text-white/60">Rejected</p>
        </div>
      </div>

      <div
        className="rounded-[32px] overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="hidden md:grid grid-cols-6 gap-4 px-8 py-5 border-b border-white/10 text-white/60 font-semibold">
          <p>Pet</p>
          <p>Request Date</p>
          <p>Pickup Date</p>
          <p>Status</p>
          <p>Message</p>
          <p>Action</p>
        </div>

        <div className="divide-y divide-white/10">
          {requests.map(
            (item) => (
              console.log(item.status),
              (
                <div
                  key={item._id}
                  className="grid grid-cols-1 md:grid-cols-6 gap-6 px-8 py-6 items-center"
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.petName}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h2 className="font-bold text-lg">{item.petName}</h2>

                      <p className="text-white/50 text-sm">Adoption Pet</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-white/80">
                      {new Date(item.requestDate).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-white/80">
                      {item.pickupDate
                        ? new Date(item.pickupDate).toLocaleDateString()
                        : "Not Selected"}
                    </p>
                  </div>

                  <div>
                    {item.status === "pending" && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-semibold">
                        <FaClock />
                        Pending
                      </div>
                    )}

                    {item.status === "approved" && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold">
                        <FaCheckCircle />
                        Approved
                      </div>
                    )}

                    {item.status === "rejected" && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-semibold">
                        <FaTimesCircle />
                        Rejected
                      </div>
                    )}
                  </div>

                  <div>
                    <p className="text-white/60 line-clamp-2">
                      {item.message || "No Message"}
                    </p>
                  </div>

                  <div>
                    {(item.status === "approved" ||
                      item.status === "rejected") && (
                      <CancelRequestButton requestId={item._id} />
                    )}
                  </div>
                </div>
              )
            ),
          )}
        </div>
      </div>

      {requests.length === 0 && (
        <div
          className="mt-10 rounded-[30px] p-16 text-center"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="text-3xl font-black mb-4">No Requests Found</h2>

          <p className="text-white/60">You havent adopted any pets yet.</p>
        </div>
      )}
    </div>
  );
};

export default MyRequestsPage;
