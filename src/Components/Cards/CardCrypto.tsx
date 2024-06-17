"use client";
import { CardCryptoProps } from "@/Utils/typeComponent";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import ModalCrypto from "../Modal/ModalCrypto";
import ModalAddOffer from "../Modal/ModalAddOffer";
import { ContextReloadNeeded } from "@/context/Context";
import ModalCryptoHistory from "../Modal/ModalCryptoHistory";
import ModalSellCrypto from "../Modal/ModalSellCrypto";

const CardCrypto = ({ cryptoProps, additionalCss, User }: CardCryptoProps) => {
  const { isReloadNeeded } = useContext(ContextReloadNeeded);
  const [userCryptoAmount, setUserCryptoAmount] = useState<number>(0);
  useEffect(() => {
    const index = User.UserHasCrypto.findIndex(
      (Element) => Element.Crypto.id === cryptoProps.id
    );
    if (index >= 0) {
      setUserCryptoAmount(User.UserHasCrypto[index].amount);
    } else setUserCryptoAmount(0);
    //
  }, [User, isReloadNeeded]);
  return (
    <div className="flex h-96 items-center justify-center">
      <div className="relative flex w-64 lg:w-80 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border-2 border-black  boxShadowOrange transition duration-500 hover:-translate-y-1 hover:scale-110">
        <div className="relative z-50 m-0 w-2/5 shrink-0  overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 ">
          <Image
            width={300}
            height={300}
            src={cryptoProps.image}
            alt={`photo de ${cryptoProps.name}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full py-2 h-72 flex flex-col items-center">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-center styleEmail antialiased">
            {cryptoProps.name}
          </h6>
          <h4 className="mb-2 block font-sans text-center font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            <p>Quantité restante :</p>
            {cryptoProps.quantity}
          </h4>
          <p className="block styleEmail font-sans text-center text-base font-normal leading-relaxed text-gray-700 antialiased">
            {`${cryptoProps.value.toFixed(2)} $`}
          </p>
          <p className="block font-sans text-center text-base font-normal leading-relaxed text-gray-700 antialiased">
            {`You have : ${userCryptoAmount}`}
          </p>
          <div className="flex mt-1.5 gap-4">
            {userCryptoAmount > 0 && (
              <ModalSellCrypto
                crypto={cryptoProps}
                maxValue={userCryptoAmount}
                content={"Sell"}
              />
            )}
            <ModalCrypto User={User} crypto={cryptoProps} isBuyVisible={true} />
          </div>
          {userCryptoAmount > 0 && (
            <div>
              <ModalAddOffer
                crypto={cryptoProps}
                maxValue={userCryptoAmount}
                additionalCss="mt-1.5"
                content={"Create an offer"}
              />
            </div>
          )}
          <div>
            <ModalCryptoHistory
              crypto={cryptoProps}
              additionalCss="mt-1.5"
              content={"Show History"}
            ></ModalCryptoHistory>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCrypto;
