import { FC, useCallback } from "react";
import styles from "./Breadcrumbs.module.css";
import { TBreadcrumb } from "types/types";


export const Breadcrumbs: FC<{
  data: TBreadcrumb[];
  onClick: (index: number) => void;
}> = ({
  data,
  onClick,
}) => {
  const handleClick = useCallback(
    (index: number) => () => onClick(index),
    [onClick]
  );

  return (
    <div className={ styles.container }>
      {
        data.map((item, index) => 
          <span key={ item.label } onClick={ handleClick(index) }>
            { item.label }
            {
              index < data.length - 1 && 
                <span className={ styles.separator }>
                  {'/'}
                </span>
            }
          </span>
        )

      }
    </div>
  )
};
