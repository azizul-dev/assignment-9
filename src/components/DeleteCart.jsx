"use client";

import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaTriangleExclamation } from "react-icons/fa6";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const DeleteCart = ({ pet }) => {
  const handleDelete = async () => {
    const {data:tokenData} = await authClient.token()
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet/${pet._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
    });
    const data = await res.json();

    if (res.ok) {
      toast.success("Pet updated successfully!");
      redirect("/dashboard/my-listings");
    }
  };

  return (
    <div>
      <AlertDialog>
        <Button
          className="
            w-10
            h-10
            min-w-0
            rounded-xl
            text-white
            transition-all
            duration-300
            hover:scale-110
          "
          style={{
            background: "rgba(239,68,68,0.15)",
            border: "1px solid rgba(239,68,68,0.25)",
            backdropFilter: "blur(12px)",
          }}
        >
          <RiDeleteBin6Fill size={16} />
        </Button>

        <AlertDialog.Backdrop className="bg-black/70 backdrop-blur-sm">
          <AlertDialog.Container>
            <AlertDialog.Dialog
              className="
                sm:max-w-[430px]
                rounded-[30px]
                overflow-hidden
                border-0
                shadow-2xl
              "
              style={{
                background: "rgba(17,17,17,0.92)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <AlertDialog.CloseTrigger className="text-white/60 hover:text-white transition" />

              <AlertDialog.Header className="flex flex-col items-center text-center pt-8 pb-4">
                <div
                  className="
                    w-20
                    h-20
                    rounded-full
                    flex
                    items-center
                    justify-center
                    mb-5
                  "
                  style={{
                    background: "rgba(239,68,68,0.12)",
                    border: "1px solid rgba(239,68,68,0.25)",
                  }}
                >
                  <FaTriangleExclamation size={34} className="text-red-400" />
                </div>

                <AlertDialog.Heading
                  as="h1"
                  className="text-3xl font-black text-white"
                >
                  Delete Pet Listing?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body className="px-8 pb-2 text-center">
                <p className="text-white/65 text-sm leading-7">
                  Are you sure you want to remove{" "}
                  <span className="text-[#A8E6CF] font-bold">
                    {pet?.petName}
                  </span>{" "}
                  from your listings?
                </p>

                <div
                  className="mt-5 rounded-2xl p-4 text-left"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white/50 text-xs">Pet Name</p>

                    <p className="text-white font-semibold text-sm">
                      {pet?.petName}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white/50 text-xs">Category</p>

                    <p className="text-white font-semibold text-sm">
                      {pet?.species}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-white/50 text-xs">Location</p>

                    <p className="text-white font-semibold text-sm">
                      {pet?.location}
                    </p>
                  </div>
                </div>

                <p className="text-red-300/90 text-sm mt-5 font-medium">
                  This action cannot be undone.
                </p>
              </AlertDialog.Body>


              <AlertDialog.Footer className="flex gap-3 px-6 pb-7 pt-5">

                <Button
                  slot="close"
                  className="
                    flex-1
                    h-12
                    rounded-2xl
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Cancel
                </Button>


                <Button
                  onClick={handleDelete}
                  slot="close"
                  className="
                    flex-1
                    h-12
                    rounded-2xl
                    text-white
                    font-bold
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(239,68,68,0.95), rgba(220,38,38,0.92))",
                    boxShadow: "0 10px 25px rgba(239,68,68,0.25)",
                  }}
                >
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteCart;
