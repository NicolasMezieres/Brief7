import { footerProps } from "@/Utils/typeComponent";
import React from "react";

const Footer = ({ additionalCss, children }: footerProps) => {
  return (
    <footer
      className={`${additionalCss} bg-black flex justify-center items-center font-bold h-20`}
    >
      {children}
    </footer>
  );
};

export default Footer;
