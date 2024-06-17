import { inputNumberProps } from "@/Utils/typeComponent";
import React from "react";

const InputNumber = ({
  value,
  valueMax,
  setValue,
  labelCss,
  inputCss,
  content,
}: inputNumberProps) => {
  function changeValue(newValue: number) {
    if (newValue >= valueMax) {
      setValue(valueMax);
    } else if (newValue <= 0) {
      setValue(0);
    } else {
      setValue(newValue);
    }
  }
  return (
    <div className="flex flex-col items-center">
      <label className={`${labelCss} `}>{content}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          changeValue(Number(e.target.value));
        }}
        className={`${inputCss} `}
      />
    </div>
  );
};

export default InputNumber;
