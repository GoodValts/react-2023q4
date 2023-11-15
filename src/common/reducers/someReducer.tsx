import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

const strSlice = createSlice({
  name: 'string',
  initialState,
  reducers: {
    trimStr: (state, action: PayloadAction<string>) => {
      state.value = action.payload.trim();
    },
  },
});

export const { trimStr } = strSlice.actions;
export default strSlice.reducer;
