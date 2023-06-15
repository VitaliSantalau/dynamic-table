import { TBook, TRow } from "types/types"


export const processRowData = (data: any): TRow => ( 
  {
    id: data.id,
    author: data.volumeInfo.authors[0],
    title: data.volumeInfo.title,
    language: data.volumeInfo.language,
    published: data.volumeInfo.publishedDate,
    breadcrumb: {
      label: data.volumeInfo.authors[0] as unknown as string,
      level: 1,
    } 
  }
);


export const processBookData = (data: any): TBook => ( 
  {
    id: data.id,
    title: data.volumeInfo.title,
    breadcrumb: {
      label: data.volumeInfo.title,
      level: 2,
    } 
  }
);

