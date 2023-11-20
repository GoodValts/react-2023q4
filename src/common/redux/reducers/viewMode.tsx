import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { AppStateInterface } from '../../../types/Interfaces';

const initialState: AppStateInterface['viewMode'] = {
  isLoading: false,
  page: 1,
  itemsPerPage: 5,
  itemId: undefined,
};

export const viewModeSlice = createSlice({
  name: 'viewMode',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    setItemId: (state, action: PayloadAction<number | undefined>) => {
      state.itemId = action.payload;
      console.log('setItemId=', state.itemId);
    },
  },
});

export const { setIsLoading, setPage, setItemsPerPage, setItemId } =
  viewModeSlice.actions;

export const selectIsLoading = (state: RootState) => state.viewMode.isLoading;
export const selectPage = (state: RootState) => state.viewMode.page;
export const selectItemId = (state: RootState) => state.viewMode.itemId;
export const selectItemsPerPage = (state: RootState) =>
  state.viewMode.itemsPerPage;

export default viewModeSlice.reducer;
