import { Task } from "../Task";

export interface AddTask {
  type: string;
  payload: Task;
}
