import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPizza } from 'types';

export interface IHomeState {
  items: IPizza[]
  search: string
  category: number
  order: string
  page: number
}

const initialState: IHomeState = {
  items: [],
  search: '',
  category: 0,
  order: '',
  page: 1
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setItems (state, { payload }: PayloadAction<IPizza[]>) {
      state.items = payload
    },
    setSearchValue (state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    setCategory (state, { payload }: PayloadAction<number>) {
      state.category = payload;
    },
    setSortOrder (state, { payload }: PayloadAction<string>) {
      state.order = payload
    },
    setPage (state, { payload }: PayloadAction<number>) {
      state.page = payload
    }
  },
});

export const { setSearchValue, setCategory, setSortOrder, setPage, setItems } = homeSlice.actions;

export default homeSlice.reducer;
