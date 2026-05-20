"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Modal,
  TextArea,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { CiEdit } from "react-icons/ci";

const EditModal = ({ pet }) => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedPet = {
      petName: formData.get("petName"),
      breed: formData.get("breed"),
      location: formData.get("location"),
      adoptionFee: formData.get("adoptionFee"),
      imageUrl: formData.get("imageUrl"),
      description: formData.get("description"),
    };

    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pet/${pet._id}`,
        {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${tokenData?.token}`,
          },
          body: JSON.stringify(updatedPet),
        }
      );

      if (res.ok) {
        toast.success("Pet updated!");
        router.refresh();
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Modal>
      <Button
        className="w-10 h-10 rounded-xl text-white"
        style={{
          background: "rgba(74,144,164,0.18)",
          border: "1px solid rgba(74,144,164,0.25)",
        }}
      >
        <CiEdit size={18} />
      </Button>

      <Modal.Backdrop className="bg-black/60">
        <Modal.Container placement="center">
          <Modal.Dialog className="bg-[#111827] text-white rounded-2xl w-full max-w-lg p-6">
            <Modal.CloseTrigger />

            <Modal.Header>
              <h2 className="text-2xl font-bold">Edit Pet</h2>
            </Modal.Header>

            <Modal.Body>
              <form onSubmit={onSubmit} className="space-y-4">
                <Input
                  name="petName"
                  defaultValue={pet?.petName}
                  placeholder="Pet Name"
                />

                <Input
                  name="breed"
                  defaultValue={pet?.breed}
                  placeholder="Breed"
                />

                <Input
                  name="location"
                  defaultValue={pet?.location}
                  placeholder="Location"
                />

                <Input
                  name="adoptionFee"
                  defaultValue={pet?.adoptionFee}
                  placeholder="Adoption Fee"
                  type="number"
                />

                <Input
                  name="imageUrl"
                  defaultValue={pet?.imageUrl}
                  placeholder="Image URL"
                />

                <TextArea
                  name="description"
                  defaultValue={pet?.description}
                  placeholder="Description"
                />

                <Button
                  type="submit"
                  className="w-full bg-cyan-500 text-white"
                >
                  Update Pet
                </Button>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;