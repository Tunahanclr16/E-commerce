// productSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  products: [],
  product: {},
  loading: false,
};

export const fetchProductData = createAsyncThunk('productData', async () => {
  try {
    const response = await axios.get('http://localhost:3000/products');
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const getProductDetails = createAsyncThunk('productDetail', async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const productSlice = createSlice({
  name: 'DataProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProductDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer;
