import { usersAssetsProps } from "@/Utils/type";
import Image from "next/image";
import React from "react";

const CardUserAsset = ({ userInfo }: { userInfo: usersAssetsProps }) => {
  return (
    <div className="border-2 border-white w-80">
      <p>{userInfo.firstName}</p>
      <p>{userInfo.lastName}</p>
      <p>{userInfo.pseudo}</p>
      <p>cagnotte : {userInfo.dollarAvailables} $</p>
      {userInfo.UserHasCrypto &&
        userInfo.UserHasCrypto.map((Element) => {
          return (
            <div className="border-2 border-red-500">
              <p>{Element.Crypto.id}</p>
              <Image
                width={180}
                height={180}
                alt={`picture of ${Element.Crypto.image}`}
                className=""
                src={Element.Crypto.image}
              />
              <p>{Element.Crypto.name}</p>
              <p>Quantité restante : {Element.Crypto.quantity}</p>
              <p>{Element.Crypto.value} $</p>
              <p>Possede : {Element.amount}</p>
            </div>
          );
        })}
    </div>
  );
};

export default CardUserAsset;
