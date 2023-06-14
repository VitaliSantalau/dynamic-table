import classNames from "classnames";
import { FC, useState } from "react";
import { Tbody, Td, Tr } from "react-super-responsive-table";
import { TableColumns, TBook } from "types/types";


export const TableBody: FC<{
  columns: TableColumns[];
  data: TBook[];
}> = ({
  columns,
  data,
}) => {
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  
  const renderRowBody = (item: TBook) => (
    <>
      <Tr 
        key={item.id} 
        className={ classNames(
          selectedRow === item.id && "selectedRow"
        ) }
        onClick={ () => setSelectedRow(item.id) }
      >
        {
          columns.map(column => 
            <Td key={ `${item.id}-${column}` }>
              { item[column] }
            </Td>
          )
        }
      </Tr>
      <div className={ classNames(
        "detailsRow",
        selectedRow === item.id && "expandedRow"
      ) }>
        fflflflfl
      </div>
    </>
    
  )


  return (
    <Tbody>
      {
        data.map(renderRowBody)
      }
    </Tbody>
  )
}