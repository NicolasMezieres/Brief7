"use client";
import CardContainer from "@/Components/Cards/CardContainer";
import CardUserAsset from "@/Components/Cards/CardUserAsset";
import { getUsersAssets } from "@/Services/user/user";
import { settings } from "@/Utils/slider";
import { usersAssetsProps } from "@/Utils/type";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const page = () => {
  const [users, setUsers] = useState<usersAssetsProps[]>([]);
  const {push} = useRouter();
  useEffect(() => {
    async function getAllUsersAssets() {
      const res = await getUsersAssets();
      if(res.response?.status === 401 || res.response?.status === 403){
        window.location.href = "http://ktr.solutions:3000/"
      }
      setUsers(res);
    }
    getAllUsersAssets();
  }, []);
  return (
    <div>
      <CardContainer additionalCss="w-full flex justify-center items-center flex-wrap gap-8">
        {users &&
          users.map((Element) => {
            return <CardUserAsset userInfo={Element} />;
          })}
      </CardContainer>
    </div>
  );
};

export default page;
