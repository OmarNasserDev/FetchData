import { configureStore } from "@reduxjs/toolkit"

import productsSlice from "./redux/products/productsSlice.js"
import categoriesSlice from "./redux/categories/categoriesSlice.js"



export const store = configureStore({
    reducer: {
        productsData: productsSlice, categoriesData: categoriesSlice
    }

})