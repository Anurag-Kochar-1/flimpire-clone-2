import React from 'react'
import { useGetMovieCreditsQuery } from "../../Redux/Services/TMDB"
import MovieCastCard from './MovieCastCard';

// overflow-x-scroll overflow-y-hidden

function MovieCast( {id} ) {
    const { data } = useGetMovieCreditsQuery(id)

    console.log(data);

  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center flex-wrap  
    lg:w-[95%]  lg:py-3 lg:justify-start lg:overflow-hidden
    
    ">

        <h3 className='font-semibold text-3xl text-white pb-5'>Top Cast </h3>

        <div className='w-[100%] flex flex-row flex-wrap justify-center 
            lg:w-[100%] 
        '>
            {data?.cast &&   data?.cast.slice(0,6).map((actor) => {
                return <MovieCastCard actor={actor} />
            
            })}
        </div>
    </div>
  )
}

export default MovieCast