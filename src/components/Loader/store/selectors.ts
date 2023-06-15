import { AppState } from 'store/store';


export const selectIsLoading = (state: AppState) => state.loader.isLoading;
