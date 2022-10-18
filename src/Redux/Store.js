import { configureStore } from "@reduxjs/toolkit"
import { tmdbApi } from "../Redux/Services/TMDB"
import PageNumberReducers from "./Slices/PageNumberSlice"

export default configureStore({
    reducer : {
        [tmdbApi.reducerPath] : tmdbApi.reducer,
        pageNumberSlice : PageNumberReducers
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
})