import { TBreadcrumb, TableColumns } from "types/types";


export const TABLE_COLUMNS: TableColumns[] = [
  TableColumns.id,
  TableColumns.author,
  TableColumns.title,
  TableColumns.language,
  TableColumns.published,
];

export const INIT_BREADCRUMB: TBreadcrumb = {
  label: 'Books',
  level: 0,  
};
