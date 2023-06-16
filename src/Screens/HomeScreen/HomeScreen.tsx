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

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useOnMount(
    () => {
      dispatch(showLoader());

      fetchRows()
        .then((response) => {
          setRows(response);
        })
        .catch(() => setError(true))
        .finally(() => {
          setIsLoading(false);
          dispatch(hideLoader());
        })
    }
  )


  return (
    <Layout>
      <main className={ styles.main }>
          <div className={ styles.container }>
            {
              !isLoading && !error &&
                <> 
                  <Breadcrumb />
                  <Table
                    columns={ TABLE_COLUMNS }
                    rows={ rows }
                  />
                </>
            }
            {
              !isLoading && error &&
                <p className={ styles.error }>
                  Oops, something is wrong, please try again later
                </p>
            }
          </div>
      </main>
    </Layout>
  )
};
