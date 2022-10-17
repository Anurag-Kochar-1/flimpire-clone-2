import React from 'react'
import { Link } from 'react-router-dom'
import { useGetTrendingMoviesQuery } from "../../Redux/Services/TMDB"



function TrendingBanner() {
    const {data} = useGetTrendingMoviesQuery()
    
    // console.log(data);
    

  return (
    <div style={{
        backgroundImage: 'url('+`https://image.tmdb.org/t/p/w500${data?.results[0]?.backdrop_path}`+')',
        backgroundSize: "cover",
        }}
    className='bg-indigo-500 w-[95%] h-[30vh] rounded-md flex flex-col items-start justify-end p-3
        sm:h-[40vh]
        md:h-[40vh] 
        lg:w-[99%]  lg:h-[50vh] 
        xl:h-[45vh]
        hover:cursor-pointer
    '>


        <Link to={`movie/${data?.results[0]?.id}`}>

            <h3 className="text-xl text-gray-200 font-semibold  "> {data?.results[0]?.title} </h3>
            <p className='text-gray-300 text-sm lg:hidden'> {data?.results[0]?.overview.slice(0,100)}.... <span className='hover:cursor-pointer'>Read more</span>  </p>

            <div className='hidden lg:inline-block'>
                <p className='text-gray-300 text-md lg:pr-60 lg:py-4'> {data?.results[0]?.overview}.... <span className='hover:cursor-pointer'>Read more</span>  </p>
            </div>

        </Link>
        

    </div>
  )
}

export default TrendingBanner



