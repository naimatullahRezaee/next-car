import { MouseEventHandler } from "react";

export interface CustomButtonPorps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
