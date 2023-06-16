import { FC, useState } from "react";
import styles from "./HomeScreeen.module.css";
import { useOnMount } from "hooks/useOnMount";
import { fetchRows } from "api/api";
import { TRow } from "types/types";
import { Table } from "components/Table/Table";
import { Layout } from "components/Layout/Layout";
import { TABLE_COLUMNS } from "constants/constants";
import { Breadcrumb } from "components/Breadcrumb/Breadcrumb";
import { useAppDispatch } from "store/store";
import { hideLoader, showLoader } from "components/Loader/store/LoaderSlice";


export const HomeScreen: FC = () => {
  const [rows, setRows] = useState<TRow[]>([]);

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
                    rows={ rows }
                  />
                </>
            }
          </div>
      </main>
    </Layout>
  )
};
