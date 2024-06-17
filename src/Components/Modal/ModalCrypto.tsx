import React, { useContext, useState } from "react";
import { Box, Modal } from "@mui/material";
import { cryptoProps, usersAssetsProps } from "@/Utils/type";
import { buyCrypto } from "@/Services/crypto/crypto";
import { toast } from "react-toastify";
import Image from "next/image";
import Paragraph from "../Paragraph/paragraph";
import { ContextReloadNeeded } from "@/context/Context";

const ModalCrypto = ({
  crypto,
  isBuyVisible,
  User,
}: {
  crypto: cryptoProps;
  isBuyVisible: boolean;
  User: usersAssetsProps;
}) => {
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
  const handleClose = () => {
    setOpen(false);
  };
  const [amount, setAmount] = useState<number>(0);

  function maxAmount(value: number) {
    console.log(value, "value");
    console.log(crypto.quantity, "quantity");
    if (value >= crypto.quantity) {
      setAmount(crypto.quantity);
    } else if (value < 1) {
      setAmount(0);
    } else {
      setAmount(value);
    }
  }
  function HandleCryptoBuy() {
    setIsReloadNeeded(true);
    buyCrypto(crypto.id, amount)
      .then((res) => {
        toast.success("Succes");
        handleClose();
      })
      .catch((e) => console.log(e));
  }

  return (
    <div>
      {isBuyVisible && crypto.quantity > 0 && (
        <button
          onClick={handleOpen}
          className="styleSubmit px-2 py-1 relative z-20 text-white transition-all ease-in duration-300 bg-orange-500 rounded-md border-2 border-slate-300 hover:text-orange-500 hover:bg-white hover:border-orange-500 cursor-pointer duration-500"
        >
          Buy
        </button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col items-center gap-3">
            <Paragraph
              content={crypto.name}
              additionalCss="styleEmail text-xl text-black text-center"
            />

            <Image
              width={160}
              height={160}
              alt=""
              className="w-40 h-40 object-cover rounded-full"
              src={crypto.image}
            />
            <p className="text-black text-center">
              Max Quantity : {crypto.quantity}
            </p>
            <input
              type="number"
              onChange={(e) => {
                maxAmount(Number(e.target.value));
              }}
              value={amount}
              className="text-black text-center indent-3 border-2 border-black rounded-full  w-1/3 content-center "
              placeholder="how many tokens?"
              required
            />
            <p className="text-black slected-none text-center">
              Cost per Unit :
              <span className="styleEmail">{`${crypto.value.toFixed(
                2
              )} `}</span>
              $
            </p>
            <div className="text-black slected-none text-center font-bold">
              {crypto.value * amount <= User.dollarAvailables ? (
                <p>
                  Total :
                  <span className="styleEmail">
                    {` ${(crypto.value * amount).toFixed(2)} `}
                  </span>
                  $
                </p>
              ) : (
                <p>
                  Total :
                  <span className="text-red-600">
                    {` ${(crypto.value * amount).toFixed(2)} `}
                  </span>
                  $
                </p>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={handleClose}
                className="bg-red-600 text-white rounded-md text-center w-24 md:w-32 p-2 m-4 "
              >
                Cancel
              </button>
              {crypto.value * amount <= User.dollarAvailables && (
                <button
                  className="bg-green-700 text-white rounded-md text-center w-24 md:w-32 p-2 m-4 "
                  onClick={() => {
                    HandleCryptoBuy();
                  }}
                >
                  Buy
                </button>
              )}
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalCrypto;
