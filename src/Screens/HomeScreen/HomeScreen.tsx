import { FC, useState } from "react";
import styles from "./HomeScreeen.module.css";
import { useOnMount } from "hooks/useOnMount";
import { fetchBooks } from "api/api";
import { TBook } from "types/types";
import { Table } from "components/Table/Table";
import { Layout } from "components/Layout/Layout";
import { TABLE_COLUMNS } from "constants/constants";


export const HomeScreen: FC = () => {
  const [books, setBooks] = useState<TBook[]>([]);

  useOnMount(
    () => {
      fetchBooks()
        .then((response) => {
            setBooks(response);
            console.log(response)
        })
        .catch((error) => console.log(error))
    }
  )


  return (
    <Layout>
      <main className={ styles.main }>
          <div className={ styles.container }>
            <Table
              columns={ TABLE_COLUMNS }
              data={ books }
            />
          </div>
      </main>
    </Layout>
  )
};
