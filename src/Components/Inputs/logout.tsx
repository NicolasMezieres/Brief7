"use client";
import React from "react";
import InputSubmit from "./submit";
import { useRouter } from "next/navigation";

const Logout = () => {
  const { push } = useRouter();
  return (
    <InputSubmit
      content={"LogOut"}
      onClick={() => {
        window.localStorage.removeItem("token");
        push("/signin");
      }}
    />
  );
};

export default Logout;
