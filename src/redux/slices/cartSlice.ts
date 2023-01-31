import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IPizza } from 'types';

interface ICartItem
  extends Omit<IPizza, 'types' | 'sizes' | 'rating' | 'category'> {
  type: string;
  size: number;
  count?: number
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
        // let existedItem = 0
        state.items.push({
          ...payload,
          count: 1
        });
      } else {
        existedItem.count && existedItem.count++;
      }
      console.log(existedItem);

      state.totalPrice = state.items.reduce((sum, item) => item.price + sum, 0);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
