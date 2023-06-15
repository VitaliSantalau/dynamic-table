import { fetchBooks } from "api/api";
import classNames from "classnames";
import { useBinarySwitcher } from "hooks/useBinarySwitcher";
import { FC, Fragment, useCallback, useState } from "react";
import { Tbody, Td, Tr } from "react-super-responsive-table";
import { TableColumns, TBook, TRow } from "types/types";
import { Spinner } from "components/Spinner/Spinner";


export const TableBody: FC<{
  columns: TableColumns[];
  data: TRow[];
  onRowClick: (row: TRow) => void;
  selectedRow: TRow | null;
  onBookClick: (row: TBook) => void;
  selectedBook: TBook | null;
}> = ({
  columns,
  data,
  onRowClick,
  selectedRow,
  onBookClick,
  selectedBook,
}) => {
  const [books, setBooks] = useState<TBook[]>([]);
  const [isLoading, showSpinner, hideSpinner] = useBinarySwitcher(false);

  const handleRowClick = useCallback(
    (row: TRow) => () => {
      showSpinner();

      fetchBooks(row.author)
        .then(response => {
          onRowClick(row);
          setBooks(response);
        })
        .catch((error) => console.log(error))
        .finally(hideSpinner)
    },
    [hideSpinner, onRowClick, showSpinner]
  );

  const handleBookClick = useCallback(
    (book: TBook) => () => {
      onBookClick(book);
    },
    [onBookClick]
  );


  const renderRowBody = (item: TRow) => (
    <Fragment key={ item.id }>
      <Tr
        className={ classNames(
          selectedRow?.id === item.id && "selectedRow"
        )}
        onClick={handleRowClick(item)}
      >
        {
          columns.map(column => 
            <Td key={`${item.id}-${column}`}>
              { item[column] }
            </Td>
          )
        }
      </Tr>
      <Tr className={ classNames(
        selectedRow?.id === item.id && "detailsRow"
      ) }>
        <Td colSpan={ columns.length } >
          {
            selectedRow?.id === item.id &&
            <>
              another <b>Books</b> written by <b>{ item.author }</b>
              <ul>
                {
                  books.map(renderBook)
                }
              </ul>
            </>
          }
        </Td>
      </Tr>
    </Fragment>
  )

  const renderBook = (item: TBook) => 
    <li 
      key={ item.id }
      className={ classNames(
        selectedBook?.id === item.id && "selectedRow"
      )}
      onClick={handleBookClick(item)}

    >
      { item.title }
    </li>


  return (
    <>
      <Tbody>
        {data.map(renderRowBody)}
      </Tbody>
      <Spinner isVisible={ isLoading }/>
    </>
  )
}
