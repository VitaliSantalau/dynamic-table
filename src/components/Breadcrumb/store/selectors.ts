import { AppState } from 'store/store';


export const selectBreadcrumb = (state: AppState) => state.breadcrumb.breadcrumb;
