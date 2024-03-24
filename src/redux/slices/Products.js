import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const Api_URL = axios.create({
    baseURL: 'https://fakestoreapi.com/',
});

Api_URL.interceptors.request.use(async (config) => {
    return config;
});

Api_URL.interceptors.response.use(async (response) => {
    return response;
});

const initialState = {
    products: [],
    loading: false,
    error: null
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const response = await Api_URL.get(`products/?Electronics`);
            return response.data; 
        } catch (error) {
            throw Error(error); 
        }
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload; // Assigning payload to products
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Assigning error message
            });
    }
});

export default productSlice.reducer;
