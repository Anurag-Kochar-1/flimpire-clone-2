import React from 'react'
import { useSelector } from 'react-redux';
import { useGetMovieCreditsQuery } from "../../Redux/Services/TMDB"
import MovieCastCard from './MovieCastCard';

// overflow-x-scroll overflow-y-hidden

function MovieCast( {id} ) {
    const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)
    const { data } = useGetMovieCreditsQuery({id, movieORtv})

    // console.log(data);

  return (
    <div className="w-screen h-auto flex flex-col justify-center items-center flex-wrap py-5 
    lg:w-[95%]  lg:py-5 lg:justify-start lg:overflow-hidden 
    ">

        <h3 className='font-semibold text-3xl text-white pb-5'>Top Cast </h3>

        <div className='w-[100%] flex flex-row flex-wrap justify-center 
            lg:w-[100%] 
        '>
            {data?.cast &&   data?.cast.slice(0,6).map((actor, index) => {
                return <MovieCastCard key={index} actor={actor} />
            
            })}
        </div>
    </div>
  )
}

export default MovieCast