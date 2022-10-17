import React from 'react'

function MovieTagline( {data} ) {
  return (
    <h3 className='text-gray-200 font-medium text-base py-2 px-5 
    lg:text-xl
    '> {data?.tagline} </h3>
  )
}

export default MovieTagline