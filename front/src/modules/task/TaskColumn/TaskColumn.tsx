import { FC, useEffect, useRef, useState } from "react";
import TaskRow from "../TaskRow";
import { useModal } from "src/components/modal";
import Modal from "src/components/modal/Modal";
import TaskCreateCard from "../TaskCreateCard";
import Footer from "./Footer";
import { useAppDispatch, useAppSelector } from "src/Redux/hooks";
import { addTask, selectTask, Task, taskSelectors } from "../Redux";

const TaskColumn: FC = () => {
  const tasks = useAppSelector(taskSelectors.tasks);
  const selectedTaskIndex = useAppSelector(taskSelectors.selectedTaskIndex);
  const dispatch = useAppDispatch();

  const addButtonRef = useRef<HTMLButtonElement>(null);

  const modal = useModal();
  const [creatingNew, setCreatingNew] = useState(false);
  const [headingNew, setHeadingNew] = useState("");
  useEffect(() => {
    console.log(headingNew);
  }, [headingNew]);

  const saveTask = (task: Task) => {
    dispatch(addTask(task));
    setHeadingNew("");
    setCreatingNew(false);
  };

  const openTask = (index: number) => {
    dispatch(selectTask(index));
    modal.open();
  };

  return (
    <>
      <div className="flex w-[324px] flex-col items-center justify-start rounded-[10px] bg-gray-950 px-[10px] py-[13px]">
        <div className="mb-4 flex w-full justify-start">
          <h2 className="text-[20px] text-white">Column Title</h2>
        </div>

        <ul className="mb-4 w-full">
          {tasks.map((t, i) => (
            <TaskRow key={i} onClick={() => openTask(i)}>
              {t.heading}
            </TaskRow>
          ))}
          {creatingNew && (
            <TaskRow
              editable={{
                editing: creatingNew,
                onBlur: (ev) => {
                  console.log(ev.relatedTarget);
                  if (ev.relatedTarget === addButtonRef.current) {
                    saveTask({ heading: headingNew });
                  }
                  setCreatingNew(false);
                },
                onInput: (ev) => setHeadingNew(ev.currentTarget.value),
                autoFocus: true,
                onSave: () => saveTask({ heading: headingNew }),
              }}
            />
          )}
        </ul>
        <Footer
          editing={creatingNew}
          ref={addButtonRef}
          save={() => saveTask({ heading: headingNew })}
          enableEditing={() => setCreatingNew(true)}
        />
      </div>
      <Modal config={modal}>
        <TaskCreateCard task={tasks[selectedTaskIndex]} close={modal.close} />
      </Modal>
    </>
  );
};

export default TaskColumn;
