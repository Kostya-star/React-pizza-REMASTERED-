import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseRequest } from 'api/baseRequest';
import axios from 'axios';
import { getPizzaResponse } from 'types/getPizzaResponse';
import { IPizza } from 'types/types';
import { Status } from 'types/enum';

export const fetchPizzaById = createAsyncThunk(
  'pizzaDetails/fetchById',
  async (id: number) => {
    const resp = await axios.get<getPizzaResponse>(`${baseRequest}/${id}`);
    return resp.data;
  },
);

interface IPizzaDetailsState {
  item: IPizza | null;
  status: Status;
}

const initialState: IPizzaDetailsState = {
  item: null,
  status: Status.LOADING, // loading | success | error,
};

export const pizzaDetailsSlice = createSlice({
  name: 'pizzaDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzaById.pending, (state) => {
        state.status = Status.LOADING;
        state.item = null;
      })
      .addCase(
        fetchPizzaById.fulfilled,
        (state, { payload }: PayloadAction<IPizza>) => {
          state.item = payload;
          state.status = Status.SUCCESS;
        },
      )
      .addCase(fetchPizzaById.rejected, (state) => {
        state.status = Status.ERROR;
        state.item = null;
      });
  },
});

// export const pizzaDetailsSelector = ({ pizzaDetails }: RootState) =>
//   pizzaDetails;

// export const {} = pizzaDetailsSlice.actions;

export default pizzaDetailsSlice.reducer;
