import { FC, forwardRef } from "react";
import { ButtonProps, buttonVariants } from "./button-props";
import { cn } from "src/helpers";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type, color, className, ...props }, ref) => {
    console.log(`gottype: ${type}`);
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ type, color }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export default Button;
