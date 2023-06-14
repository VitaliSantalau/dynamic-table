import axios from "axios";
import { TBook } from "types/types";
import { processBooksData } from "./utils";


const URL = 'https://www.googleapis.com/books/v1/volumes?q=react';


export const fetchBooks = async (): Promise<TBook[]> => {
  const response = await axios.get(`${URL}`);

  return response.data.items.map(processBooksData);
};
