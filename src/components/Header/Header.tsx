import { FC, memo } from "react";
import styles from "./Header.module.css";
import { Logo } from "../Logo/Logo";


export const Header: FC = memo(() => (
  <header className={ styles.header }>
    <div className="container">
      <div className="row">
        <Logo />
        <h1 className={ styles.title }>
          Recruitment task
        </h1>
      </div>
    </div>
  </header>
));
