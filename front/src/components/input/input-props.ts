import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface InputHTMLProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "ref"
  > {}

export interface InputProps extends InputHTMLProps {}
