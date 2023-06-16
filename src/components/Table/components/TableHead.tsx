import { FC } from "react";
import { Thead, Tr, Th } from 'react-super-responsive-table';
import { TableColumns } from "types/types";


export const TableHead: FC<{
  columns: TableColumns[];
}> = ({
  columns,
}) => {
  return (
    <Thead>
      <Tr>
        {
          columns.map(column => 
            <Th key={ column }>
              { column }
            </Th>
          )
        }
      </Tr>
    </Thead>
  )
};
