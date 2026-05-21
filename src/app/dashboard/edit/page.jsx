"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, TextArea } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPaw, FaMapMarkerAlt } from "react-icons/fa";

const EditPage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet`)
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  const handleUpdate = async (e, id) => {
    e.preventDefault();

    const form = e.target;

    const updatedPet = {
      petName: form.petName.value,
      breed: form.breed.value,
      location: form.location.value,
      adoptionFee: form.adoptionFee.value,
      imageUrl: form.imageUrl.value,
      description: form.description.value,
    };

    try {
      const { data: tokenData } = await authClient.token();

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(updatedPet),
      });

      if (res.ok) {
        toast.success("Pet updated successfully!");
      } else {
        toast.error("Update failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="p-3 sm:p-4 md:p-8 min-h-screen overflow-hidden">
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
          <FaPaw className="text-cyan-400" />
          Edit Pets
        </h1>

        <p className="text-white/70 mt-2 text-sm md:text-base">
          Update your pet information easily
        </p>
      </div>

      <div className="grid gap-5 md:gap-6">
        {pets.map((pet) => (
          <form
            key={pet._id}
            onSubmit={(e) => handleUpdate(e, pet._id)}
            className="
              bg-white/10
              backdrop-blur-lg
              border border-white/10
              rounded-2xl md:rounded-3xl
              p-4 sm:p-5 md:p-7
              shadow-xl
              hover:border-cyan-400/30
              transition-all
              duration-300
              overflow-hidden
            "
          >
            <div className="flex flex-col xl:flex-row gap-5">
              <div className="w-full xl:w-60 h-52 sm:h-64 xl:h-52 rounded-2xl overflow-hidden flex-shrink-0">
                <Image
                  src={pet.imageUrl}
                  alt={pet.petName}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 min-w-0">
                <Input
                  name="petName"
                  defaultValue={pet.petName}
                  placeholder="Pet Name"
                  variant="flat"
                  className="w-full"
                />

                <Input
                  name="breed"
                  defaultValue={pet.breed}
                  placeholder="Breed"
                  variant="flat"
                  className="w-full"
                />

                <div className="flex items-center bg-white/80 rounded-xl px-3 w-full overflow-hidden">
                  <FaMapMarkerAlt className="text-gray-500 mr-2 shrink-0" />

                  <Input
                    name="location"
                    defaultValue={pet.location}
                    placeholder="Location"
                    variant="flat"
                    className="w-full min-w-0"
                  />
                </div>

                <Input
                  name="adoptionFee"
                  defaultValue={pet.adoptionFee}
                  placeholder="Adoption Fee"
                  type="number"
                  variant="flat"
                  className="w-full"
                />

                <div className="md:col-span-2">
                  <Input
                    name="imageUrl"
                    defaultValue={pet.imageUrl}
                    placeholder="Image URL"
                    variant="flat"
                    className="w-full"
                  />
                </div>

                <div className="md:col-span-2">
                  <TextArea
                    name="description"
                    defaultValue={pet.description}
                    placeholder="Description"
                    variant="flat"
                    className="w-full min-h-[120px]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 md:mt-6">
              <Button
                type="submit"
                className="
                  w-full
                  bg-cyan-500
                  hover:bg-cyan-600
                  text-white
                  font-semibold
                  rounded-xl
                  h-11 md:h-12
                  text-sm md:text-base
                "
              >
                Update Pet
              </Button>
            </div>
          </form>
        ))}
      </div>
    </div>
  );
};

export default EditPage;