import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

interface IProps {
  readonly isActive?: boolean;
  readonly className?: string;
}

const LoadingIndicator: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <Skeleton />;
};

export default LoadingIndicator;
