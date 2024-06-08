import { headerProps } from "@/Utils/typeComponent";
import React from "react";

const Header = ({ children }: headerProps) => {
  return <header className="">{children}</header>;
};

export default Header;
