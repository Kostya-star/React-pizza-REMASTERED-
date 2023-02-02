import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { ICartItem } from 'types/types';

interface ICartState {
  items: ICartItem[];
}

const initialState: ICartState = {
  items: [],
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
    },
    minusPlusItem(
      state,
      { payload }: PayloadAction<{ id: number; val: string }>,
    ) {
      const minusPlusItem = state.items.find((item) => item.id === payload.id);

      if (
        minusPlusItem &&
        minusPlusItem.count !== 0 &&
        payload.val === 'minus'
      ) {
        minusPlusItem.count = minusPlusItem.count - 1;
      } else if (minusPlusItem && payload.val === 'plus') {
        minusPlusItem.count = minusPlusItem.count + 1;
      }
    },
    deleteItem(state, { payload }: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const cartSelector = ({ cart }: RootState) => cart;

export const { addItem, minusPlusItem, deleteItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
