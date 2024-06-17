import { OffersProps, usersAssetsProps } from "@/Utils/type";
import React from "react";
import CardCrypto from "./CardCrypto";
import Image from "next/image";
import Paragraph from "../Paragraph/paragraph";
import { addTrade } from "@/Services/trade/trade";
import { toast } from "react-toastify";
import InputSubmit from "../Inputs/submit";
import { deleteOffer } from "@/Services/offer/offer";

export const OfferCard = ({
  offer,
  setIsReloadNeeded,
  user,
}: {
  offer: OffersProps;
  setIsReloadNeeded: React.Dispatch<React.SetStateAction<boolean>>;
  user: usersAssetsProps;
}) => {
  async function handleBuyCryptoOffer() {
    const res = await addTrade(offer.id);
    if (res.status === 201) {
      setIsReloadNeeded(true);
      toast.success("Succes");
    }
  }
  async function handleDeleteCryptoOffer() {
    const res = await deleteOffer(offer.id);
    if (res.status === 204) {
      setIsReloadNeeded(true);
      toast.success("Offer delete");
    }
  }
  //TODO FAIRE L'UPDATE OFFER mais bon sinon ta le header et le footer
  //Todo à modifier
  return (
    <div className="justify-self-center w-64 lg:w-80 h-96 gap-4 py-4 flex flex-col items-center border-2 border-white rounded-xl boxShadowOrange transition duration-700 hover:-translate-y-1 hover:scale-110">
      <Paragraph content={offer.Crypto.name} />
      <Image
        width={160}
        height={80}
        src={offer.Crypto.image}
        alt={`Picture of ${offer.Crypto.name}`}
        className="w-40 h-32 object-cover rounded-xl"
      />
      <p>
        Seller:{" "}
        {user.pseudo != offer.User.pseudo ? (
          `${offer.User.pseudo}`
        ) : (
          <span className="text-red-600">{offer.User.pseudo}</span>
        )}
      </p>
      <p>Number of tokens: {offer.amount}</p>
      <p className="font-bold">
        Price:
        {offer.Crypto.value * offer.amount <= user.dollarAvailables ? (
          <span className="styleEmail">
            {` ${(offer.Crypto.value * offer.amount).toFixed(2)} `}{" "}
          </span>
        ) : (
          <span className="text-red-600">
            {` ${(offer.Crypto.value * offer.amount).toFixed(2)} `}
          </span>
        )}
        $
      </p>
      {offer.Crypto.value * offer.amount <= user.dollarAvailables &&
        user.pseudo !== offer.User.pseudo && (
          //   <button
          //     onClick={handleBuyCryptoOffer}
          //     className="styleSubmit px-2 py-1 relative z-20 text-white transition-all ease-in duration-300 bg-orange-500 rounded-md border-2 border-slate-300  hover:text-orange-500 hover:bg-white hover:border-orange-500 cursor-pointer duration-500"
          //   >
          //     Buy
          // </button>
          <InputSubmit content={"buy"} onClick={handleBuyCryptoOffer} />
        )}

      {user.pseudo === offer.User.pseudo && (
        <div className="flex gap-4">
          <InputSubmit content="Update" onClick={handleDeleteCryptoOffer} />
          <InputSubmit content="Delete" onClick={handleDeleteCryptoOffer} />
        </div>
      )}

      {/* <CardCrypto cryptoProps={offer.Crypto} additionalCss={""} /> */}
    </div>
  );
};
