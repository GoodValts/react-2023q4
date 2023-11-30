import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormInterface } from './types';

const initialState: FormInterface = {
  name: null,
  age: null,
  mail: null,
  password: null,
  gender: null,
  photo: null,
  country: null,
};

export const reactFormSlice = createSlice({
  name: 'commonFormData',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

const reactFormReducer = reactFormSlice.reducer;
export default reactFormReducer;
