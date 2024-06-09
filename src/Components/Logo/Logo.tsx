"use client";
import "@/Components/style.css";
import { SiBitcoinsv } from "react-icons/si";
import "./Logo.css";
import { useEffect, useState } from "react";
const Logo = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [animation, setAnimation] = useState<string>("");
  useEffect(() => {
    if (isRotating === true) {
      setAnimation("rotating");
      setTimeout(() => {
        setIsRotating(false);
      }, 1900);
    } else {
      setAnimation("");
    }
  }, [isRotating]);
  return (
    <div className="flex flex-col items-center text-xl font-bold">
      <SiBitcoinsv
        onClick={() => {
          setIsRotating(true);
        }}
        size={110}
        color="darkOrange"
        title="logo picture coin"
        className={`${animation} cursor-pointer`}
      />
      <p className="mt-2 styleEmail">Poororich</p>
    </div>
  );
};

export default Logo;
