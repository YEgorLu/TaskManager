import { FC } from "react";
import TaskRow from "./TaskRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";

const TaskColumn: FC = () => {
  return (
    <div className="flex w-max max-w-[324px] flex-col items-center justify-start rounded-[10px] bg-gray-950 px-[10px] py-[13px]">
      <div className="mb-4 flex w-full justify-start">
        <h2 className="text-[20px] text-white">Column Title</h2>
      </div>

      <ul className="mb-4 w-full">
        {["task1", "task2", "task3", "task4"].map((t) => (
          <TaskRow>{t}</TaskRow>
        ))}
      </ul>

      <div className="flex w-[220px] items-center justify-center text-stone-300 text-opacity-25 hover:text-opacity-75 active:text-opacity-100">
        <FontAwesomeIcon icon={faPlus} className="mr-[10px]" />
        <span className="">Добавить задачу</span>
      </div>
    </div>
  );
};

export default TaskColumn;
