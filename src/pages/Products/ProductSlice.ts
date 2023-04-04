import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../../features/ProductItem"

interface ProductState {
    page: number,
    allProducts: Product[]
}
  
const initialState: ProductState = {
    page: 1,
    allProducts: []
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      
    },
  })

export default productSlice.reducer

