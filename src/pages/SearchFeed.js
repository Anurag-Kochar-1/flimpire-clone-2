import React from 'react'
import { useParams } from 'react-router'
import { useGetSearchMovieQuery } from '../Redux/Services/TMDB'
import MovieList from '../components/HomPage/Movies/MovieList'
import { useSelector } from 'react-redux'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

function SearchFeed() {
  const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)

  const { moviequery } = useParams()
  const { data } = useGetSearchMovieQuery({ moviequery, movieORtv })
  // console.log(moviequery);
  // console.log(data);



  if(!data) return <div className='w-full h-screen bg-black flex justify-center items-center'> <AiOutlineLoading3Quarters className='animate-spin w-10 h-10 text-white' /> </div>
  
  return (
    <div className='
    w-screen min-h-screen flex flex-col justify-start items-center pt-[11vh]
    lg:w-[100%] py-4
    '>
      <h1 className='text-white font-semibold text-3xl py-7'> Search Results for : {moviequery}</h1>

      <MovieList movies={data} />
    </div>
  )
}

export default SearchFeed