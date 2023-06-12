import { FC } from "react";
import styles from "./Logo.module.css";
import { LogoIcon } from "assets";


export const Logo: FC = () => {
  return (
    <img
      src={ LogoIcon }
      alt="logo icon"
      className={ styles.icon }
    />
  )
};
