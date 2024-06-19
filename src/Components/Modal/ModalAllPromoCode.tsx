import React, { useContext, useEffect, useState } from "react";
import InputSubmit from "../Inputs/submit";
import { Box, Modal } from "@mui/material";
import { addPromoCodeProps } from "@/Utils/type";
import {
  allPromoCode,
  deletePromoCode,
  updatePromoCode,
} from "@/Services/promoCode/promoCode";
import { toast } from "react-toastify";
import ModalUpdatePromoCode from "./ModalUpdatePromoCode";
import { ContextReloadNeeded } from "@/context/Context";

const ModalAllPromoCode = () => {
  const { isReloadNeeded, setIsReloadNeeded } = useContext(ContextReloadNeeded);
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
  const [promoCodeList, setPromoCodeList] = useState<addPromoCodeProps[]>([]);
  const [open, setOpen] = useState(false);
  const handleOpen = async () => {
    setOpen(true);
    getPromoCodeList();
  };
  async function getPromoCodeList() {
    const response = await allPromoCode();
    setPromoCodeList(response);
  }
  function handleClose() {
    setOpen(false);
  }
  async function removePromoCode(id: string) {
    const response = await deletePromoCode(id);
    if (response.status === 204) {
      toast.success("Delete");
      getPromoCodeList();
      setIsReloadNeeded(true);
    }
  }
  useEffect(() => {
    getPromoCodeList();
  }, [isReloadNeeded]);
  async function modifyPromoCode(id: string, name: string, value: number) {
    const data = {
      id: id,
      name: name,
      value: value,
    };
    const response = await updatePromoCode(data);
    if (response.status === 200) {
      toast.success("Update");
      getPromoCodeList();
    }
  }
  return (
    <div>
      <InputSubmit
        content={"All PromoCode"}
        onClick={handleOpen}
        additionalCss="text-white"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="h-96 flex flex-col justify-center items-center gap-4"
        >
          <div className="flex flex-col gap-4 h-72 overflow-y-scroll">
            {promoCodeList &&
              promoCodeList.map((element) => {
                return (
                  <div
                    key={element.id}
                    className="w-52 flex flex-col  justify-center items-center p-2 gap-4 rounded-xl border-2 border-orange-500"
                  >
                    <p className="font-bold text-black text-center">
                      {element.name}
                    </p>
                    <p className="styleEmail">{element.value} $</p>
                    <div className="flex gap-4">
                      <ModalUpdatePromoCode promoCode={element} />
                      <InputSubmit
                        content="Delete"
                        onClick={() => {
                          removePromoCode(element.id);
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalAllPromoCode;
