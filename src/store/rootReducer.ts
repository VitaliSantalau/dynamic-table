import { combineReducers } from '@reduxjs/toolkit';

import loaderReducer from 'components/Loader/store/LoaderSlice';
import breadcrumbReducer from 'components/Breadcrumb/store/BreadcrumbSlice';
import tableReducer from 'components/Table/store/TableSlice';


export const rootReducer = combineReducers({
  loader: loaderReducer,
  breadcrumb: breadcrumbReducer,
  table: tableReducer,
});
