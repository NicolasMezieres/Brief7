import { headerProps } from "@/Utils/typeComponent";
import React from "react";

const Header = ({ children, additionalCss }: headerProps) => {
  return (
    <header className={`${additionalCss} bg-black flex justify-center mt-8`}>
      {children}
    </header>
  );
};

export default Header;
