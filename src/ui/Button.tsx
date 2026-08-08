"use client";

import type { ReactNode } from "react";
import { ButtonBack, ButtonFront } from "./primitives";

export interface IButtonProps {
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({ alt, form, disabled, onClick, children }: IButtonProps) => (
  <ButtonBack $alt={alt} $form={form} $disabled={disabled}>
    {children}
    <ButtonFront $alt={alt} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
