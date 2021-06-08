import { combineReducers } from "redux";
import addSgpaReducer from "./cgpaReducer";

const reducers = combineReducers({
  sgpa: addSgpaReducer,
});

export default reducers;
