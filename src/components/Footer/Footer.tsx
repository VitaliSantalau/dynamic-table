import { FC, memo } from "react";
import styles from "./Footer.module.css";


export const Footer: FC = memo(() => (
  <footer className={ styles.footer }>
    <div className="container">
      <div className="row">
        <p className={ styles.text }>
          Vitali Santalau, 2023
        </p>
      </div>
    </div>
  </footer>
));
