"use client";
import { CardContainerProps } from "@/Utils/typeComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

const CardContainer = ({ children, additionalCss }: CardContainerProps) => {
  return (
    <div className={`${additionalCss} h-96 mt-8 w-full md:w-4/5 lg:w-5/6 p-4`}>
      {children}
    </div>
  );
};

export default CardContainer;
