import { FC } from "react";
import styles from "./HomeScreeen.module.css";
import { Layout } from "../components/Layout/Layout";


export const HomeScreen: FC = () => {
  return (
    <Layout>
      <main className={ styles.main }>
          <div className="container">
          </div>
      </main>
    </Layout>
  )
};
