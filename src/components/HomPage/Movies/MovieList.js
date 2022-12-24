import React from 'react'
import MovieCard from './MovieCard'


function MovieList({ movies }) {
  return (
    <div className=' w-full h-auto px-1 py-2 flex flex-col justify-center items-center flex-wrap'>

      <div className='w-full h-auto px-1 py-2 flex flex-row justify-center items-center flex-wrap'>
        {movies?.results && movies?.results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })}

      </div>

    </div>
  )
}

export default MovieList


