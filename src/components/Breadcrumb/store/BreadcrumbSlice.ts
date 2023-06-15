import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INIT_BREADCRUMB } from 'constants/constants';
import { TBreadcrumb } from 'types/types';


const initialState: {
  breadcrumb: TBreadcrumb[],
} = {
  breadcrumb: [INIT_BREADCRUMB],
};


export const BreadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState,
  reducers: {
    updateBreadcrum: (state, action: PayloadAction<TBreadcrumb>) => {
      const currentBreadcrumb = state.breadcrumb;
      const newBreadcrumb = action.payload;

      // NOTE: find the index of the current level in the breadcrumb trail
      const currentIndex = currentBreadcrumb
        .findIndex((item) => item.level === newBreadcrumb.level);


      // NOTE: update breadcrumb trail based on the current level
      const updatedTrail = currentIndex !== -1 
      ? [...currentBreadcrumb.slice(0, currentIndex), newBreadcrumb] 
      : [...currentBreadcrumb, newBreadcrumb];

      state.breadcrumb = updatedTrail;
    },
    selfUpdateBreadcrum: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      const currentBreadcrumb = state.breadcrumb;

      const updatedTrail = currentBreadcrumb.slice(0, index + 1);

      state.breadcrumb = updatedTrail;
    },
  },
});


const { reducer, actions } = BreadcrumbSlice;

export const {
  updateBreadcrum, selfUpdateBreadcrum,
} = actions;

export default reducer;
