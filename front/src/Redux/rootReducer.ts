import { combineReducers } from "redux";
import TaskReducer from "src/modules/task/Redux";

const rootReducer = combineReducers({
  TaskReducer,
});

export default rootReducer;
