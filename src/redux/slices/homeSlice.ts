import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseRequest } from 'api/baseRequest';
import axios from 'axios';
import { RootState } from 'redux/store';
import { getPizzasResponse } from 'types/getPizzasResponse';
import { IPizza } from 'types/types';

interface IQueryParams {
  category: number;
  order: string;
  search: string;
}

export const fetchPizzas = createAsyncThunk(
  'home/fetchAllPizzas',
  async (params: IQueryParams) => {
    const { category, order, search } = params;

    const resp = await axios.get<getPizzasResponse[]>(`${baseRequest}`, {
      params: {
        ...(category > 0 ? { category } : {}),
        ...(order ? { sortBy: order } : {}),
        ...(search ? { search } : {}),
      },
    });
    return resp.data;
  },
);

export interface IHomeState {
  items: IPizza[];
  search: string;
  category: number;
  order: string;
  status: string;
}

const initialState: IHomeState = {
  items: [],
  search: '',
  category: 0,
  order: 'rating',
  status: '', // loading | success | error
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    setCategory(state, { payload }: PayloadAction<number>) {
      state.category = payload;
    },
    setSortOrder(state, { payload }: PayloadAction<string>) {
      state.order = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(
        fetchPizzas.fulfilled,
        (state, { payload }: PayloadAction<IPizza[]>) => {
          state.status = 'success';
          state.items = payload;
        },
      )
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const homeSelector = ({ home }: RootState) => home;

export const { setSearchValue, setCategory, setSortOrder } = homeSlice.actions;

export default homeSlice.reducer;
