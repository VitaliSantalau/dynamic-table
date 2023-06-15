import { FC } from "react";
import styles from "./Breadcrumb.module.css";
import { useAppDispatch, useAppSelector } from "store/store";
import { selectBreadcrumb } from "./store/selectors";
import { selfUpdateBreadcrum } from "./store/BreadcrumbSlice";


export const Breadcrumb: FC = () => {
  const breadcrumb = useAppSelector(selectBreadcrumb);

  const dispatch = useAppDispatch();

  const handleClick = (index: number) => () => {
    dispatch(selfUpdateBreadcrum(index));

    // index === 0 && setSelectedRow(null);
    // index === 1 && setSelectedBook(null);
  };


  return (
    <section className={ styles.container }>
      {
        breadcrumb.map((item, index) => 
          <span key={ item.label } onClick={ handleClick(index) }>
            { item.label }
            {
              index < breadcrumb.length - 1 && 
                <span className={ styles.separator }>
                  {'/'}
                </span>
            }
          </span>
        )
      }
    </section>
  )
};
