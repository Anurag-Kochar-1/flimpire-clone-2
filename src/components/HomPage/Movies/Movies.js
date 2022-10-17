import React  from 'react'
import { useGetMoviesQuery } from "../../../Redux/Services/TMDB"
import MovieList from './MovieList'




function Movies() {

    const {data , error , isFetching} = useGetMoviesQuery()
    // console.log(data);
    
        
  return (
    <div className=" w-full h-auto px-1 py-2 flex flex-row justify-center flex-wrap">

        <button onClick={() => console.log(data?.results) } >  LOG </button>
        {/* { isFetching &&  <h1 className='font-bold text-4xl' > FETCHING........ </h1>} */}

        <MovieList movies = {data} />
    </div>
  )
}

export default Movies