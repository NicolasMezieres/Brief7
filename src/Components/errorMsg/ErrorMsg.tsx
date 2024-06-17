import { ErrorMsgProps } from "@/Utils/typeComponent";
import React from "react";

const ErrorMsg = ({ additionalCss, content }: ErrorMsgProps) => {
  return (
    <p
      className={`${additionalCss} text-red-600 text-center text-lg font-bold select-none`}
    >
      {content}
    </p>
  );
};

export default ErrorMsg;
