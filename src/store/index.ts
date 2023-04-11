import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { productsApi } from '../services/ProductService';

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([productsApi.middleware])
  });
}

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
