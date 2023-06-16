import { fetchBooks } from "api/api";
import classNames from "classnames";
import { updateBreadcrum } from "components/Breadcrumb/store/BreadcrumbSlice";
import { hideLoader, showLoader } from "components/Loader/store/LoaderSlice";
import { FC, useCallback, useState } from "react";
import { Td, Tr } from "react-super-responsive-table";
import { useAppDispatch, useAppSelector } from "store/store";
import { TBook, TRow, TableColumns } from "types/types";
import { resetDetailsBook, updateSelectedRow } from "../store/TableSlice";
import { DetailsBook } from "./DetailsBook";
import { Book } from "./Book";
import { selectSelectedBook } from "../store/selectors";

export const TableRow: FC<{
  columns: TableColumns[];
  row: TRow;
  selected: boolean;
}> = ({
  columns,
  row,
  selected,
}) => {
  const [books, setBooks] = useState<TBook[]>([]);

  const selectedBook = useAppSelector(selectSelectedBook);

  const dispatch = useAppDispatch();

  const handleRowClick = useCallback(
    () => {
      dispatch(showLoader());

      fetchBooks(row.author)
        .then(response => {
          dispatch(updateBreadcrum(row.breadcrumb));
          dispatch(updateSelectedRow(row));
          dispatch(resetDetailsBook());

          setBooks(response);
        })
        .catch((error) => console.log(error))
        .finally(() => dispatch(hideLoader()))
    },
    [dispatch, row]
  );


  return (
    <>
      <Tr
        className={ classNames(
          selected && "selectedRow"
        )}
        onClick={ handleRowClick }
      >
        {
          columns.map(column => 
            <Td key={`${row.id}-${column}`}>
              { row[column] }
            </Td>
          )
        }
      </Tr>
      <Tr className="detailsRow">
        <Td colSpan={ columns.length } >
          {
            selected &&
              <>
                another <b>Books</b> written by <b>{ row.author }</b>
                <ul>
                  {
                    books.map((item: TBook) => (
                      <Book
                        key={ item.id }
                        book={ item }
                        selected={ selectedBook?.id === item.id }
                      />
                    ))
                  }
                </ul>
                <DetailsBook />
              </>
          }
        </Td>
      </Tr>
    </>
  )
}
