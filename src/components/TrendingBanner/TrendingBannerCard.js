import React from 'react'
import {Link} from "react-router-dom"
import { useGetMovieVideosQuery } from "../../Redux/Services/TMDB"
import { useSelector } from 'react-redux';

function TrendinBannerCard({trendingData}) {
  let id = trendingData?.id

  const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)

  const { data : videoData } = useGetMovieVideosQuery({ id, movieORtv })

  console.log(videoData);
  
  return (
    <Link to={`movie/${trendingData?.id}`}>

      <div 
      style={{
        backgroundImage: 'url('+`https://image.tmdb.org/t/p/w500${trendingData?.backdrop_path}`+')',
        backgroundSize: "cover",
        backgroundBlendMode: "multiply"
        }}
      className='bg-gray-700 w-full h-auto py-2 px-3  rounded-md flex flex-col items-center justify-start
          sm:h-[40vh]
          md:h-[40vh] 
          lg:w-[99%]  lg:h-[50vh] lg:flex-row lg:px-8
          xl:h-[55vh]
          hover:cursor-pointer
      '>

      <div >

        {movieORtv === 'movie' && <h2 className='text-white font-bold text-4xl pb-1'> {trendingData?.title} </h2>}
        {movieORtv === 'tv' && <h2 className='text-white font-bold text-4xl pb-1'> {trendingData?.name} </h2>}

        <p className='text-white font-medium text-base py-2 lg:hidden'> {trendingData?.overview?.slice(0,200)}.... </p>

        <p className='hidden lg:text-white lg:font-medium lg:text-lg lg:py-4 lg:inline'> {trendingData?.overview} </p>

        {/* <p className='text-white font-medium text-base py-2'> Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to det... </p> */}
        

        <div className='my-5'>
          <Link to={`movie/${trendingData?.id}`}>
            <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ">Read more</button>
          </Link>
        </div>

      </div>

      

        <img
        className=' hidden
        lg:flex lg:w-[30%] lg:my-2 lg:mx-2 lg:shadow-sm lg:shadow-gray-500 lg:rounded-lg
        xl:flex xl:w-[20%] xl:my-2 xl:mx-2 xl:shadow-sm xl:shadow-gray-500 xl:rounded-lg
        2xl:flex 2xl:w-[20%] 2xl:my-2 2xl:mx-4 2xl:shadow-sm 2xl:shadow-gray-500 2xl:rounded-xl  

        
        
        '
        src={`https://image.tmdb.org/t/p/w500${trendingData?.poster_path}`} alt={trendingData?.title} />

     


      </div>
    </Link>
  )
}

export default TrendinBannerCard