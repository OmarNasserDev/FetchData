import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


//Get All Products
export const getAllProducts = createAsyncThunk('products/getAll', async (thunkAPI) => {
    try {
        const res = await axios.get('https://dummyjson.com/products')
        return res.data.products
    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }
})

//Get All Categories
export const getAllCategories = createAsyncThunk('categories/getAll', async (thunkAPI) => {

    try {
        const res = await axios.get('https://dummyjson.com/products/categories')

        return res.data

    } catch (err) {
        return thunkAPI.rejectWithValue(err)
    }

})