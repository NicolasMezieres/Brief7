import { ErrorMsgProps } from "@/Utils/typeComponent";
import React from "react";

const ErrorMsg = ({ additionalCss }: ErrorMsgProps) => {
  return (
    <p
      className={`${additionalCss} text-red-800 text-center text-lg font-bold select-none`}
    >
      This field is required
    </p>
  );
};

export default ErrorMsg;
