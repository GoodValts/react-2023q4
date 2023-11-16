import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import {
  AppState,
  productParams,
  responseInterface,
} from '../../types/Interfaces';

const initialState: AppState['search'] = {
  searchValue: localStorage.getItem('searchInputValue') || '',
  results: null,
  item: undefined,
};

export const searchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      localStorage.setItem('searchInputValue', action.payload);
      state.searchValue = action.payload;
    },
    setResults: (state, action: PayloadAction<responseInterface>) => {
      state.results = action.payload;
    },
    setItem: (state, action: PayloadAction<productParams>) => {
      state.item = action.payload;
    },
  },
});

export const { setSearchValue, setResults, setItem } = searchSlice.actions;

export const selectSearchValue = (state: RootState) => state.search.searchValue;
export const selectResults = (state: RootState) => state.search.results;
export const selectItem = (state: RootState) => state.search.item;

export default searchSlice.reducer;
