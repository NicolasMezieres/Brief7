"use client";
import { WalletUserProps } from "@/Utils/typeComponent";
import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Contextloading } from "@/context/Context";

const Wallet = ({ user, totalDollar }: WalletUserProps) => {
  const { push } = useRouter();
  const [totalDollarPossible, setTotalDollarPossible] = useState(0);
  const { isLoading, setIsLoading } = useContext(Contextloading);
  useEffect(() => {
    if(user){
    dollarPossible();
  }
  }, [user]);
  async function dollarPossible(){
    let total = 0;
    user.UserHasCrypto.map((Element)=>{
      total = total + Element.amount * Element.Crypto.value;
    })
    setTotalDollarPossible(total);
  }
  return (
    <div>
      <div className="relative flex flex-col justify-center items-center">
        <button
          onClick={() => {
            setIsLoading(true);
            push("/profil");
          }}
          className="wallet w-20 styleSubmit relative z-20 px-2 py-1 transition-all ease-in duration-75 bg-orange-500 rounded-md border-2 border-slate-200  hover:text-orange-500 hover:bg-white hover:border-orange-500 cursor-pointer duration-500"
        >
          <p className="flex items-center">
            Wallet <IoIosArrowDown />
          </p>
        </button>
        <div className="wallet_burger w-60 border-2 mt-3 border-white opacity-0 absolute top-10 rounded-3xl p-2 bg-black duration-500">
          <div className=" text-white text-center text-sm font-bold py-1 duration-300 rounded-lg hover:bg-gray-800">
            <p>
              Money vailable:{" "}
              <span className="styleEmail">
                {" "}
                {user?.dollarAvailables.toFixed(2)}
              </span>{" "}
              $
            </p>
          </div>
          <div className=" text-white text-center text-sm font-bold py-1 duration-300 rounded-lg hover:bg-gray-800">
            <p>
              Total possible:{" "}
              <span className="styleEmail">
                {(Number(totalDollarPossible) + user?.dollarAvailables).toFixed(
                  2
                )}
              </span>{" "}
              $
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
