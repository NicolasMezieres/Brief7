import React, { useContext, useState } from "react";
import InputSubmit from "../Inputs/submit";
import { addPromoCodeProps } from "@/Utils/type";
import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Modal } from "@mui/material";
import InputForm from "../Inputs/inputForm";
import Form from "../Form/Form";
import { updatePromoCode } from "@/Services/promoCode/promoCode";
import { toast } from "react-toastify";
import ErrorMsg from "../errorMsg/ErrorMsg";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaPromoCode } from "@/Validator/validatorForm";
import { ContextReloadNeeded } from "@/context/Context";

const ModalUpdatePromoCode = ({
  promoCode,
}: {
  promoCode: addPromoCodeProps;
}) => {
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
  } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(schemaPromoCode),
  });
  const onSubmit: SubmitHandler<addPromoCodeProps> = async (data) => {
    const dataUpdate = {
      name: data.name,
      value: data.value,
      id: promoCode.id,
    };
    const response = await updatePromoCode(dataUpdate);
    if (response.status === 200) {
      toast.success("Update");
      handleClose();
      setIsReloadNeeded(true);
    }
  };
  const [open, setOpen] = useState(false);
  const handleOpen = async () => {
    setOpen(true);
  };
  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <InputSubmit
        content={"Update"}
        onClick={handleOpen}
        additionalCss="text-white"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="flex flex-col items-center ">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            additionalCss="flex flex-col items-center gap-4 text-center"
          >
            <InputForm
              labelCss="text-black"
              inputCss="text-center"
              content={"PromoCode name"}
              type={"text"}
              defaultValue={promoCode.name}
              verifInput={register("name")}
              errors={errors.name?.message}
            />
            <InputForm
              labelCss="text-black"
              inputCss="text-center"
              content={"Value"}
              type={"number"}
              defaultValue={promoCode.value}
              verifInput={register("value")}
              errors={errors.value?.message}
            />
            <InputSubmit content={"Update"} onClick={() => {}} />
          </Form>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalUpdatePromoCode;
{
  /* <label htmlFor="items1">PromoCode name</label>
            <input
              id="items1"
              type="text"
              defaultValue={promoCode.name}
              {...register("name", { required: "This field is required" })}
              className="w-60 rounded-md border border-[#e0e0e0] bg-white py-1.5 px-0 text-base text-center font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            <label htmlFor="items2">Value</label>
            <input
              id="items2"
              type="number"
                          defaultValue={promoCode.value}
                          {...register("value", {required: "This field is required",min: {1,"Need minimu 1"}} )}
              className="w-60 rounded-md border border-[#e0e0e0] bg-white py-1.5 px-0 text-base text-center font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
            {errors.name && <ErrorMsg content={errors.name.message} />} */
}
