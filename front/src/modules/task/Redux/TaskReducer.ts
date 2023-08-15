import { Task } from "./Types";
import { createSlice } from "@reduxjs/toolkit";
import { AddTask, SelectTask } from "./Types";
import { CreateOrUpdateTask } from "./Types/ActionTypes/CreateOrUpdateTask";

interface TaskState {
  tasks: Task[];
  selectedTaskIndex: number;
}

const defaultState: TaskState = {
  tasks: [
    { heading: "task 1", content: "content 1" },
    { heading: "task 2", content: "content 2" },
    { heading: "task 3", content: "content 3" },
  ],
  selectedTaskIndex: -1,
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState: defaultState,
  reducers: {
    addTask(state, { payload: task }: AddTask) {
      state.tasks.push({ ...task });
    },

    selectTask(state, { payload: index }: SelectTask) {
      if (index < -1 || index >= state.tasks.length) return;
      state.selectedTaskIndex = index;
    },

    createOrUpdateTask(state, { payload: task }: CreateOrUpdateTask) {
      const taskIndex = state.tasks.findIndex(
        (t) => t.heading === task.heading,
      );
      if (taskIndex !== -1) {
        state.tasks[taskIndex] = task;
        return;
      }
      state.tasks.push({ ...task });
    },
  },
});

export const { addTask, selectTask, createOrUpdateTask } = taskSlice.actions;

export default taskSlice.reducer;
