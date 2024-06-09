import { blurProps } from "@/Utils/typeComponent";
import React from "react";

const Blur = ({ additionalCss }: blurProps) => {
  return <div className={`${additionalCss} absolute`}></div>;
};

export default Blur;
