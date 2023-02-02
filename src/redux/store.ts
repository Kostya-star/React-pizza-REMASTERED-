import { configureStore } from '@reduxjs/toolkit';
import home from './slices/homeSlice';
import cart from './slices/cartSlice';
import pizzaDetails from './slices/pizzaDetailsSlice';

export const store = configureStore({
  reducer: {
    home,
    cart,
    pizzaDetails
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
