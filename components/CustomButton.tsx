"use client";
import { CustomButtonPorps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  isDisabled,
  rightIcon,
}: CustomButtonPorps) => {
  return (
    <button
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType || "button"}
    >
      <span className={`flex-1 ${textStyles}`}>{title} </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
