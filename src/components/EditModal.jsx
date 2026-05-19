"use client";

import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBox,
  TextArea,
} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

import { CiEdit } from "react-icons/ci";

const EditModal = ({ pet }) => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedPet = Object.fromEntries(formData.entries());

    console.log(updatedPet);
    const res = await fetch(`http://localhost:8000/pet/${pet._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedPet),
    });
    const data = await res.json();

    if (res.ok) {
      toast.success("Pet updated successfully!");
      redirect("/dashboard/my-listings");
    }
    
  };

  return (
    <Modal>
      <Button
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white transition duration-300 hover:scale-110 shrink-0"
        style={{
          background: "rgba(74,144,164,0.18)",
          border: "1px solid rgba(74,144,164,0.25)",
        }}
      >
        <CiEdit size={18} />
      </Button>

      <Modal.Backdrop className="bg-black/70 backdrop-blur-sm">
        <Modal.Container placement="center">
          <Modal.Dialog
            className="
              w-full
              max-w-5xl
              max-h-[90vh]
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-[#0B1120]/95
              backdrop-blur-2xl
              shadow-2xl
            "
          >
            <Modal.CloseTrigger className="text-white/60 hover:text-white" />

            <Modal.Header className="px-6 md:px-10 pt-8 pb-2 border-b border-white/10">
              <div className="flex items-start gap-4">
                <Modal.Icon className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/20">
                  <Envelope className="size-5" />
                </Modal.Icon>

                <div>
                  <h1 className="text-3xl md:text-4xl font-black text-white">
                    Edit{" "}
                    <span className="bg-gradient-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">
                      Pet Listing
                    </span>
                  </h1>

                  <p className="text-white/50 text-sm mt-2">
                    Update your pet information and keep the listing fresh.
                  </p>
                </div>
              </div>
            </Modal.Header>

            <Modal.Body className="p-0 overflow-y-auto">
              <div className="pr-2">
                <Surface
                  variant="default"
                  className="bg-transparent border-0 shadow-none"
                >
                  <form onSubmit={onSubmit} className="p-6 md:p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <TextField
                        name="petName"
                        defaultValue={pet?.petName}
                        isRequired
                      >
                        <Label className="text-sm font-medium text-white/70 mb-2 block">
                          Pet Name
                        </Label>

                        <Input
                          placeholder="e.g. Buddy"
                          className="
                            h-14
                            rounded-2xl
                            bg-white/5
                            border
                            border-white/10
                            text-white
                            placeholder:text-white/30
                            backdrop-blur-xl
                          "
                        />

                        <FieldError className="text-red-300" />
                      </TextField>

                      <div>
                        <Select
                          name="species"
                          defaultSelectedKeys={[pet?.species]}
                          isRequired
                          className="w-full"
                        >
                          <Label className="text-sm font-medium text-white/70 mb-2 block">
                            Species
                          </Label>

                          <Select.Trigger
                            className="
                              h-14
                              rounded-2xl
                              bg-white/5
                              border
                              border-white/10
                              text-white
                              backdrop-blur-xl
                            "
                          >
                            <Select.Value placeholder="Select species" />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Dog" textValue="Dog">
                                Dog
                              </ListBox.Item>

                              <ListBox.Item id="Cat" textValue="Cat">
                                Cat
                              </ListBox.Item>

                              <ListBox.Item id="Bird" textValue="Bird">
                                Bird
                              </ListBox.Item>

                              <ListBox.Item id="Rabbit" textValue="Rabbit">
                                Rabbit
                              </ListBox.Item>

                              <ListBox.Item id="Other" textValue="Other">
                                Other
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      <TextField name="breed" defaultValue={pet?.breed}>
                        <Label className="text-sm font-medium text-white/70 mb-2 block">
                          Breed
                        </Label>

                        <Input
                          placeholder="e.g. Labrador Retriever"
                          className="
                            h-14
                            rounded-2xl
                            bg-white/5
                            border
                            border-white/10
                            text-white
                            placeholder:text-white/30
                            backdrop-blur-xl
                          "
                        />

                        <FieldError className="text-red-300" />
                      </TextField>

                      <TextField name="age" defaultValue={String(pet?.age ?? "")} isRequired>
                        <Label className="text-sm font-medium text-white/70 mb-2 block">
                          Age (years)
                        </Label>

                        <Input
                          type="number"
                          placeholder="e.g. 2"
                          className="
                            h-14
                            rounded-2xl
                            bg-white/5
                            border
                            border-white/10
                            text-white
                            placeholder:text-white/30
                            backdrop-blur-xl
                          "
                        />

                        <FieldError className="text-red-300" />
                      </TextField>


                      <div>
                        <Select
                          name="gender"
                          defaultSelectedKeys={[pet?.gender]}
                          isRequired
                          className="w-full"
                        >
                          <Label className="text-sm font-medium text-white/70 mb-2 block">
                            Gender
                          </Label>

                          <Select.Trigger
                            className="
                              h-14
                              rounded-2xl
                              bg-white/5
                              border
                              border-white/10
                              text-white
                              backdrop-blur-xl
                            "
                          >
                            <Select.Value placeholder="Select gender" />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Male" textValue="Male">
                                Male
                              </ListBox.Item>

                              <ListBox.Item id="Female" textValue="Female">
                                Female
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      <div>
                        <Select
                          name="vaccinationStatus"
                          defaultSelectedKeys={[pet?.vaccinationStatus]}
                          className="w-full"
                        >
                          <Label className="text-sm font-medium text-white/70 mb-2 block">
                            Vaccination Status
                          </Label>

                          <Select.Trigger
                            className="
                              h-14
                              rounded-2xl
                              bg-white/5
                              border
                              border-white/10
                              text-white
                              backdrop-blur-xl
                            "
                          >
                            <Select.Value placeholder="Select status" />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item
                                id="Vaccinated"
                                textValue="Vaccinated"
                              >
                                Vaccinated
                              </ListBox.Item>

                              <ListBox.Item
                                id="Not Vaccinated"
                                textValue="Not Vaccinated"
                              >
                                Not Vaccinated
                              </ListBox.Item>

                              <ListBox.Item id="Partial" textValue="Partial">
                                Partial
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      <div className="md:col-span-2">
                        <TextField
                          name="imageUrl"
                          defaultValue={pet?.imageUrl}
                          isRequired
                        >
                          <Label className="text-sm font-medium text-white/70 mb-2 block">
                            Pet Image URL
                          </Label>

                          <Input
                            type="url"
                            placeholder="https://i.ibb.co/..."
                            className="
                              h-14
                              rounded-2xl
                              bg-white/5
                              border
                              border-white/10
                              text-white
                              placeholder:text-white/30
                              backdrop-blur-xl
                            "
                          />

                          <FieldError className="text-red-300" />
                        </TextField>
                      </div>

                      <div>
                        <Select
                          name="healthStatus"
                          defaultSelectedKeys={[pet?.healthStatus]}
                          isRequired
                          className="w-full"
                        >
                          <Label className="text-sm font-medium text-white/70 mb-2 block">
                            Health Status
                          </Label>

                          <Select.Trigger
                            className="
                              h-14
                              rounded-2xl
                              bg-white/5
                              border
                              border-white/10
                              text-white
                              backdrop-blur-xl
                            "
                          >
                            <Select.Value placeholder="Select health status" />
                            <Select.Indicator />
                          </Select.Trigger>

                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Healthy" textValue="Healthy">
                                Healthy
                              </ListBox.Item>

                              <ListBox.Item
                                id="Minor Issues"
                                textValue="Minor Issues"
                              >
                                Minor Issues
                              </ListBox.Item>

                              <ListBox.Item
                                id="Needs Care"
                                textValue="Needs Care"
                              >
                                Needs Care
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      <TextField
                        name="location"
                        defaultValue={pet?.location}
                        isRequired
                      >
                        <Label className="text-sm font-medium text-white/70 mb-2 block">
                          Location
                        </Label>

                        <Input
                          placeholder="e.g. New York, NY"
                          className="
                            h-14
                            rounded-2xl
                            bg-white/5
                            border
                            border-white/10
                            text-white
                            placeholder:text-white/30
                            backdrop-blur-xl
                          "
                        />

                        <FieldError className="text-red-300" />
                      </TextField>

                     <TextField name="adoptionFee" defaultValue={String(pet?.adoptionFee ?? "")}>
                        <Label className="text-sm font-medium text-white/70 mb-2 block">
                          Adoption Fee
                        </Label>

                        <Input
                          type="number"
                          placeholder="0"
                          className="
                            h-14
                            rounded-2xl
                            bg-white/5
                            border
                            border-white/10
                            text-white
                            placeholder:text-white/30
                            backdrop-blur-xl
                          "
                        />

                        <FieldError className="text-red-300" />
                      </TextField>

                      <TextField
                        name="ownerEmail"
                        defaultValue={pet?.ownerEmail}
                        isRequired
                      >
                        <Label className="text-sm font-medium text-white/70 mb-2 block">
                          Owner Email
                        </Label>

                        <Input
                          type="email"
                          placeholder="you@example.com"
                          className="
                            h-14
                            rounded-2xl
                            bg-white/5
                            border
                            border-white/10
                            text-white
                            placeholder:text-white/30
                            backdrop-blur-xl
                          "
                        />

                        <FieldError className="text-red-300" />
                      </TextField>

                      <div className="md:col-span-2">
                        <TextField
                          name="description"
                          defaultValue={pet?.description}
                          isRequired
                        >
                          <Label className="text-sm font-medium text-white/70 mb-2 block">
                            Description
                          </Label>

                          <TextArea
                            placeholder="Describe the pet..."
                            className="
                              min-h-[140px]
                              rounded-3xl
                              bg-white/5
                              border
                              border-white/10
                              text-white
                              placeholder:text-white/30
                              backdrop-blur-xl
                            "
                          />

                          <FieldError className="text-red-300" />
                        </TextField>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="
                          h-14
                          flex-1
                          rounded-2xl
                          border
                          border-white/10
                          bg-white/5
                          text-white
                          hover:bg-white/10
                        "
                      >
                        Cancel
                      </Button>

                      <Button
                        type="submit"
                        className="
                          h-14
                          flex-1
                          rounded-2xl
                          bg-gradient-to-r
                          from-cyan-500
                          to-emerald-400
                          text-white
                          font-bold
                          border-0
                        "
                      >
                        Update Listing
                      </Button>
                    </div>
                  </form>
                </Surface>
              </div>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
