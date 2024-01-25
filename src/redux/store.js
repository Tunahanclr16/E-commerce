import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import modalSlice from './modalSlice' 
import cartSlice from './cartSlice'
export const store = configureStore({
  reducer: {
    products:productSlice,
    modal:modalSlice,
    carts:cartSlice
  },
})