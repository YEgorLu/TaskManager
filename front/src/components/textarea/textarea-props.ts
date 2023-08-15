import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

interface HTMLTextAreaElementProps
  extends Omit<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    "ref"
  > {}

interface TextareaVariantsProps extends VariantProps<typeof textareaVariants> {}

export interface TextareaProps
  extends HTMLTextAreaElementProps,
    TextareaVariantsProps {}

export const textareaVariants = cva(
  "block h-fit w-full resize-none overflow-y-hidden bg-transparent outline-none",
);
