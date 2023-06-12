import { FC } from "react";
import styles from "./Layout.module.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";


export const Layout: FC<{
  children: JSX.Element;
}> = ({
  children,
}) => {
  return (
    <div className={ styles.container }>
      <Header />
      {
        children
      }
      <Footer />
    </div>
  )
};
