import React from 'react'

function TestMovieCard({position}) {
  return (
    <div className='w-40 h-52 bg-gray-300 m-3'>
        <h1 className='text-black text-4xl'> {position} </h1>
    </div>
  )
}

export default TestMovieCard