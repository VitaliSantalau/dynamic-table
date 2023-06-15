import { FC, useState } from "react";
import styles from "./HomeScreeen.module.css";
import { useOnMount } from "hooks/useOnMount";
import { fetchRows } from "api/api";
import { TBook, TRow } from "types/types";
import { Table } from "components/Table/Table";
import { Layout } from "components/Layout/Layout";
import { TABLE_COLUMNS } from "constants/constants";
import { Breadcrumb } from "components/Breadcrumb/Breadcrumb";
import { useAppDispatch } from "store/store";
import { hideLoader, showLoader } from "components/Loader/store/LoaderSlice";


export const HomeScreen: FC = () => {
  const [rows, setRows] = useState<TRow[]>([]);
  const [selectedRow, setSelectedRow] = useState<TRow | null>(null);
  const [selectedBook, setSelectedBook] = useState<TBook | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useAppDispatch();

  useOnMount(
    () => {
      dispatch(showLoader());

      fetchRows()
        .then((response) => {
          setRows(response);
          setIsLoading(false);
        })
        .catch((error) => console.log(error))
        .finally(() => dispatch(hideLoader()))
    }
  )


  const handleRowClick = (row: TRow) => {
    // handleUpdateBreadcrumbs(row.breadcrumb);
    setSelectedRow(row);
  };

  const handleBookClick = (book: TBook) => {
    // handleUpdateBreadcrumbs(book.breadcrumb);
    setSelectedBook(book);
  };


  return (
    <Layout>
      <main className={ styles.main }>
          <div className={ styles.container }>
            {
              !isLoading && 
                <> 
                  <Breadcrumb />
                  <Table
                    columns={ TABLE_COLUMNS }
                    data={ rows }
                    onRowClick={ handleRowClick }
                    selectedRow={ selectedRow }
                    onBookClick={ handleBookClick }
                    selectedBook={ selectedBook }
                  />
                </>
            }
          </div>
      </main>
    </Layout>
  )
};
