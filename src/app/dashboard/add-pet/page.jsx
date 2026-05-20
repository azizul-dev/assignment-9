"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Input,
  Label,
  TextArea,
  TextField,
  Select,
  ListBox,
} from "@heroui/react";
import React from "react";
import toast from "react-hot-toast";

const AddPetsPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const addPet = Object.fromEntries(formData.entries());

  

    const {data:tokenData} = await authClient.token()

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pet`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(addPet),
    });
    const data = await res.json();
    if (res.ok) {
      toast.success("Pet added successfully!");
      e.target.reset(); 
    } else {
      toast.error("Failed to add pet!");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={onSubmit}
        className="p-6 md:p-10 space-y-6 max-w-4xl w-full rounded-3xl  border border-white/20"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Add a <span className="text-cyan-400">Pet Listing</span>
        </h1>
        <p className="text-white/60 text-sm mb-6">
          Help a pet find their forever home by creating a detailed listing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Pet Name */}
          <TextField name="petName" isRequired>
            <Label className="text-white/80 text-sm mb-1 block">Pet Name</Label>
            <Input
              placeholder="e.g. Buddy"
              className="rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm"
            />
            <FieldError className="text-red-300" />
          </TextField>

          {/* Species */}
          <div>
            <Select name="species" isRequired className="w-full">
              <Label className="text-white/80 text-sm mb-1 block">
                Species
              </Label>
              <Select.Trigger className="rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                <Select.Value placeholder="Select species" />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Dog" textValue="Dog">
                    Dog
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Cat" textValue="Cat">
                    Cat
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Bird" textValue="Bird">
                    Bird
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Rabbit" textValue="Rabbit">
                    Rabbit
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Other" textValue="Other">
                    Other
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Breed */}
          <TextField name="breed">
            <Label className="text-white/80 text-sm mb-1 block">Breed</Label>
            <Input
              placeholder="e.g. Labrador Retriever"
              className="rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm"
            />
            <FieldError className="text-red-300" />
          </TextField>

          {/* Age */}
          <TextField name="age" isRequired>
            <Label className="text-white/80 text-sm mb-1 block">
              Age (years)
            </Label>
            <Input
              type="number"
              placeholder="e.g. 2"
              className="rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm"
            />
            <FieldError className="text-red-300" />
          </TextField>

          {/* Gender */}
          <div>
            <Select name="gender" isRequired className="w-full">
              <Label className="text-white/80 text-sm mb-1 block">Gender</Label>
              <Select.Trigger className="rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                <Select.Value placeholder="Select gender" />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Male" textValue="Male">
                    Male
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Female" textValue="Female">
                    Female
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Vaccination Status */}
          <div>
            <Select name="vaccinationStatus" className="w-full">
              <Label className="text-white/80 text-sm mb-1 block">
                Vaccination Status
              </Label>
              <Select.Trigger className="rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                <Select.Value placeholder="Select status" />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Vaccinated" textValue="Vaccinated">
                    Vaccinated
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Not Vaccinated" textValue="Not Vaccinated">
                    Not Vaccinated
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Partial" textValue="Partial">
                    Partial
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Pet Image URL */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label className="text-white/80 text-sm mb-1 block">
                Pet Image URL{" "}
                <span className=" text-xs">(upload to imgbb.com first)</span>
              </Label>
              <Input
                type="url"
                placeholder="https://i.ibb.co/..."
                className="rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm"
              />
              <FieldError className="text-red-300" />
            </TextField>
          </div>

          {/* Health Status */}
          <div>
            <Select name="healthStatus" isRequired className="w-full">
              <Label className="text-white/80 text-sm mb-1 block">
                Health Status
              </Label>
              <Select.Trigger className="rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-sm">
                <Select.Value placeholder="Select health status" />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="Healthy" textValue="Healthy">
                    Healthy
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Minor Issues" textValue="Minor Issues">
                    Minor Issues
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="Needs Care" textValue="Needs Care">
                    Needs Care
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>

          {/* Location */}
          <TextField name="location" isRequired>
            <Label className="text-white/80 text-sm mb-1 block">Location</Label>
            <Input
              placeholder="e.g. New York, NY"
              className="rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm"
            />
            <FieldError className="text-red-300" />
          </TextField>

          {/* Adoption Fee */}
          <TextField name="adoptionFee">
            <Label className="text-white/80 text-sm mb-1 block">
              Adoption Fee ($){" "}
              <span className=" text-xs">— Enter 0 for free</span>
            </Label>
            <Input
              type="number"
              placeholder="0"
              className="rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm"
            />
            <FieldError className="text-red-300" />
          </TextField>

          {/* Owner Email */}
          <TextField name="ownerEmail" isRequired>
            <Label className="text-white/80 text-sm mb-1 block">
              Owner Email
            </Label>
            <Input
              type="email"
              placeholder="you@example.com"
              className="rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm"
            />
            <FieldError className="text-red-300" />
          </TextField>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label className="text-white/80 text-sm mb-1 block">
                Description
              </Label>
              <TextArea
                placeholder="Describe the pet's personality, habits, needs and anything adopters should know..."
                className="rounded-3xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 backdrop-blur-sm"
              />
              <FieldError className="text-red-300" />
            </TextField>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            className="rounded-2xl flex-1 bg-white/10 border border-white/20 text-white hover:bg-white/20 backdrop-blur-sm font-semibold py-3"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-2xl flex-1 bg-cyan-500/80 border border-cyan-400/40 text-white hover:bg-cyan-500 backdrop-blur-sm font-semibold py-3"
          >
            Add Pet Listing
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddPetsPage;
