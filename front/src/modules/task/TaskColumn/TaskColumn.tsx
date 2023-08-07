import { FC, useEffect, useRef, useState } from "react";
import TaskRow from "../TaskRow";
import { useModal } from "../../modal";
import Modal from "../../modal/Modal";
import TaskCreateCard from "../TaskCreateCard";
import Footer from "./Footer";

const _tasks = ["task1", "task2", "task3"];

const TaskColumn: FC = () => {
  const [tasks, setTasks] = useState(_tasks);
  const addButtonRef = useRef<HTMLButtonElement>(null);

  const modal = useModal();
  const [creatingNew, setCreatingNew] = useState(false);
  const [headingNew, setHeadingNew] = useState("");
  useEffect(() => {
    console.log(headingNew);
  }, [headingNew]);

  const saveTask = (task: string) => setTasks([...tasks, task]);

  return (
    <>
      <div className="flex w-[324px] flex-col items-center justify-start rounded-[10px] bg-gray-950 px-[10px] py-[13px]">
        <div className="mb-4 flex w-full justify-start">
          <h2 className="text-[20px] text-white">Column Title</h2>
        </div>

        <ul className="mb-4 w-full">
          {tasks.map((t) => (
            <TaskRow key={t}>{t}</TaskRow>
          ))}
          {creatingNew && (
            <TaskRow
              editable={{
                editing: creatingNew,
                onBlur: (ev) => {
                  console.log(ev.relatedTarget);
                  if (ev.relatedTarget === addButtonRef.current) {
                    saveTask(headingNew);
                  }
                  setCreatingNew(false);
                },
                onInput: (ev) => setHeadingNew(ev.currentTarget.value),
                autoFocus: true,
              }}
            />
          )}
        </ul>
        <Footer
          editing={creatingNew}
          ref={addButtonRef}
          save={() => saveTask(headingNew)}
          enableEditing={() => setCreatingNew(true)}
        />
      </div>
      <Modal config={modal}>
        <TaskCreateCard />
      </Modal>
    </>
  );
};

export default TaskColumn;
