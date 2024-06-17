import { inputSubmitProps } from "@/Utils/typeComponent";
import React from "react";
// (content: string) comme ça ca marche pas
const InputSubmit = ({ content, onClick, additionalCss }: inputSubmitProps) => {
  return (
    <div>
      <input
        type="submit"
        value={content}
        onClick={() => {
          onClick();
        }}
        className={`${additionalCss} styleSubmit relative z-20 px-2 py-1 transition-all ease-in duration-75 bg-orange-500 rounded-md border-2 border-slate-200  hover:text-orange-500 hover:bg-white hover:border-orange-500 cursor-pointer duration-500`}
      />
    </div>
  );
};

export default InputSubmit;
