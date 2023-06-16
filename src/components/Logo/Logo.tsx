import { FC } from "react";
import styles from "./Logo.module.css";
import { LogoIcon } from "assets";


export const Logo: FC = () => (
  <a href="https://www.kongsberg.com/" target="_blank" rel="noreferrer">
    <img
      src={ LogoIcon }
      alt="logo icon"
      className={ styles.icon }
    />
  </a>
);
