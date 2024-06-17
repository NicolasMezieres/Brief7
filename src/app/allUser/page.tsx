"use client";
import CardContainer from "@/Components/Cards/CardContainer";
import CardUserAsset from "@/Components/Cards/CardUserAsset";
import { getUsersAssets } from "@/Services/user/user";
import { settings } from "@/Utils/slider";
import { usersAssetsProps } from "@/Utils/type";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const page = () => {
  const [users, setUsers] = useState<usersAssetsProps[]>([]);
  useEffect(() => {
    async function getAllUsersAssets() {
      const res = await getUsersAssets();
      setUsers(res);
    }
    getAllUsersAssets();
  }, []);
  return (
    <div>
      <CardContainer additionalCss="flex flex-wrap">
        {users &&
          users.map((Element) => {
            return <CardUserAsset userInfo={Element} />;
          })}
      </CardContainer>
    </div>
  );
};

export default page;
