"use client"
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";
import Logout from "@/Components/Inputs/logout";
import InputSubmit from "@/Components/Inputs/submit";
import Logo from "@/Components/Logo/Logo";
import Main from "@/Components/Main/Main";
import Paragraph from "@/Components/Paragraph/paragraph";
import Wallet from "@/Components/Wallet/wallet";
import LoadingPage from "@/Components/loadingPage/LoadingPage";
import { getUserAssets, getUserTrades } from "@/Services/user/user";
import { myTradeProps, usersAssetsProps } from "@/Utils/type";
import { Contextloading } from "@/context/Context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

const page = () => {
    const [myTradeList, setMyTradeList] = useState<myTradeProps[]>([])
    const [dataUser, setDataUser] = useState<usersAssetsProps>();
    const [isLoading, setIsLoading] = useState(true);
    const {push} = useRouter();
    const [isLoadingPage, setIsLoadingPage] = useState(true);
    async function getMyAssets() {
      const response = await getUserAssets();
      if (response.status === 200) {
        setDataUser(response.data);
        setIsLoading(false);
      }
      if (
        response.response?.status === 401 ||
        response.response?.status === 403
      ) {
        push("/signin");
      }
    }
    useEffect(()=>{
      getMyAssets();
      getUserTrades().then((res)=>{
        setMyTradeList(res)
      })
      setIsLoadingPage(false);
    },[])

    if (isLoadingPage) {
      return (
        <LoadingPage/>
      );
    }

  return <div>
     <Triangle
        visible={isLoading}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass="fixed z-20 top-24 right-20"
      />
      <Contextloading.Provider value={{ isLoading, setIsLoading }}>
    <Header additionalCss="my-4">
          <div className="flex justify-center items-center gap-4 md:gap-16">
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <Wallet user={dataUser} />
              <InputSubmit
                content={"Profil"}
                onClick={() => {
                  push("/profil");
                }}
              />
            </div>
            <Logo />
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              <InputSubmit
                content={"Store"}
                onClick={() => {
                  push("/home");
                  setIsLoading(true);
                }}
              />
              <Logout />
            </div>
          </div>
        </Header>
        </Contextloading.Provider>
        <Main >
         {myTradeList && myTradeList.length > 0 &&  <Paragraph content={"My Trades"} additionalCss="text-center my-4 text-xl" />}
         <div className="flex flex-wrap gap-8">
         {myTradeList && myTradeList.map((element)=>{
          return(
            <div className=" flex flex-wrap  w-full justify-center items-center ">
              <div className="border-white border-2 flex flex-wrap px-2">
              <div className=" flex flex-col justify-center items-center">
                <p className="styleEmail">{element.Crypto.name}</p>
                <Image width={80} height={80} alt={`picture of ${element.Crypto.name}`} src={element.Crypto.image} className={"w-20 h-20"} />
                <p>Value: <span className="styleEmail">{element.Crypto.value.toFixed(2)} $</span></p>
                <p>amount trade: {element.amount_traded}</p>
              </div>
              <div className=" text-pretty flex flex-col justify-center items-center border-x-[2px] px-2">
                <p className="styleEmail">Giver</p>
                <p>{element.Giver.pseudo}</p>
                <p>City: {element.Giver.city}</p>
                <p>currency: <span className="styleEmail">{element.Giver.dollarAvailables.toFixed(2)} $</span></p>
              </div>
              <div className=" flex flex-col justify-center items-center ">
                <p className="styleEmail">Receiver</p>
                <p>{element.Receiver.pseudo}</p>
                <p>City: {element.Receiver.city}</p>
                <p>currency: <span className="styleEmail">{element.Receiver.dollarAvailables.toFixed(2)} $</span></p>
              </div>
              </div>
            </div>
          )
         })}
         </div>
          {!myTradeList || myTradeList.length <=0 && <Paragraph content={"Haven't Trades"} additionalCss="text-center" />}
        </Main>
  </div>;
};

export default page;
