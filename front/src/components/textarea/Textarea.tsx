import { FormEvent, forwardRef } from "react";
import { cn } from "src/helpers";
import { TextareaProps, textareaVariants } from "./textarea-props";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ onInput, rows = 1, ...props }, ref) => {
    const innerOnInput = (ev: FormEvent<HTMLTextAreaElement>) => {
      onInput && onInput(ev);
      resize(ev);
    };

    return (
      <textarea
        ref={ref}
        {...props}
        onInput={innerOnInput}
        rows={+rows}
        defaultValue={props.defaultValue}
        className={cn(textareaVariants(), props.className)}
      />
    );
  },
);

const resize = (ev: FormEvent<HTMLTextAreaElement>) => {
  const textArea = ev.currentTarget;
  const maxHeight = getMaxHeightPixels(textArea);
  const scrollHeight = textArea.scrollHeight;
  console.log(maxHeight);
  const newHeight =
    maxHeight !== null && maxHeight < scrollHeight ? maxHeight : scrollHeight;
  textArea.style.height = "0px";
  textArea.style.height = newHeight + "px";
};

export default Textarea;

const getMaxHeightPixels = (el: HTMLTextAreaElement): number | null => {
  const maxHeightStyle = el.style.maxHeight;
  console.log(el.style);
  console.log("max-height-style: ");
  console.log(maxHeightStyle);
  if (!maxHeightStyle) return null;

  if (maxHeightStyle.endsWith("%")) {
    return +maxHeightStyle.slice(0, maxHeightStyle.length - 1);
  }

  return +maxHeightStyle.slice(0, maxHeightStyle.length - 2);
};
