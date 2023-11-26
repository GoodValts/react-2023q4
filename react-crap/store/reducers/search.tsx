import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AppStateInterface } from "@/types/Interfaces";

const initialState: AppStateInterface["search"] = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export const selectSearchValue = (state: RootState) => state.search.searchValue;

export const searchReducer = searchSlice.reducer;
