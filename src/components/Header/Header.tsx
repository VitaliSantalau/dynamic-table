import { FC } from "react";
import styles from "./Header.module.css";
import { Logo } from "../Logo/Logo";


export const Header: FC = () => {
  return (
    <header className={ styles.header }>
      <div className="container">
        <div className="row">
          <Logo />
          <p className={ styles.title }>
            Recruitment task
          </p>
        </div>
      </div>
    </header>
  )
};
