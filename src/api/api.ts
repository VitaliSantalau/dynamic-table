import axios from "axios";
import { TBook, TDetailsBook, TRow} from "types/types";
import { processBookData, processDetailsBookData, processRowData } from "./utils";


const URL = 'https://www.googleapis.com/books/v1/volumes';


export const fetchRows = async (): Promise<TRow[]> => {
  const response = await axios.get(`${URL}?q=react`);

  return response.data.items.map(processRowData);
};

export const fetchBooks = async (author: string): Promise<TBook[]> => {
  const response = await axios.get(`${URL}?q=${author}`);

  return response.data.items.map(processBookData);
};

export const fetchDetailsBook = async (id: string): Promise<TDetailsBook> => {
  const response = await axios.get(`${URL}/${id}`);

  return processDetailsBookData(response.data);
};
