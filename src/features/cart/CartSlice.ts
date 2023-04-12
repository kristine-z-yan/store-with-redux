import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../shared/models/IProduct";

export type CartProduct = {
  qty: number,
  price: number,
  title: string,
  description: string,
  id: number,
}

type InitialState = {
    products: CartProduct[],
    loading: boolean,
    error: string
}

const initialState: InitialState = {
  products: [],
  loading: false,
  error: ''
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<IProduct>) => {
        let product = state.products.find(item => item.id == action.payload.id);
        
        if (product) {
          product.qty++
        } else {
          state.products = [
            ...state.products,
            {...action.payload, qty: 1}
          ]
        }
        
      }
    },
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;