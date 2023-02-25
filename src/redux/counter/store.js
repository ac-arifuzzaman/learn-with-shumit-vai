import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import myLoger from "../middlewers/myLoger";
import rootReducer from "../rootReducer";

const store = createStore(rootReducer, applyMiddleware(myLoger, logger));

export default store;
