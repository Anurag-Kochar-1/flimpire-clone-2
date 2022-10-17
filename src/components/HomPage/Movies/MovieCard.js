import React from 'react'
import { Link } from 'react-router-dom'


function MovieCard( {movie} ) {
  return (

    <div className='bg-[#1F1F1F] w-[55%] h-auto mx-2 my-5 pb-3 rounded-md flex flex-col justify-center items-center
    sm:w-[35%]
    md:w-[25%]
    lg:w-[20%] lg:mx-4 lg:my-4
    '
    
    >

        <Link to={`/movie/${movie.id}`} >
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="rounded-md" />

            <h3 className='text-[#AFB0A9] text-center px-1 text-base font-semibold py-2'>  {movie.title} </h3>
        </Link>

    </div>

  )
}

export default MovieCard