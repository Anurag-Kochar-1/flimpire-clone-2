import React from 'react'
import MovieCard from './MovieCard'
import Pagination from '../../Pagination'
import DropdownMenu from '../../DropdownMenu'
import {AiOutlineLoading3Quarters} from "react-icons/ai"


function MovieList({ movies }) {


  if(!movies) return <div className='w-screen h-screen bg-black flex justify-center items-center'> <AiOutlineLoading3Quarters className='animate-spin w-10 h-10 text-white' /> </div>
  return (
    <div className=' w-full h-auto px-1 py-2 flex flex-col justify-center items-center flex-wrap'>
      {/* <button onClick={() => console.log(movies)} > LOG MOVIES PROPS </button> */}

      <div className='w-full h-auto px-1 py-2 flex flex-row justify-center items-center flex-wrap'>
        {movies?.results && movies?.results.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })}

      </div>

    </div>
  )
}

export default MovieList


{/* <div className=' w-full h-auto px-1 py-2 flex flex-row justify-center items-center flex-wrap'>
<button onClick={() => console.log(movies)} > LOG MOVIES PROPS </button>

{movies?.results && movies?.results.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />
})}
</div> */}