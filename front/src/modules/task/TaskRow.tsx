import React, {
  DetailedHTMLProps,
  FC,
  KeyboardEvent,
  LiHTMLAttributes,
} from "react";
import { Textarea } from "src/components";
import { TextareaProps } from "src/components/textarea";

interface TaskRowProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children?: string;
  editable?: {
    editing: boolean;
    onSave: (value?: string) => void;
  } & TextareaProps;
}

const TaskRow: FC<TaskRowProps> = ({ children, editable, ...props }) => {
  const onEnter = (ev: KeyboardEvent<HTMLTextAreaElement>) => {
    if (ev.key === "Enter") {
      editable?.onSave && editable.onSave();
    }
  };

  const onKeyDown = (ev: KeyboardEvent<HTMLTextAreaElement>) => {
    editable?.onKeyDown && editable.onKeyDown(ev);
    onEnter(ev);
  };

  return (
    <li
      className="text-wrap mb-2 w-full select-none rounded-[10px] bg-stone-300 bg-opacity-25 p-[10px]
      text-[20px] text-white transition-colors last:mb-0 hover:bg-opacity-50
      focus-visible:bg-opacity-75 active:bg-opacity-75
      peer-active:rounded-[0px]
      [&:has(textarea)]:bg-opacity-25 [&:has(textarea)]:hover:bg-opacity-25 [&:has(textarea)]:active:bg-opacity-25"
      {...props}
    >
      {editable?.editing && (
        <Textarea {...editable} onKeyDown={onKeyDown} rows={1} />
      )}
      {!editable?.editing && (
        <span className="break-words  leading-3">{children}</span>
      )}
    </li>
  );
};

export default TaskRow;
