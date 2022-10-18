import React from 'react'
import MovieCard from './MovieCard'

import Pagination from '../../Pagination'

function MovieList( {movies} ) {
  return (
    <div className=' w-full h-auto px-1 py-2 flex flex-row justify-center items-center flex-wrap'>

        {/* <button onClick={() => console.log(movies)} > LOG MOVIES PROPS </button> */}

        {movies?.results && movies?.results.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />
        })}

       
    </div>
  )
}

export default MovieList