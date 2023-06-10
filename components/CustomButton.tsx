"use client";
import { CustomButtonPorps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonPorps) => {
  return (
    <button
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType || "button"}
    >
      <span className={`flex-1`}>{title} </span>
    </button>
  );
};

export default CustomButton;
