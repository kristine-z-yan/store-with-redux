import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartProduct = {
  qty: number,
  price: number,
  title: string,
  descrption: string,
  id: number,
}

type InitialState = {
    products: CartProduct[],
    loading: boolean,
    error: string
}

const initialState = {
  products: [],
  loading: false,
  error: ''
}

const CartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<CartProduct>) => {
        //add to cart
      }
    },
})