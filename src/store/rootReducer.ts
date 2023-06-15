import { combineReducers } from '@reduxjs/toolkit';

import loaderReducer from 'components/Loader/store/LoaderSlice';

export const rootReducer = combineReducers({
  loader: loaderReducer,
});
