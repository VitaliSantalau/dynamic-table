import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TBook, TDetailsBook, TRow } from 'types/types';


const initialState: {
  selectedRow: TRow | null,
  selectedBook: TBook | null,
  detailsBook: TDetailsBook | null,
} = {
  selectedRow: null,
  selectedBook: null,
  detailsBook: null,
};


export const TableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    updateSelectedRow: (state, action: PayloadAction<TRow>) => {
      state.selectedRow = action.payload;
    },
    resetSelectedRow: (state) => {
      state.selectedRow = null;
    },
    updateSelectedBook: (state, action: PayloadAction<TBook>) => {
      state.selectedBook = action.payload;
    },
    resetSelectedBook: (state) => {
      state.selectedBook = null;
    },
    updateDetailsBook: (state, action: PayloadAction<TDetailsBook>) => {
      state.detailsBook = action.payload;
    },
    resetDetailsBook: (state) => {
      state.detailsBook = null;
    },
  },
});


const { reducer, actions } = TableSlice;

export const {
  updateSelectedRow, resetSelectedRow, updateSelectedBook, resetSelectedBook, updateDetailsBook, resetDetailsBook,
} = actions;

export default reducer;
