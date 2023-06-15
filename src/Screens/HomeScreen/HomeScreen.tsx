import { FC, useState } from "react";
import styles from "./HomeScreeen.module.css";
import { useOnMount } from "hooks/useOnMount";
import { fetchRows } from "api/api";
import { TBook, TBreadcrumb, TRow } from "types/types";
import { Table } from "components/Table/Table";
import { Layout } from "components/Layout/Layout";
import { INIT_BREADCRUMB, TABLE_COLUMNS } from "constants/constants";
import { Breadcrumbs } from "components/Breadcrumbs/Breadcrumbs";
import { updateBreadcrumbs } from "./utils";


export const HomeScreen: FC = () => {
  const [rows, setRows] = useState<TRow[]>([]);
  const [selectedRow, setSelectedRow] = useState<TRow | null>(null);

  const [selectedBook, setSelectedBook] = useState<TBook | null>(null);

  const [breadcrumbs, setBreadcrumbs] = useState<TBreadcrumb[]>([INIT_BREADCRUMB]);


  useOnMount(
    () => {
      fetchRows()
        .then((response) => {
            setRows(response);
        })
        .catch((error) => console.log(error))
    }
  )


  const handleRowClick = (row: TRow) => {
    handleUpdateBreadcrumbs(row.breadcrumb);
    setSelectedRow(row);
  };

  const handleBookClick = (book: TBook) => {
    handleUpdateBreadcrumbs(book.breadcrumb);
    setSelectedBook(book);
  };

  const handleUpdateBreadcrumbs = (newBreadscrum: TBreadcrumb) => {
    const updatedTrail = updateBreadcrumbs({ breadcrumbs, newBreadscrum });
    setBreadcrumbs(updatedTrail);
  }


  const handleBreadcrumbClick = (index: number) => {
    const updatedTrail = breadcrumbs.slice(0, index + 1);

    setBreadcrumbs(updatedTrail);

    index === 0 && setSelectedRow(null);
    index === 1 && setSelectedBook(null);
  };


  return (
    <Layout>
      <main className={ styles.main }>
          <div className={ styles.container }>
            <Breadcrumbs 
              data={ breadcrumbs }
              onClick={ handleBreadcrumbClick }
            />
            <Table
              columns={ TABLE_COLUMNS }
              data={ rows }
              onRowClick={ handleRowClick }
              selectedRow={ selectedRow }
              onBookClick={ handleBookClick }
              selectedBook={ selectedBook }
            />
          </div>
      </main>
    </Layout>
  )
};
