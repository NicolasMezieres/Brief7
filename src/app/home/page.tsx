"use client";
import AdminButtons from "@/Components/Admin/AdminButtons";
import CardContainer from "@/Components/Cards/CardContainer";
import CardCrypto from "@/Components/Cards/CardCrypto";
import { OfferCard } from "@/Components/Cards/OfferCard";
import Header from "@/Components/Header/Header";
import InputSearch from "@/Components/Inputs/inputSearch";
import Logout from "@/Components/Inputs/logout";
import InputSubmit from "@/Components/Inputs/submit";
import Logo from "@/Components/Logo/Logo";
import Main from "@/Components/Main/Main";
import Wallet from "@/Components/Wallet/wallet";
import LoadingPage from "@/Components/loadingPage/LoadingPage";
import { allCrypto, searchCrypto } from "@/Services/crypto/crypto";
import { allOffer } from "@/Services/offer/offer";
import { getUserAssets } from "@/Services/user/user";
import { Roles } from "@/Utils/enum";
import { settings } from "@/Utils/slider";
import { OffersProps, cryptoProps, usersAssetsProps } from "@/Utils/type";
import { ContextReloadNeeded, Contextloading } from "@/context/Context";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";
import Slider from "react-slick";

const page = () => {
  const { push } = useRouter();
  const [cryptos, setCryptos] = useState<cryptoProps[]>([]);
  const [offers, setOffers] = useState<OffersProps[]>([]);
  const [dataUser, setDataUser] = useState<usersAssetsProps>();
  const [searchDataCryptos, setSearchDataCryptos] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [role, setRole] = useState<string>("");
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
  async function getAllOffer() {
    const response = await allOffer();
    if (response.status === 200) {
      setOffers(response.data);
    }
  }
  useEffect(() => {
    setRole(window.localStorage.getItem("role"));
    setIsReloadNeeded(false);
    setIsLoading(true);
    setIsLoadingPage(false)
    getMyAssets();
    getAllOffer();
  }, [isReloadNeeded]);

  useEffect(() => {
    setIsReloadNeeded(false);
    searchDelay()
  }, [searchDataCryptos, isReloadNeeded]);
  async function researchCrypto() {
    setIsLoading(true);
    const response = await searchCrypto(searchDataCryptos);
    if (response.status === 200) {
      setCryptos(response.data);
    }
    setIsLoading(false);
  }
  function searchDelay(){
    researchCrypto();
    const delaySearch = setTimeout(() => {
      researchCrypto();
    }, 400);
    return () => {
      clearTimeout(delaySearch);
    };
  }
  if (isLoadingPage) {
    return (
      <LoadingPage/>
    );
  }
  return (
    <div>
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
        <Header additionalCss="mt-4">
          <div className="flex justify-center items-center gap-4 md:gap-16 md:mr-8">
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
                content={"Profil"}
                onClick={() => {
                  push("/profil");
                  setIsLoading(true);
                }}
              />
              <Logout />
            </div>
          </div>
        </Header>
      </Contextloading.Provider>
      {role === Roles.admin && (
        <ContextReloadNeeded.Provider
          value={{ isReloadNeeded, setIsReloadNeeded }}
        >
          <AdminButtons />
        </ContextReloadNeeded.Provider>
      )}
      <Main>
        <InputSearch
          valueChange={setSearchDataCryptos}
          placeholder={"Research crypto..."}
        />
        <ContextReloadNeeded.Provider
          value={{ isReloadNeeded, setIsReloadNeeded }}
        >
          {cryptos && dataUser && cryptos.length > 0 && (
            <div className="flex justify-center">
              <CardContainer>
                {cryptos.length > 3 ? (
                  <Slider {...settings}>
                    {cryptos &&
                      cryptos.map((crypto) => {
                        return (
                          <CardCrypto
                            key={crypto.id}
                            User={dataUser}
                            additionalCss=""
                            cryptoProps={crypto}
                          />
                        );
                      })}
                  </Slider>
                ) : (
                  <div className="flex justify-center lg:gap-28">
                    {cryptos.map((crypto) => {
                      return (
                        <CardCrypto
                          User={dataUser}
                          key={crypto.id}
                          additionalCss=""
                          cryptoProps={crypto}
                        />
                      );
                    })}
                  </div>
                )}
              </CardContainer>
            </div>
          )}
          <div className="w-full flex justify-center items-center">
            <CardContainer additionalCss="grid grid-cols-1 gap-y-10 md:gap-x-2 lg:gap-x-0 justify-center items-center md:grid-cols-2 md:w-3/4 lg:w-11/12 xl:grid-cols-3 xl:w-6/7 ">
              {offers &&
                dataUser &&
                offers.map((element) => (
                  <OfferCard
                    key={element.id}
                    offer={element}
                    user={dataUser}
                    setIsReloadNeeded={setIsReloadNeeded}
                  />
                ))}
            </CardContainer>
          </div>
        </ContextReloadNeeded.Provider>
      </Main>
    </div>
  );
};

export default page;
