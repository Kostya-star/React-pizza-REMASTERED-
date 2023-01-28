import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  searchValue: string
  pizzaCategory: number
  sortOrder: string
}

const initialState: CounterState = {
  searchValue: '',
  pizzaCategory: 0,
  sortOrder: ''
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
    setSortOrder (state, { payload }: PayloadAction<string>) {
      state.sortOrder = payload
    }
  },
});

export const { setSearchValue, setCategory, setSortOrder } = counterSlice.actions;

export default counterSlice.reducer;
