import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPizza } from 'types';
import axios from 'axios';
import { baseRequest } from 'api/baseRequest';

interface IQueryParams {
  category: number;
  order: string;
  search: string;
}

export const fetchPizzas = createAsyncThunk(
  'home/fetchAllPizzas',
  async (params: IQueryParams) => {
    const { category, order, search } = params;

    const resp = await axios.get(`${baseRequest}`, {
      params: {
        ...(category > 0 ? { category } : {}),
        ...(order ? { sortBy: order } : {}),
        ...(search ? { search } : {}),
      },
    });
    // console.log(resp.data);

    return resp.data;
  },
);

export interface IHomeState {
  items: IPizza[];
  search: string;
  category: number;
  order: string;
  page: number;
  status: string;
}

const initialState: IHomeState = {
  items: [],
  search: '',
  category: 0,
  order: '',
  page: 1,
  status: '',
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // setItems(state, { payload }: PayloadAction<IPizza[]>) {
    //   state.items = payload;
    // },
    setSearchValue(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    setCategory(state, { payload }: PayloadAction<number>) {
      state.category = payload;
    },
    setSortOrder(state, { payload }: PayloadAction<string>) {
      state.order = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
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

export const { setSearchValue, setCategory, setSortOrder, setPage } =
  homeSlice.actions;

export default homeSlice.reducer;
