import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ICartItem } from 'types';

interface ICartState {
  items: ICartItem[];
  // totalPrice: number;
}

const initialState: ICartState = {
  items: [],
  // totalPrice: 0,
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

      // state.totalPrice = state.items.reduce(
      //   (sum, item) => item.price * item.count + sum,
      //   0,
      // );
    },
    minusItem(state, { payload }: PayloadAction<number>) {
      const decreasedItem = state.items.find((item) => item.id === payload);

      if (decreasedItem && decreasedItem.count !== 0) {
        decreasedItem.count = decreasedItem.count - 1;
      }
    },
    plusItem(state, { payload }: PayloadAction<number>) {
      const increasedItem = state.items.find((item) => item.id === payload);

      if (increasedItem) {
        increasedItem.count = increasedItem.count + 1;
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

export const { addItem, minusItem, plusItem, deleteItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
