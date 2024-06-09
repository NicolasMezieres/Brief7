import { inputProps } from "@/Utils/typeComponent";
import React from "react";

const InputForm = ({
  content,
  type,
  labelCss,
  inputCss,
  verifInput,
  errors,
}: inputProps) => {
  return (
    <div>
      <label className={`${labelCss} mb-3 block text-base font-medium `}>
        {content}
      </label>
      <input
        type={type}
        id={content}
        placeholder={`enter your ${content}`}
        className={`${inputCss} w-full rounded-md border border-[#e0e0e0] bg-white py-1.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
        {...verifInput}
      />
      {errors}
    </div>
  );
};

export default InputForm;
