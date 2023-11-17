import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import { AppStateInterFace } from '../../../types/Interfaces';

const initialState: AppStateInterFace['search'] = {
  searchValue: localStorage.getItem('searchInputValue') || '',
};

export const searchSlice = createSlice({
  name: 'searchValue',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      localStorage.setItem('searchInputValue', action.payload);
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export const selectSearchValue = (state: RootState) => state.search.searchValue;

export default searchSlice.reducer;
