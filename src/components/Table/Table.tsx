import { FC } from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './table.css';
import { TBook, TableColumns } from "types/types";
import { Table as Ttable } from 'react-super-responsive-table';
import { TableHead } from "./components/TableHead/TableHead";
import { TableBody } from "./components/TableBody/TableBody";


export const Table: FC<{
  columns: TableColumns[];
  data: TBook[];
}> = ({
  columns,
  data,
}) => {
  
  return (
    <Ttable>
      <TableHead columns={ columns } />
      <TableBody data={ data } columns={ columns } />
    </Ttable>
  )
};
