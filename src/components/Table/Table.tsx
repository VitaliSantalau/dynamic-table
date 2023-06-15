import { FC } from "react";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './table.css';
import { TBook, TRow, TableColumns } from "types/types";
import { Table as Ttable } from 'react-super-responsive-table';
import { TableHead } from "./components/TableHead/TableHead";
import { TableBody } from "./components/TableBody/TableBody";


export const Table: FC<{
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
  
  return (
    <Ttable>
      <TableHead columns={ columns } />
      <TableBody 
        data={ data } 
        columns={ columns }
        onRowClick={ onRowClick }
        selectedRow={ selectedRow }
        onBookClick={ onBookClick }
        selectedBook={ selectedBook }
      />
    </Ttable>
  )
};
