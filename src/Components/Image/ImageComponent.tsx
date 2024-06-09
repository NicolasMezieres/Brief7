import { imageProps } from "@/Utils/typeComponent";
import Image from "next/image";
import React from "react";

const ImageComponent = ({
  width,
  height,
  source,
  additionalCss,
  content,
}: imageProps) => {
  return (
    <Image
      width={width}
      height={height}
      src={source}
      alt={content}
      className={`${additionalCss} `}
    />
  );
};

export default ImageComponent;
