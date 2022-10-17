import React from 'react'

function MovieOverview( {data} ) {
  return (
    <div>
        <p className='text-gray-200 py-4 px-4
        lg:text-lg lg:px-6 lg:py-6
        '> {data?.overview} </p>
    </div>
  )
}

export default MovieOverview