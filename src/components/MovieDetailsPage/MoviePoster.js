import React from 'react'
import placeholderImage from '../../images/movieORtvImageForEmpty.png'

function MoviePoster( {data} ) {
  return (

    <img src={data?.poster_path ? `https://image.tmdb.org/t/p/w500/${data?.poster_path}` : placeholderImage } alt={data?.title}
    className="w-[50%] rounded-lg shadow-lg shadow-slate-600
    lg:w-[90%]
    "/>
    
      
  )
}

export default MoviePoster