import { createSlice } from '@reduxjs/toolkit';


const initialState: {
  isLoading: boolean,
} = {
  isLoading: false,
};


export const LoaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    showLoader: (state) => {
      state.isLoading = true;
    },
    hideLoader: (state) => {
      state.isLoading = false;
    },
  },
});


const { reducer, actions } = LoaderSlice;

export const {
  showLoader, hideLoader,
} = actions;

export default reducer;
