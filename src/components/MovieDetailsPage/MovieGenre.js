import React from 'react'
import "../../App.css"

function MovieGenre( {data} ) {
  return (

    <div className='w-full flex flex-row justify-around items-center py-3 mx-2 overflow-x-scroll  
     lg:w-[60%] lg:overflow-x-hidden
    
    '>
        {data?.genres && data?.genres?.map((genre, index) => {
            return (
                <div key={index} className="w-12 px-12 py-2 mx-1 bg-gray-800 rounded-xl flex flex-row justify-center items-center">
                    <p className='text-gray-300 font-semibold'> {genre.name} </p>
                </div>

                
            )
        })}
    </div>
  )
}

export default MovieGenre