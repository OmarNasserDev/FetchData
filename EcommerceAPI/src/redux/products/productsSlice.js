import { createSlice } from '@reduxjs/toolkit'
import { getAllProducts } from '../actions'


const initialState = {
    data: [],
    isLoading: true,
    error: null
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state, action) => {
            state.isLoading = true,
                state.error = null
        })
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.data = action.payload,
                state.isLoading = false,
                state.error = null
        })
        builder.addCase(getAllProducts.rejected, (state, action) => {
            state.isLoading = false,
                state.error = action.payload
        })

    },
})


export default productsSlice.reducer