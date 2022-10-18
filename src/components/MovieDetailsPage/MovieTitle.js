import React from 'react'
import { useSelector } from 'react-redux'

function MovieTitle( {data} ) {
  const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)

  return (
    <h1 className='text-gray-100 font-semibold text-center text-2xl px-4
    lg:text-4xl lg:py-2'> { movieORtv ==='movie' ? data?.title : data?.name}  </h1>
     
  ) 
}

export default MovieTitle