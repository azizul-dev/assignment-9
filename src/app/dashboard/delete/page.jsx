"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const DeletePage = () => {
  const [pets, setPets] = useState([]);

  const loadPets = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet`);
    const data = await res.json();
    setPets(data);
  };

  useEffect(() => {
    loadPets();
  }, []);

  const handleDelete = async (id) => {
    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/pet/${id}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${tokenData?.token}`,
          },
        }
      );

      if (res.ok) {
        toast.success("Pet deleted permanently!");

        const remaining = pets.filter((pet) => pet._id !== id);
        setPets(remaining);
      } else {
        toast.error("Delete failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-3xl font-bold text-white mb-6">
        Delete Pets
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pets.map((pet) => (
          <div
            key={pet._id}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10"
          >
            <Image
              src={pet.imageUrl}
              alt={pet.petName}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />

            <div className="p-4 space-y-3">
              <h2 className="text-xl font-bold text-white">
                {pet.petName}
              </h2>

              <p className="text-gray-300">
                {pet.breed}
              </p>

              <Button
                onClick={() => handleDelete(pet._id)}
                className="w-full bg-red-500 text-white"
              >
                Delete Permanently
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeletePage;