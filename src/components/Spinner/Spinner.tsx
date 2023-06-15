import { FC } from "react";
import { BallTriangle } from "react-loader-spinner";
import styles from "./Spinner.module.css";


export const Spinner: FC<{
  isVisible: boolean;
}> = ({
  isVisible,
}) => 
  <BallTriangle
    height={ 100 }
    width={100}
    radius={5}
    color="#001639"
    ariaLabel="ball-triangle-loading"
    wrapperClass={ styles.spinner }
    visible={ isVisible }
  />;
