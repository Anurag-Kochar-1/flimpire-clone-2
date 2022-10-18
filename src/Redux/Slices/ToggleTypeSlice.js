import { createSlice } from '@reduxjs/toolkit'


export const ToggleTypeSlice = createSlice ({
    name: "ToggleTypeSlice",
    initialState : {value : "movie"},
    reducers: {
        switchType: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const {switchType} = ToggleTypeSlice.actions
export default ToggleTypeSlice.reducer