"use client";
import { apiCityProps, inputFormProps } from "@/Utils/typeComponent";
import React, { useEffect } from "react";
import ErrorMsg from "../errorMsg/ErrorMsg";

const InputForm = ({
  content,
  type,
  labelCss,
  inputCss,
  verifInput,
  errors,
  listData,
  autoComplete,
  defaultValue,
}: inputFormProps) => {
  return (
    <div className="w-60">
      <label className={`${labelCss} mb-3 block text-base font-medium `}>
        {content}
      </label>
      <input
        type={type}
        id={content}
        defaultValue={defaultValue}
        list={`${content}data`}
        placeholder={`Enter ${content}`}
        className={`${inputCss} w-60 rounded-md border border-[#e0e0e0] bg-white py-1.5 px-0 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md`}
        {...verifInput}
        autoComplete={autoComplete || "off"}
      />
      {errors && <ErrorMsg content={errors} />}
      <datalist id={`${content}data`}>
        {listData &&
          listData.map((element: apiCityProps) => {
            return <option value={`${element.nom}`}></option>;
          })}
      </datalist>
    </div>
  );
};

export default InputForm;
