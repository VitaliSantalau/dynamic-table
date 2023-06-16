import { AppState } from 'store/store';


export const selectSelectedRow = (state: AppState) => state.table.selectedRow;

export const selectSelectedBook = (state: AppState) => state.table.selectedBook;

export const selectDetailsBook = (state: AppState) => state.table.detailsBook;
