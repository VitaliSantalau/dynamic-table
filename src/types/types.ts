export enum TableColumns {
  id = 'id',
  author = 'author',
  title = 'title',
  language = 'language',
  published = 'published',
}

export type TBook = {
  [TableColumns.id]: string;
  [TableColumns.author]: string;
  [TableColumns.title]: string;
  [TableColumns.language]: string;
  [TableColumns.published]: string;
}
