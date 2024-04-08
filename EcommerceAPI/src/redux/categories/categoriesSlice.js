import { createSlice } from '@reduxjs/toolkit'
import { getAllCategories } from '../actions.js'


const initialState = {
    data: [],
    isLoading: true,
    error: null
}

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategories.pending, (state, action) => {
                state.isLoading = true,
                    state.error = null
            })
            .addCase(getAllCategories.fulfilled, (state, action) => {
                state.data = action.payload
                state.isLoading = false
                state.error = null
            })
            .addCase(getAllCategories.rejected, (state, action) => {
                state.isLoading = false,
                    state.error = action.payload
            })
    }
})


export default categoriesSlice.reducer