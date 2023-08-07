import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonVariantProps extends VariantProps<typeof buttonVariants> {}

interface HTMLButtonProps
  extends Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    "type" | "color" | "ref"
  > {}

export interface ButtonProps extends ButtonVariantProps, HTMLButtonProps {
  children: string | JSX.Element | JSX.Element[];
}

export const buttonVariants = cva(
  "text-white px-[10px] py-[5px] rounded-[10px] transition-opacity active:bg-opacity-100",
  {
    variants: {
      color: {
        dark: "bg-opacity-75 hover:bg-opacity-90",
        light: "bg-opacity-25 hover:bg-opacity-75",
      },
      type: {
        primary: "",
        ghost: "",
        error: "",
        transparent:
          "bg-opacity-0 bg-slate-900 hover:bg-opacity-50 active:bg-opacity-75",
      },
    },
    compoundVariants: [
      {
        type: "primary",
        color: "dark",
        className: "bg-slate-900",
      },
      {
        type: "primary",
        color: "light",
        className: "bg-slate-700",
      },
      {
        type: "error",
        color: "dark",
        className: "bg-red-950",
      },
      {
        type: "error",
        color: "light",
        className: "bg-red-600",
      },
      {
        type: "ghost",
        color: "dark",
        className: "border-slate-400",
      },
      {
        type: "ghost",
        color: "light",
        className: "border-slate-900",
      },
    ],
    defaultVariants: {
      type: "primary",
      color: "dark",
    },
  },
);
