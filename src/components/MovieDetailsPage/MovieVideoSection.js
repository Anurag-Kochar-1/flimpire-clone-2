import React from 'react'
import { useSelector } from 'react-redux'
import { useGetMovieVideosQuery } from '../../Redux/Services/TMDB'

// width="560" height="315" w-[560px] h-[315px]

function MovieVideoSection( {id} ) {
    const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)
    const {data} = useGetMovieVideosQuery({id , movieORtv})

  return (
        <div className='w-full h-auto flex flex-col justify-center items-center p-1 my-3 rounded-lg'>
            <h3 className='text-gray-300 text-3xl font-medium py-4'> Watch Trailer </h3>
            <iframe className='w-[100%] lg:w-[80%] xl:w-[65%] aspect-video p-4 rounded-xl'  src={`https://www.youtube.com/embed/${data?.results[0]?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
  )
}

export default MovieVideoSection