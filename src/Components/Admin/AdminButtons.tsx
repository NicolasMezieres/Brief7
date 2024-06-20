import React from "react";
import ModalAddCrypto from "../Modal/ModalAddCrypto";
import ModalCreatePromoCode from "../Modal/ModalCreatePromoCode";
import ModalAllPromoCode from "../Modal/ModalAllPromoCode";

const AdminButtons = () => {
  return (
    <div className="w-full flex justify-center gap-4 flex-wrap my-4 py-4">
      <ModalAddCrypto />
      <ModalCreatePromoCode />
      <ModalAllPromoCode />
    </div>
  );
};

export default AdminButtons;
