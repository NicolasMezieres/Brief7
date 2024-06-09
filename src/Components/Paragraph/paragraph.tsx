import { paraProps } from "@/Utils/typeComponent";
import React from "react";

const Paragraph = ({ additionalCss, content }: paraProps) => {
  return <div className={additionalCss}>{content}</div>;
};

export default Paragraph;
