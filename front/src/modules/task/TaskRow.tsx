import {
  DetailedHTMLProps,
  FC,
  FormEvent,
  HTMLAttributes,
  useCallback,
} from "react";

interface TaskRowProps {
  children?: string;
  editable?: {
    editing: boolean;
  } & DetailedHTMLProps<
    HTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;
}

const TaskRow: FC<TaskRowProps> = ({ children, editable }) => {
  const onInput = useCallback(
    (ev: FormEvent<HTMLTextAreaElement>) => {
      editable?.onInput && editable.onInput(ev);
      resize(ev);
    },
    [editable],
  );

  return (
    <li
      className="text-wrap mb-2 w-full select-none rounded-[10px] bg-stone-300 bg-opacity-25 p-[10px]
      text-white transition-colors last:mb-0 hover:bg-opacity-50 focus-visible:bg-opacity-75
      active:bg-opacity-75 peer-active:rounded-[0px]
      [&:has(textarea)]:bg-opacity-25 [&:has(textarea)]:hover:bg-opacity-25 [&:has(textarea)]:active:bg-opacity-25"
    >
      {editable?.editing && (
        <>
          <textarea
            {...editable}
            onInput={onInput}
            rows={1}
            className="peer block h-fit w-full resize-none overflow-y-hidden bg-transparent outline-none"
          />
        </>
      )}
      {!editable?.editing && (
        <span className="break-words text-[20px] leading-3">{children}</span>
      )}
    </li>
  );
};

const resize = (ev: FormEvent<HTMLTextAreaElement>) => {
  const textArea = ev.currentTarget;
  console.log(textArea.scrollHeight);
  textArea.style.height = "0px";
  textArea.style.height = textArea.scrollHeight + "px";
};

export default TaskRow;
