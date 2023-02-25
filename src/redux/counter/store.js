import { applyMiddleware, createStore } from "redux";
import rootReducer from "../rootReducer";

const myLoger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Befor: ${JSON.stringify(store.getState())}`);
  const upcommingState = [action].reduce(rootReducer, store.getState());
  console.log(JSON.stringify(upcommingState));
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLoger));

export default store;
