// import libraries
import * as React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
// import custom
import { IToastCardProps } from "./models/IToastCardProps";

const ToastCard: React.FC<IToastCardProps> = (props: React.PropsWithChildren<IToastCardProps>) => {
  const { item, removeById } = props;
  const Alert = (alertProp: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...alertProp} />;
  };

  const onClickRemoveNotification = (): void => {
    removeById();
  };

  return (
    <Snackbar
      key={item.id}
      open={true}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      autoHideDuration={4000}
      onClose={onClickRemoveNotification}
    >
      <Alert onClose={onClickRemoveNotification} severity={item.type}>
        {item.message}
      </Alert>
    </Snackbar>
  );
};

export default ToastCard;
