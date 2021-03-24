import { Reducer } from "redux";
import IAction from "models/IAction";
import IStore from "models/IStore";
import * as AUTH_CONSTANTS from "./constants";
import { getStorageItem } from "utilities/storage";

const initialState = {
  isLoading: false,
  isAuthenticated: getStorageItem("isAuthenticated"),
  email: getStorageItem("userEmail"),
};

const authReducer: Reducer = (state = initialState, action: IAction<any>): Reducer<IStore> => {
  switch (action.type) {
    case AUTH_CONSTANTS.CALL_AUTH: {
      return { ...state, isLoading: true };
    }
    case AUTH_CONSTANTS.FINISH_CALL_AUTH: {
      return { ...state, isLoading: false };
    }
    case AUTH_CONSTANTS.SUCCESS_AUTH: {
      const { isAuthenticated, email } = action.payload;
      return { ...state, isLoading: false, isAuthenticated, email };
    }
    case AUTH_CONSTANTS.LOGOUT: {
      return { ...state, isLoading: false, isAuthenticated: false, email: "" };
    }
    default:
      return state;
  }
};

export default authReducer;
