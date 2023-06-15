import axios from "axios";
import { TBook, TRow} from "types/types";
import { processBookData, processRowData } from "./utils";


const URL = 'https://www.googleapis.com/books/v1/volumes?q=';


export const fetchRows = async (): Promise<TRow[]> => {
  const response = await axios.get(`${URL}react`);

  return response.data.items.map(processRowData);
};

export const fetchBooks = async (author: string): Promise<TBook[]> => {
  const response = await axios.get(`${URL}${author}`);

  return response.data.items.map(processBookData);
};
