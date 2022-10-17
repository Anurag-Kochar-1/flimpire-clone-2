import React from 'react'
import { useGetMovieRecommendationsForMovieQuery } from "../Redux/Services/TMDB"
import MovieList from './HomPage/Movies/MovieList';

function MovieRecommendationsForMovie( {id} ) {

    const {data} = useGetMovieRecommendationsForMovieQuery(id)
    console.log(data);
    console.log(23123);

  return (
    <div className='flex flex-col items-start font-semibold  py-6 '>
        {data?.results.length != 0 && <h3 className='text-white text-3xl px-16'> You might also like </h3>}
        <MovieList movies={data} />
    </div>
  )
}

export default MovieRecommendationsForMovie