export enum TableColumns {
  id = 'id',
  author = 'author',
  title = 'title',
  language = 'language',
  published = 'published',
}

export type TBreadcrumb = {
  label: string;
  level: number;
}

export type TRow = {
  [TableColumns.id]: string;
  [TableColumns.author]: string;
  [TableColumns.title]: string;
  [TableColumns.language]: string;
  [TableColumns.published]: string;
  breadcrumb: TBreadcrumb;
}

export type TBook = {
  id: string,
  title: string,
  breadcrumb: TBreadcrumb;
}

export type TDetailsBook = {
  id: string,
  title: string,
  image: string | undefined;
}
