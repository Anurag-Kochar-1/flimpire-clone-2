import React from 'react'

function MoviePoster( {data} ) {
  return (
    <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt={data?.title}
    className="w-[50%] rounded-lg shadow-lg shadow-slate-600
    lg:w-[90%]
    "
    />
      
  )
}

export default MoviePoster