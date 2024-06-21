import { promoCodeFormProps } from "@/Utils/typeComponent";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputSubmit from "../Inputs/submit";
import { Box, Modal } from "@mui/material";
import Form from "../Form/Form";
import InputForm from "../Inputs/inputForm";
import { addPromoCode } from "@/Services/promoCode/promoCode";
import { schemaPromoCode } from "@/Validator/validatorForm";
import { toast } from "react-toastify";

const ModalCreatePromoCode = () => {
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
  function handleClose() {
    setOpen(false);
  }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<promoCodeFormProps>({
    mode: "onChange",
    resolver: yupResolver(schemaPromoCode),
  });
  const onSubmit: SubmitHandler<promoCodeFormProps> = async (data) => {
    const response = await addPromoCode(data);
    if(response.status === 201){
      handleClose()
      toast.success("create")
    }
  };
  return (
    <div>
      <InputSubmit
        content={"Create a PromoCode"}
        onClick={handleOpen}
        additionalCss="text-white"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col items-center">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            additionalCss="flex flex-col items-center text-center"
          >
            <InputForm
              labelCss="text-black"
              inputCss="text-center text-orange-500"
              content="Crypto's Name"
              type="text"
              verifInput={register("name")}
              errors={errors.name?.message}
            />
            <InputForm
              labelCss="text-black"
              inputCss="text-center text-orange-500"
              content={"Value"}
              type="number"
              verifInput={register("value")}
              errors={errors.value?.message}
            />
            <input
              type="submit"
              value={"Create A PromoCode"}
              className="styleSubmit relative z-20 px-5 py-2.5 transition-all ease-in duration-75 bg-orange-500 rounded-md border-2 border-slate-200  hover:text-orange-500 hover:bg-white hover:border-orange-500 cursor-pointer duration-500"
            />
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalCreatePromoCode;
