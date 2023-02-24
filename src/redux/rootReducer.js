import { combineReducers } from "redux";
import DynamicHooksCounter from "../components/DynamicHooksCounter";
import counterReducer from "./counter/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: DynamicHooksCounter,
});

export default rootReducer;
