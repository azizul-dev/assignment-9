"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  DateField,
  Input,
  Label,
  TextArea,
} from "@heroui/react";
import React, { useState } from "react";
import { FaPaw } from "react-icons/fa";
import toast from "react-hot-toast";
import Link from "next/link";

const AdoptPet = ({ pet }) => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [pickupDate, setPickupDate] = useState(null);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleAdoptPet = async (e) => {
    e.preventDefault();

    if (user?.email === pet?.ownerEmail) {
      return toast.error("You cannot adopt your own pet");
    }

    const petData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      userEmail: user?.email,

      petId: pet?._id,
      petName: pet?.petName,
      imageUrl: pet?.imageUrl,
      adoptionFee: pet?.adoptionFee,

      ownerEmail: pet?.ownerEmail,

      pickupDate,

      message,

      status: "pending",

      requestDate: new Date(),
    };

    const {data:tokenData} = await authClient.token()

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/adopting`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify(petData),
      });

      const data = await res.json();

      if (data.insertedId) {
        toast.success(
          "Adoption request submitted successfully!"
        );

        setSuccess(true);
      }
    } catch (error) {
      console.log(error);

      toast.error("Failed to submit adoption request");
    }
  };

  return (
    <div
      className="mt-10 rounded-[35px] p-6 md:p-10 overflow-hidden relative"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(16px)",
      }}
    >
      
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#A8E6CF]/10 blur-[120px] rounded-full"></div>

     
      {success && (
        <div
          className="rounded-[30px] p-10 text-center relative z-10"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full border-4 border-[#A8E6CF] flex items-center justify-center">
              <span className="text-5xl text-[#A8E6CF]">
                ✓
              </span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Request Submitted!
          </h2>

          <p className="text-white/60 text-lg leading-8 max-w-2xl mx-auto mb-8">
            Your adoption request for{" "}
            <span className="text-[#A8E6CF] font-bold">
              {pet?.petName}
            </span>{" "}
            has been sent to the owner successfully.
            You can track the request status from your
            My Requests page.
          </p>

          <Link href="/dashboard/my-requests">
            <Button
              className="h-[58px] px-10 rounded-2xl text-white text-lg font-bold"
              style={{
                background:
                  "linear-gradient(90deg,#4A90A4,#A8E6CF)",
              }}
            >
              View My Requests
            </Button>
          </Link>
        </div>
      )}

      {/* Form */}
      {!success && (
        <>
       
          <div className="mb-10 relative z-10">
            <p className="text-[#A8E6CF] uppercase tracking-[8px] text-sm mb-4">
              Adoption Form
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
              Adopt {pet?.petName}
            </h2>

            <p className="text-white/60 text-lg leading-8 max-w-2xl">
              Fill out the form below to send your
              adoption request and give this lovely pet a
              forever home.
            </p>
          </div>

        
          <form
            onSubmit={handleAdoptPet}
            className="space-y-8 relative z-10"
          >
           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-[26px] px-6 py-5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-white/50 text-sm mb-3">
                  Pet Name
                </p>

                <Input
                  defaultValue={pet?.petName}
                  readOnly
                  variant="flat"
                  radius="lg"
                  
                />
              </div>

              <div
                className="rounded-[26px] px-6 py-5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-white/50 text-sm mb-3">
                  Your Name
                </p>

                <Input
                  defaultValue={user?.name}
                  readOnly
                  variant="flat"
                  radius="lg"
                  
                />
              </div>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-[26px] px-6 py-5 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p className="text-white/50 text-sm mb-3">
                  Your Email
                </p>

                <Input
                  defaultValue={user?.email}
                  readOnly
                  type="email"
                  variant="flat"
                  radius="lg"
                  className=" break-all"
                />
              </div>

              <div
                className="rounded-[26px] px-6 py-5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <DateField
                  onChange={setPickupDate}
                  className="w-full"
                  name="pickupDate"
                >
                  <Label className="text-white/50 text-sm mb-3 block">
                    Pickup Date
                  </Label>

                  <DateField.Group
                    className="h-[52px] rounded-2xl px-4 border border-white/70"
                    style={{
                      background:
                        "rgba(255,255,255,0.15)",
                    }}
                  >
                    <DateField.Input className="text-white">
                      {(segment) => (
                        <DateField.Segment
                          segment={segment}
                        />
                      )}
                    </DateField.Input>
                  </DateField.Group>
                </DateField>
              </div>
            </div>

          
            <div
              className="rounded-[30px] px-6 py-5"
              style={{
                background: "rgba(255,255,255,0.05)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <p className="text-white/50 text-sm mb-4">
                Message To Owner
              </p>

              <TextArea
                placeholder="Tell the owner why you'd be a great match for this pet..."
                variant="flat"
                radius="lg"
                rows={8}
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                className=" w-full"
              />
            </div>

            
            <Button
              type="submit"
              className="w-full h-[72px] rounded-[28px] text-white text-xl font-bold transition duration-300 hover:scale-[1.01]"
              style={{
                background:
                  "linear-gradient(90deg,rgba(74,144,164,0.85),rgba(168,230,207,0.85))",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center gap-4">
                <FaPaw size={22} />
                Submit Adoption Request
              </div>
            </Button>
          </form>
        </>
      )}
    </div>
  );
};

export default AdoptPet;