import { FC } from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './table.css';
import { TRow, TableColumns } from "types/types";
import { Table as Ttable } from 'react-super-responsive-table';
import { TableHead } from "./components/TableHead";
import { TableBody } from "./components/TableBody";


export const Table: FC<{
  columns: TableColumns[];
  rows: TRow[];
}> = ({
  columns,
  rows,
}) => {
  
  return (
    <Ttable>
      <TableHead columns={ columns } />
      <TableBody
        columns={ columns }
        rows={ rows }
      />
    </Ttable>
  )
};
