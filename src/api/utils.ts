import { TBook } from "types/types"


export const processBooksData = (book: any): TBook => {
  return {
    id: book.id,
    author: book.volumeInfo.authors[0],
    title: book.volumeInfo.title,
    language: book.volumeInfo.language,
    published: book.volumeInfo.publishedDate,
  }
};

