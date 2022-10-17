import React from 'react'

function MovieTitle( {data} ) {


  return (
    <h1 className='text-gray-100 font-semibold text-center text-2xl px-4
    lg:text-4xl lg:py-2
    '> {data?.title} </h1>
  ) 
}

export default MovieTitle