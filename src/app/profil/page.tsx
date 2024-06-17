"use client";
import Header from "@/Components/Header/Header";
import Logout from "@/Components/Inputs/logout";
import InputSubmit from "@/Components/Inputs/submit";
import Logo from "@/Components/Logo/Logo";
import Main from "@/Components/Main/Main";
import Wallet from "@/Components/Wallet/wallet";
import { getUserAssets } from "@/Services/user/user";
import { usersAssetsProps } from "@/Utils/type";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { push } = useRouter();
  const [dataUser, setDataUser] = useState<usersAssetsProps>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getMyAssets() {
      const response = await getUserAssets();
      if (response.status === 200) {
        setDataUser(response.data);
        setIsLoading(false);
      }
    }
    getMyAssets();
  }, []);
  return (
    <div>
      <Header>
        <div className="flex justify-between gap-4 md:gap-16">
          <div className="flex flex-col md:flex-row gap-8">
            <Wallet user={dataUser} />
            <InputSubmit
              content={"My Trade"}
              onClick={() => {
                push("/myTrade");
              }}
            />
          </div>
          <Logo />
          <div className="flex flex-col md:flex-row gap-8">
            <InputSubmit
              content={"Store"}
              onClick={() => {
                push("/home");
              }}
            />
            <Logout />
          </div>
        </div>
      </Header>
      {/* <Main></Main> */}
    </div>
  );
};

export default page;
