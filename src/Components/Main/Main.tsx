import { mainProps } from "@/Utils/typeComponent";
import React from "react";

const Main = ({ additionalCss, children }: mainProps) => {
  return <div className={`${additionalCss} mt-8`}>{children}</div>;
};

export default Main;
