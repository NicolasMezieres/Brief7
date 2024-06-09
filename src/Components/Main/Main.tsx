import { mainProps } from "@/Utils/typeComponent";
import React from "react";

const Main = ({ additionalCss, children }: mainProps) => {
  return <div className={`${additionalCss} `}>{children}</div>;
};

export default Main;
