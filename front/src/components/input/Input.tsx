import { forwardRef } from "react";
import { InputProps } from "./input-props";
import { cn } from "../../helpers";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        className={cn(
          "rounded-[10px] bg-slate-50 px-[10px] py-[5px] text-black text-inherit outline-none hover:bg-slate-200 focus:bg-slate-300 active:bg-slate-300",
          className,
        )}
      />
    );
  },
);

export default Input;
