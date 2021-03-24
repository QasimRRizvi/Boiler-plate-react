import * as IToasts from "./models/IToast";
import * as TOAST_CONSTANTS from "./constants";

export const addToast = (data: IToasts.IToast) => {
  return (dispatch: Function) => {
    dispatch({ type: TOAST_CONSTANTS.ADD_TOAST, payload: [data] });
  };
};

export const removeToast = () => {
  return (dispatch: Function) => {
    dispatch({ type: TOAST_CONSTANTS.REMOVE_TOAST });
  };
};
