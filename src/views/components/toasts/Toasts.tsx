// import libraries
import React from "react";
import { connect } from "react-redux";
// import custom
import IStore from "models/IStore";
import * as IToasts from "stores/toasts/models/IToast";
import * as ToastActions from "stores/toasts/ToastAction";
import ToastCard from "../toastCard/ToastCard";
import { IToastsProps } from "./models/IToastsProps";

const ToastsBases: React.FC<IToastsProps> = (props: React.PropsWithChildren<IToastsProps>) => {
  const { toasts, removeToast } = props;

  if (toasts.length === 0) {
    return null;
  }

  return (
    <div>
      {toasts.map((model: IToasts.IToast) => (
        <ToastCard key={model.id} item={model} removeById={removeToast} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  toasts: state.toastReducer.toasts,
});
const mapDispatchToProps = (dispatch: Function) => ({
  removeToast: () => dispatch(ToastActions.removeToast()),
});

const Toasts = connect(mapStateToProps, mapDispatchToProps)(ToastsBases);

export default Toasts;
