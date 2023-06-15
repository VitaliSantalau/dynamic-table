import { fetchBooks, fetchDetailsBook } from "api/api";
import classNames from "classnames";
import { hideLoader, showLoader } from "components/Loader/store/LoaderSlice";
import { FC, Fragment, useCallback, useState } from "react";
import { Tbody, Td, Tr } from "react-super-responsive-table";
import { useAppDispatch } from "store/store";
import { TableColumns, TBook, TDetailsBook, TRow } from "types/types";


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
  const [book, setBook] = useState<TDetailsBook | null>(null)

  const dispatch = useAppDispatch();


  const handleRowClick = useCallback(
    (row: TRow) => () => {
      dispatch(showLoader());
      setBook(null);

      fetchBooks(row.author)
        .then(response => {
          onRowClick(row);
          setBooks(response);
        })
        .catch((error) => console.log(error))
        .finally(() => dispatch(hideLoader()))
    },
    [dispatch, onRowClick]
  );

  const handleBookClick = useCallback(
    (book: TBook) => () => {
      dispatch(showLoader());
  
      fetchDetailsBook(book.id)
        .then(response => {
          onBookClick(book);
          setBook(response);
        })
        .catch((error) => console.log(error))
        .finally(() => dispatch(hideLoader()))
      
    },
    [dispatch, onBookClick]
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
        "detailsRow"
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
              <section className={ classNames(
                  selectedRow?.id === item.id && "imageContainer"
                )}
              >
                {
                  !!book && !book.image && 
                    <span className="imageText">
                      Image preview does not exist
                    </span>
                }
                {
                  !!book?.image &&
                    <img
                      src={ book?.image }
                      className="image"
                      alt="book preview"
                    />
                }
              </section>
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
        "book",
        selectedBook?.id === item.id && "selectedBook"
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
    </>
  )
}
