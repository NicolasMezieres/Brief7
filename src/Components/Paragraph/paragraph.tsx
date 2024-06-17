import { paraProps } from "@/Utils/typeComponent";
import React from "react";

const Paragraph = ({ additionalCss, content }: paraProps) => {
  return <div className={`${additionalCss} styleEmail`}>{content}</div>;
};

export default Paragraph;
