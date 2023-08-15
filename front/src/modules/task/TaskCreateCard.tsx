import { FC, useState } from "react";
import Button from "src/components/button";
import Input from "src/components/input";
import { useAppDispatch } from "src/Redux/hooks";
import { createOrUpdateTask, Task } from "src/modules/task/Redux";
import { Textarea } from "src/components";

interface TaskCreateCardProps {
  task: Task;
  close: () => void;
}

const TaskCreateCard: FC<TaskCreateCardProps> = ({ task, close }) => {
  const [taskHeading, setTaskHeading] = useState<string>(task.heading);
  const [taskContent, setTaskContent] = useState<string>(task.content || "");
  const dispatch = useAppDispatch();
  const updateTask: () => any = () =>
    dispatch(
      createOrUpdateTask({ heading: taskHeading, content: taskContent }),
    );

  return (
    <div className="flex h-[66vh] w-[66vw] flex-col justify-between rounded-[20px] bg-black p-[20px]">
      <div className="">
        <Input
          className="mb-[20px]"
          value={taskHeading}
          onInput={(ev) => setTaskHeading(ev.currentTarget.value)}
        />
        <Textarea
          className="h-[30vh] max-h-[30vh] overflow-y-auto rounded-[10px] bg-slate-50 px-[10px] py-[5px] text-black hover:bg-slate-200 focus:bg-slate-300 active:bg-slate-300"
          value={taskContent}
          onInput={(ev) => setTaskContent(ev.currentTarget.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={() => {
            updateTask();
            close();
          }}
        >
          Сохранить
        </Button>
        <Button className="ml-[10px]" type="error" onClick={close}>
          Закрыть
        </Button>
      </div>
    </div>
  );
};

export default TaskCreateCard;
