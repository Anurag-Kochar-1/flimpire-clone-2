import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

export const PageNumberSlice = ({
    name: "placeNumberSlice",
    initialState: {value : 0},
    reducers : {
        nextPage: (state, action) => {
            state.value + 1;
        },

        prevPage: (state, action) => {
            state.value - 1;
        },
    }
})

// export const {nextPage, prevPage }