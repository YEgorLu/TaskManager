import { RootState } from "../../../Redux/store";
import { Task } from "./Types";

export const taskSelectors = {
  tasks: (state: RootState): Task[] => state.TaskReducer.tasks,
  selectedTaskIndex: (state: RootState): number =>
    state.TaskReducer.selectedTaskIndex,
};
