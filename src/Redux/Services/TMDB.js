import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// const pageNumber = 41
// const pageNumberByRedux = 1


export const tmdbApi = createApi({
    reducerPath : "tmdbApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
    endpoints : (builder) => ({

        // movies in getMovies or any other query is meant be for for both types MOVIES AND TV SHOWS AS WELL

        getMovies: builder.query({
            query: ({category = 'popular' , pageNumberByRedux, movieORtv}) => {
                return `${movieORtv}/${category}?page=${pageNumberByRedux}&api_key=${tmdbApiKey}`
            }
        }),

        getTrendingMovies : builder.query({
            query : (movieORtv) => {
                return `trending/${movieORtv}/day?api_key=${tmdbApiKey}`
            }
        }),

        getMovieDetails : builder.query({
            query : ({id, movieORtv}) => {
                return `${movieORtv}/${id}?api_key=${tmdbApiKey}`
            }
        }),

        getMovieCredits : builder.query({
            query : ({id, movieORtv}) => {
                return `${movieORtv}/${id}/credits?api_key=${tmdbApiKey}`
            }
        }),

        getMovieRecommendationsForMovie: builder.query({
            query: ({id, movieORtv}) => {
                return `${movieORtv}/${id}/recommendations?api_key=${tmdbApiKey}`
            }
         }),

         getSearchMovie: builder.query({
            query : ({moviequery, movieORtv}) => {
                return moviequery ? `search/${movieORtv}?api_key=${tmdbApiKey}&query=${moviequery}` : false
            }
         }),

         getMoviesByGenre : builder.query({
            query : ({genreIDState, pageNumberByRedux , movieORtv}) => {
                // return genre && genre.length != 0 ? `discover/movie?api_key=${tmdbApiKey}}&language=en-US&sort_by=release_date.desc&with_genres=${genre}` : 0

                // return `discover/movie?with_genres=${genre}?page=1&api_key=${tmdbApiKey}` 
                return `/discover/${movieORtv}?page=${pageNumberByRedux}&sort_by=popularity.desc&api_key=${tmdbApiKey}&with_genres=${genreIDState}` 
            }
         }),

        getMovieVideos : builder.query ({
            query : ({id , movieORtv}) => {
                return `/${movieORtv}/${id}/videos?api_key=${tmdbApiKey}&official=true`
            }
        })


    })
})

export const { useGetMoviesQuery , 
    useGetTrendingMoviesQuery , 
    useGetMovieDetailsQuery , 
    useGetMovieCreditsQuery ,
    useGetMovieRecommendationsForMovieQuery,
    useGetSearchMovieQuery,
    useGetMoviesByGenreQuery,
    useGetMovieVideosQuery

} = tmdbApi