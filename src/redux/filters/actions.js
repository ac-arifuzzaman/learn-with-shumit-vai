import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const colorChanged = (color, changeType) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
export const statusChanged = (stats) => {
  return {
    type: STATUSCHANGED,
    payload: stats,
  };
};
