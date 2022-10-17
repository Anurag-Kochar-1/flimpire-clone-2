import React from 'react'
import { Link } from 'react-router-dom'

function MovieCastCard( {actor} ) {
  return (

    <div className='w-36  bg-gray-800 flex flex-col justify-start items-center m-4 pb-3 rounded-lg hover:cursor-pointer'>
        <a href={`https://en.wikipedia.org/wiki/${actor.name}`} target="_blank">

            { actor?.profile_path ? <img src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`} alt={actor?.title}
            className="w-full rounded-lg pb-2 object-contain"
            /> : <img src={`https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3-1536x1536.png`} alt="place-holder" className="w-full rounded-lg pb-2" />}

            <p className='text-gray-100 text-lg font-medium mb-1 px-2'>{actor.name}</p>
            <p className='text-gray-400 text-sm font-medium px-2'>{actor.character}</p> 

        </a>
    </div>
  )
}

export default MovieCastCard