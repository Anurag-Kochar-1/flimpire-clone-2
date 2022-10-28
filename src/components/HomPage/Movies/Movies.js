import React, {useState, useEffect}  from 'react'
import { useGetMoviesQuery } from "../../../Redux/Services/TMDB"
import MovieList from './MovieList'
import { useParams } from 'react-router'
import Pagination from '../../Pagination'

import { useSelector } from 'react-redux'




function Movies() {

  // console.log('Movies.js is CALLED');

    const pageNumberByRedux = useSelector((state) => state.pageNumberSlice.value)
    const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)

    const [pageNumber, setPageNumber] = useState(1)

    const {category} = useParams()
    const {data , error , isFetching} = useGetMoviesQuery({category , pageNumberByRedux , movieORtv})
    

  
        
  return (
    <div className=" w-full h-auto px-1 py-2 flex flex-row justify-center flex-wrap">

        {/* <button className='p-4 bg-red-400' onClick={() => console.log(docTitle) } >  LOG category </button> */}

        {!category && <h1 className='text-gray-100 text-3xl py-5 font-semibold'>  Popular {movieORtv === 'movie' ? "Movies" : "TV Shows"} </h1>}
        {category === 'popular' && <h1 className='text-gray-100 text-3xl py-5 font-semibold'>  Popular {movieORtv === 'movie' ? "Movies" : "TV Shows"} </h1>}
        {category === 'top_rated' && <h1 className='text-gray-100 text-3xl py-5 font-semibold'>  Top Rated {movieORtv === 'movie' ? "Movies" : "TV Shows"} </h1>}
        {category === 'upcoming' && <h1 className='text-gray-100 text-3xl py-5 font-semibold'>  Upcoming {movieORtv === 'movie' ? "Movies" : "TV Shows"} </h1>}

        
        { isFetching &&  <h1 className='font-bold text-4xl' > FETCHING........ </h1>}

        {/* <h1 className='text-purple-300 text-5xl'> movieORtv : {movieORtv} </h1> */}
        <MovieList movies = {data} />

        {/* <button className='p-3 bg-green-100' onClick={() => console.log(pageNumberByRedux)}> LOG pageNumberByRedux </button> */}
        <Pagination currentPage={pageNumber} setPageNumber={setPageNumber} totalNumberOfPages={data?.total_pages} />

        
    </div>
  )
}

export default Movies