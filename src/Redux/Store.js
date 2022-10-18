import { configureStore } from "@reduxjs/toolkit"
import { tmdbApi } from "../Redux/Services/TMDB"
import PageNumberReducers from "./Slices/PageNumberSlice"
import ToggleTypeReducers from "./Slices/ToggleTypeSlice"

export default configureStore({
    reducer : {
        [tmdbApi.reducerPath] : tmdbApi.reducer,
        pageNumberSlice : PageNumberReducers,
        ToggleTypeSlice : ToggleTypeReducers

    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
})