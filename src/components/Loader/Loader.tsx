import { FC } from "react";
import { BallTriangle } from "react-loader-spinner";
import styles from "./Loader.module.css";
import { useAppSelector } from "store/store";
import { selectIsLoading } from "./store/selectors";


export const Loader: FC = () => {
  const isVisible = useAppSelector(selectIsLoading);

  return (
    <BallTriangle
      height={ 100 }
      width={ 100 }
      radius={ 5 }
      color="#001639"
      ariaLabel="ball-triangle-loading"
      wrapperClass={ styles.loader }
      visible={ isVisible }
    />
  )
}
