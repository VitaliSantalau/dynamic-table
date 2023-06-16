import { FC } from "react";
import { useAppSelector } from "store/store";
import { selectDetailsBook } from "../store/selectors";
import { PhotoIcon } from "assets";

export const DetailsBook: FC = () => {
  const book = useAppSelector(selectDetailsBook);

  return (
    <section className="imageContainer">
      {
        !book &&
          <img
            src={ PhotoIcon }
            className="imageIcon"
            alt="placeholder"
          />
      }
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
  )
};
