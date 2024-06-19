"use client";
import AdminButtons from "@/Components/Admin/AdminButtons";
import Header from "@/Components/Header/Header";
import Logout from "@/Components/Inputs/logout";
import InputSubmit from "@/Components/Inputs/submit";
import Logo from "@/Components/Logo/Logo";
import Main from "@/Components/Main/Main";
import ModalAddCrypto from "@/Components/Modal/ModalAddCrypto";
import ModalAllPromoCode from "@/Components/Modal/ModalAllPromoCode";
import ModalCreatePromoCode from "@/Components/Modal/ModalCreatePromoCode";
import Paragraph from "@/Components/Paragraph/paragraph";
import Wallet from "@/Components/Wallet/wallet";
import { getUserAssets } from "@/Services/user/user";
import { Roles } from "@/Utils/enum";
import { usersAssetsProps } from "@/Utils/type";
import { ContextReloadNeeded, Contextloading } from "@/context/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

const page = () => {
  const { push } = useRouter();
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [dataUser, setDataUser] = useState<usersAssetsProps>();
  const [role, setRole] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setRole(window.localStorage.getItem("role"));
    async function getMyAssets() {
      const response = await getUserAssets();
      if (response.status === 200) {
        setDataUser(response.data);
        setIsLoading(false);
      }
    }
    getMyAssets();
  }, [isReloadNeeded, isLoading]);

  if (isLoading) {
    return (
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass="fixed z-20 top-24 right-20"
      />
    );
  }
  return (
    <div>
      <Contextloading.Provider value={{ isLoading, setIsLoading }}>
        <Header>
          <div className="w-full flex items-center justify-center gap-4 md:gap-16  md:mr-7">
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <Wallet user={dataUser} />
              <InputSubmit
                content={"My Trade"}
                onClick={() => {
                  push("/myTrade");
                }}
              />
            </div>
            <Logo />
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <InputSubmit
                content={"Store"}
                onClick={() => {
                  setIsLoading(true);
                  push("/home");
                }}
              />
              <Logout />
            </div>
          </div>
        </Header>
      </Contextloading.Provider>
      <Main>
        {role === Roles.admin && (
          <ContextReloadNeeded.Provider
            value={{ isReloadNeeded, setIsReloadNeeded }}
          >
            <AdminButtons />
          </ContextReloadNeeded.Provider>
        )}
        {dataUser && (
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center rounded-full border-2 border-white p-4">
              <h2 className="">
                <span className="styleEmail">{dataUser.pseudo}</span>
              </h2>
              <p className="">
                <span className="styleEmail">
                  {dataUser.firstName} {dataUser.lastName}
                </span>
              </p>
              <p className="">
                <span className="styleEmail">{dataUser.age} years</span>
              </p>
              <p className="">
                <span className="styleEmail">
                  {dataUser.dollarAvailables.toFixed(2)} $
                </span>
              </p>
            </div>
          </div>
        )}
        {dataUser && (
          <h2 className="styleEmail text-center text-xl m-4">My Cryptos</h2>
        )}
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {dataUser &&
            dataUser.UserHasCrypto.map((Element) => {
              return (
                <div
                  key={Element.Crypto.id}
                  className="flex flex-col items-center py-4"
                >
                  <div className="border-2 border-white flex flex-col items-center p-4">
                    <h3 className="styleEmail">{Element.Crypto.name}</h3>
                    <Image
                      width={288}
                      height={288}
                      alt={`Picture of currency ${Element.Crypto.name}`}
                      className="w-52 h-52 object-cover rounded-full py-2"
                      src={Element.Crypto.image}
                    />
                    <p>
                      Value:{" "}
                      <span className="styleEmail">
                        {Element.Crypto.value.toFixed(2)} $
                      </span>
                    </p>
                    <p>
                      Amount:{" "}
                      <span className="styleEmail">{Element.amount}</span>
                    </p>
                    {Element.amount > 0 && (
                      <p>
                        Total Value:{" "}
                        <span className="styleEmail">
                          {(Element.amount * Element.Crypto.value).toFixed(2)} $
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
        {!dataUser && (
          <h3 className="styleEmail text-xl text-center">Haven't Crypto</h3>
        )}
      </Main>
    </div>
  );
};

export default page;
