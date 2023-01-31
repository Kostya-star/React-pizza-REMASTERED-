import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPizza } from 'types';

interface ICartItem
  extends Omit<IPizza, 'types' | 'sizes' | 'rating' | 'category'> {
  type: string;
  size: number;
  count: number;
}

interface ICartState {
  items: ICartItem[];
  totalPrice: number;
}

const initialState: ICartState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, { payload }: PayloadAction<ICartItem>) {
      const existedItem = state.items.find((item) => item.id === payload.id);

      if (!existedItem) {
        state.items.push(payload);
      } else {
        existedItem.count++;
      }

      state.totalPrice = state.items.reduce(
        (sum, item) => item.price * item.count + sum,
        0,
      );
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
