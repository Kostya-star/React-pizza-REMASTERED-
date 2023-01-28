import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  searchValue: string;
}

const initialState: CounterState = {
  searchValue: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.searchValue = payload;
    },
  },
});

export const { setSearchValue } = counterSlice.actions;

export default counterSlice.reducer;
