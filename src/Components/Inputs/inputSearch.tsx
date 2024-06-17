import { inputSearchProps } from "@/Utils/typeComponent";
import React from "react";

const InputSearch = ({
  placeholder,
  valueChange,
  textAdditionalCss,
  submitAdditionalCss,
  divAdditionalCss,
}: inputSearchProps) => {
  return (
    <div className={`${divAdditionalCss} flex justify-center`}>
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          valueChange(e.target.value);
        }}
        className={`${textAdditionalCss} mr-3 text-center w-40 md:w-52 rounded-md relative z-10 text-center border-2 border-orange-600 text-orange-500 bg-white py-1 md:py-1.5 px-0 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
      />
      <input
        type="submit"
        value={"search"}
        className={`${submitAdditionalCss} styleSubmit relative z-20 px-4 md:px-6 py-1 md:py-2.5 transition-all ease-in duration-75 bg-orange-500 rounded-md border-2 border-slate-200  hover:text-orange-500 hover:bg-white hover:border-orange-500 cursor-pointer duration-500`}
      />
    </div>
  );
};
export default InputSearch;
