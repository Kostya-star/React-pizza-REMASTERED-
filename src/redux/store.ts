import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import home from './slices/homeSlice';
import cart from './slices/cartSlice';
import pizzaDetails from './slices/pizzaDetailsSlice';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  home,
  cart,
  pizzaDetails
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['home', 'pizzaDetails']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // reducer: {
  //   home,
  //   cart,
  //   pizzaDetails
  // },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
