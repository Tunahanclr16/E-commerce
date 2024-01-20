import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import modalSlice from './modalSlice'

export const store = configureStore({
  reducer: {
    products:productSlice,
    modal:modalSlice
  },
})