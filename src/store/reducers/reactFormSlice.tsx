import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
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

export const selectReactName = (state: RootState) => state.reactForm.name;

const reactFormReducer = reactFormSlice.reducer;
export default reactFormReducer;
