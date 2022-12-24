import React from 'react'
import { Link } from 'react-router-dom'
import "../../App.css"


function MovieGenre({ data }) {
  return (

    <div className='w-[80%] flex flex-row flex-wrap justify-around items-center px-0 py-2 mx-2 overflow-x-scroll  
     lg:w-[60%] lg:overflow-x-hidden '>
    
      {data?.genres && data?.genres?.map((genre, index) => {
        return (
          <button key={index} className="px-5 py-2 m-2 bg-gray-800 text-gray-300 font-semibold rounded-xl flex flex-row justify-center items-center" > {genre.name} </button>
        )
      })}
    </div>
  )
}

export default MovieGenre