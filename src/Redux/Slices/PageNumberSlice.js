import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const PageNumberSlice = createSlice({
    name: "pageNumberSlice",
    initialState: {value : 1},
    reducers : {
        nextPage: (state, action) => {
            state.value = state.value + action.payload;
        },

        prevPage: (state, action) => {
            state.value = state.value - action.payload 
        },
        
        setPageNumberByRedux : (state,action) => {
            state.value = action.payload
        }
    }
})

export const {nextPage, prevPage , setPageNumberByRedux} = PageNumberSlice.actions
export default PageNumberSlice.reducer