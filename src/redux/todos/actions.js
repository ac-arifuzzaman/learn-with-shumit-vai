import {
    ADDED,
    ALLCOMPLETED,
    CLEARCOMPLETED,
    COLORSELECTED,
    TOOGLED
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const toogled = (todoId) => {
  return {
    type: TOOGLED,
    payload: todoId,
  };
};
export const colorselected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: { todoId, color },
  };
};
export const deleted = (todoId) => {
  return {
    type: COLORSELECTED,
    payload: todoId,
  };
};
export const allcompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
export const clearcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
