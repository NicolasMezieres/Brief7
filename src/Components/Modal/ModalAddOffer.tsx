"use client";
import { modalAddOfferProps } from "@/Utils/typeComponent";
import { Box, Modal } from "@mui/material";
import React, { useContext, useState } from "react";

import InputNumber from "../Inputs/inputNumber";
import InputSubmit from "../Inputs/submit";
import Paragraph from "../Paragraph/paragraph";
import Image from "next/image";
import { addOffer } from "@/Services/offer/offer";
import { toast } from "react-toastify";
import { ContextReloadNeeded } from "@/context/Context";

const ModalAddOffer = ({
  maxValue,
  additionalCss,
  content,
  crypto,
}: modalAddOfferProps) => {
  const { setIsReloadNeeded } = useContext(ContextReloadNeeded);
  const style = {
    position: "absolute" as "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "rgb(212 212 212);",
    border: "2px solid #F97316",
    borderRadius: 20,
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [amount, setAmount] = useState<number>(1);
  function handleClose() {
    setOpen(false);
  }
  async function createAnOffer() {
    const data = {
      id_crypto: crypto.id,
      amount: amount,
    };
    handleClose();
    const response = await addOffer(data);
    if (response.status === 201) {
      toast.success("Offer Create");
      setIsReloadNeeded(true);
    }
  }
  return (
    <div>
      <InputSubmit
        content={content}
        onClick={handleOpen}
        additionalCss="text-white"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col items-center gap-4">
          <Paragraph content={crypto.name} />
          <Image
            width={160}
            height={160}
            alt={`Picture of ${crypto.name}`}
            src={crypto.image}
            className="w-40 h-40 object-cover rounded-full"
          />
          <p className="text-black">You have : {maxValue}</p>
          <InputNumber
            valueMax={maxValue || 0}
            content={"How many crypto"}
            labelCss="text-black text-center"
            inputCss="text-black text-center mt-4"
            value={amount}
            setValue={setAmount}
          />

          <InputSubmit onClick={createAnOffer} content="Create an Offer" />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddOffer;
