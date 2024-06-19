"use client";
import React, { useContext } from "react";
import InputSubmit from "./submit";
import { useRouter } from "next/navigation";
import { ContextReloadNeeded, Contextloading } from "@/context/Context";

const Logout = () => {
  const { push } = useRouter();
  const { setIsLoading } = useContext(Contextloading);
  return (
    <InputSubmit
      content={"LogOut"}
      onClick={() => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("role");
        setIsLoading(true);
        push("/signin");
      }}
    />
  );
};

export default Logout;
