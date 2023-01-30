import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  searchValue: string
  pizzaCategory: number
  sortOrder: string
  page: number
}

const initialState: CounterState = {
  searchValue: '',
  pizzaCategory: 0,
  sortOrder: '',
  page: 1
};

export const homeSlice = createSlice({
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
    },
    setPage (state, { payload }: PayloadAction<number>) {
      state.page = payload
    }
  },
});

export const { setSearchValue, setCategory, setSortOrder, setPage } = homeSlice.actions;

export default homeSlice.reducer;
