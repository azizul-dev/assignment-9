"use client";

import { AlertDialog, Button } from "@heroui/react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const DeleteCart = ({ pet }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pet/${pet._id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${tokenData?.token}`,
          },
        }
      );

      if (res.ok) {
        toast.success("Pet deleted!");
        router.refresh();
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <AlertDialog>
      <Button
        className="w-10 h-10 rounded-xl text-white"
        style={{
          background: "rgba(239,68,68,0.15)",
          border: "1px solid rgba(239,68,68,0.25)",
        }}
      >
        <RiDeleteBin6Fill size={16} />
      </Button>

      <AlertDialog.Backdrop className="bg-black/60">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="bg-[#111827] text-white rounded-2xl p-6 w-full max-w-sm">
            <AlertDialog.Header>
              <AlertDialog.Heading className="text-xl font-bold">
                Delete Pet
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p className="text-sm text-gray-300">
                Are you sure you want to delete{" "}
                <span className="font-bold text-white">
                  {pet?.petName}
                </span>
                ?
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer className="flex gap-3 mt-4">
              <Button
                slot="close"
                className="flex-1 bg-gray-700 text-white"
              >
                Cancel
              </Button>

              <Button
                slot="close"
                onClick={handleDelete}
                className="flex-1 bg-red-500 text-white"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteCart;