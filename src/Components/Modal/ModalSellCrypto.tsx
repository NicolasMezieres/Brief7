import React, { useContext, useState } from "react";
import InputForm from "../Inputs/inputForm";
import InputSubmit from "../Inputs/submit";
import { modalAddOfferProps } from "@/Utils/typeComponent";
import { Box, Modal } from "@mui/material";
import InputNumber from "../Inputs/inputNumber";
import Paragraph from "../Paragraph/paragraph";
import Image from "next/image";
import { ContextReloadNeeded } from "@/context/Context";
import { sellCrypto } from "@/Services/crypto/crypto";
import { toast } from "react-toastify";

const ModalSellCrypto = ({
  maxValue,
  additionalCss,
  content,
  crypto,
}: modalAddOfferProps) => {
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
  const { setIsReloadNeeded } = useContext(ContextReloadNeeded);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState<number>(1);
  const handleOpen = () => {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  }
  async function handleSellCrypto() {
    //todo rajouter id_crypto et amount
    const data = {
      id_crypto: crypto.id,
      amount: amount,
    };
    const response = await sellCrypto(data);
    if (response.status === 201) {
      setIsReloadNeeded(true);
      handleClose();
      toast.success("Sell success");
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
          <InputSubmit onClick={handleSellCrypto} content="Sell your crypto" />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalSellCrypto;
