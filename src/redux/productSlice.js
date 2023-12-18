import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  products:[],
  loading:false
}
export const fetchProductData = createAsyncThunk('productData', async () => {
  try {
    const response = await axios.get('https://fakestoreapiserver.reactbd.com/products');
    return response.data; // Veya veriyi işleyerek döndürün
  } catch (error) {
    throw error; // Hata durumunda hata nesnesini fırlatın
  }
});
export const productSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
  extraReducers:(builder)=>{
      builder.addCase(fetchProductData.pending,(state,action)=>{
          state.loading=true
      })
      builder.addCase(fetchProductData.fulfilled,(state,action)=>{
        state.loading=false
        state.products=action.payload
    })
  }
})

// Action creators are generated for each case reducer function

export default productSlice.reducer