"use client";
import React, { useContext, useState } from "react";
import InputSubmit from "../Inputs/submit";
import { Box, Modal } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "../Inputs/inputForm";
import { cryptoFormProps } from "@/Utils/typeComponent";
import { addCrypto } from "@/Services/crypto/crypto";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema, schemaCrypto } from "@/Validator/validatorForm";
import Form from "../Form/Form";
import { toast } from "react-toastify";
import { ContextReloadNeeded } from "@/context/Context";

const ModalAddCrypto = () => {
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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<cryptoFormProps>({
    mode: "onChange",
    resolver: yupResolver(schemaCrypto),
  });

  const onSubmit: SubmitHandler<cryptoFormProps> = async (data) => {
    const response = await addCrypto(data);
    if (response.status === 201) {
      toast.success("Create");
      handleClose();
      setIsReloadNeeded(true);
    }
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <InputSubmit
        content={"Create a Crypto"}
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center gap-4 text-center text-black">
              <InputForm
                inputCss="text-center text-orange-500"
                content="Crypto's Name"
                type="text"
                verifInput={register("name")}
                errors={errors.name?.message}
              />
              <InputForm
                inputCss="text-center text-orange-500"
                content={"Value"}
                type="number"
                verifInput={register("value")}
                errors={errors.value?.message}
              />
              <InputForm
                inputCss="text-center text-orange-500"
                content={"Quantity"}
                type="number"
                verifInput={register("quantity")}
                errors={errors.quantity?.message}
              />
              <InputForm
                inputCss="text-center text-orange-500"
                content={"Url picture"}
                type="text"
                verifInput={register("image")}
                errors={errors.image?.message}
              />
              <input
                type="submit"
                value={"Create A Crypto"}
                className="styleSubmit relative z-20 px-5 py-2.5 transition-all ease-in duration-75 bg-orange-500 rounded-md border-2 border-slate-200  hover:text-orange-500 mb-2 hover:bg-white hover:border-orange-500 cursor-pointer duration-500"
              />
            </div>
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAddCrypto;
