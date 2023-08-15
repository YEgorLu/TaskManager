import { Task } from "../Task";

export interface CreateOrUpdateTask {
  type: string;
  payload: Task;
}
