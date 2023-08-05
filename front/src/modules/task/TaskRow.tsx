import { FC } from "react";

interface TaskRowProps {
  children: string;
}

const TaskRow: FC<TaskRowProps> = ({ children }) => {
  return (
    <li className="text-wra mb-2 w-full select-none  rounded-[10px] bg-stone-300 bg-opacity-25 p-[10px] text-white transition-colors last:mb-0 hover:bg-opacity-50 active:bg-opacity-75">
      <span className="break-words text-[20px] leading-3">{children}</span>
    </li>
  );
};

export default TaskRow;
