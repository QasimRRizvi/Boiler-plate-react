// import library
import { Reducer } from "redux";
// import custom
import IAction from "models/IAction";
import IStore from "models/IStore";
import * as IToasts from "./models/IToast";
import * as TOAST_CONSTANTS from "./constants";

const initialState = {
  toasts: [] as IToasts.IToast[],
};

const ToastReducer: Reducer = (state = initialState, action: IAction<any>): Reducer<IStore> => {
  switch (action.type) {
    case TOAST_CONSTANTS.ADD_TOAST: {
      return { ...state, toasts: action.payload };
    }
    case TOAST_CONSTANTS.REMOVE_TOAST: {
      return { ...state, toasts: [] };
    }
    default:
      return state;
  }
};

export default ToastReducer;
