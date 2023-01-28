import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  searchValue: string;
  pizzaCategory: number
}

const initialState: CounterState = {
  searchValue: '',
  pizzaCategory: 0
};

export const counterSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSearchValue (state, { payload }: PayloadAction<string>) {
      state.searchValue = payload;
    },
    setCategory (state, { payload }: PayloadAction<number>) {
      state.pizzaCategory = payload;
    },
  },
});

export const { setSearchValue, setCategory } = counterSlice.actions;

export default counterSlice.reducer;
