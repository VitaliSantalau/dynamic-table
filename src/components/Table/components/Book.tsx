import { fetchDetailsBook } from "api/api";
import classNames from "classnames";
import { updateBreadcrum } from "components/Breadcrumb/store/BreadcrumbSlice";
import { showLoader, hideLoader } from "components/Loader/store/LoaderSlice";
import { FC, useCallback } from "react";
import { useAppDispatch } from "store/store";
import { TBook } from "types/types";
import { updateDetailsBook, updateSelectedBook } from "../store/TableSlice";

export const Book: FC<{
  book: TBook;
  selected: boolean;
}> = ({
  book,
  selected,
}) => {
  const dispatch = useAppDispatch();

  const handleBookClick = useCallback(
    () => {
      dispatch(showLoader());
  
      fetchDetailsBook(book.id)
        .then(response => {
          dispatch(updateBreadcrum(book.breadcrumb));

          dispatch(updateSelectedBook(book));

          dispatch(updateDetailsBook(response))
        })
        .catch((error) => console.log(error))
        .finally(() => dispatch(hideLoader()))
      
    },
    [book, dispatch]
  );


  return (
    <li 
      className={ classNames(
        "book",
        selected && "selectedBook"
      )}
      onClick={ handleBookClick }
    >
      { book.title }
    </li>
  )
};
