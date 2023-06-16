import { FC } from "react";
import { Tbody } from "react-super-responsive-table";
import { TableColumns, TRow } from "types/types";
import { TableRow } from "./TableRow";
import { useAppSelector } from "store/store";
import { selectSelectedRow } from "../store/selectors";


export const TableBody: FC<{
  columns: TableColumns[];
  rows: TRow[];
}> = ({
  columns,
  rows,
}) => {
  const selectedRow = useAppSelector(selectSelectedRow);


  return (
    <Tbody>
      {
        rows.map((item: TRow) => (
          <TableRow
            key={ item.id }
            columns={ columns }
            row={ item }
            selected={ selectedRow?.id === item.id }
          />
        ))
      }
    </Tbody>
  )
};
