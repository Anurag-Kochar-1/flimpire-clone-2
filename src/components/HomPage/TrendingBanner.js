import React , {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useGetTrendingMoviesQuery } from "../../Redux/Services/TMDB"



function TrendingBanner() {
    const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)

    // console.log('TrendingBanner is CALLED');

    const randomID = Math.floor(Math.random() * (18 - 1)) + 1;
    const {data} = useGetTrendingMoviesQuery(movieORtv)
    // console.log(data);

    const [ trendingMovieID, setTrendingMovieID ] = useState(0)
    
    
    useEffect(() => {
        setTrendingMovieID(randomID)
        console.log(`random id is : ${randomID}`);
    },[])
    
        
    
    

    

  return (
    <div style={{
        backgroundImage: 'url('+`https://image.tmdb.org/t/p/w500${data?.results[trendingMovieID]?.backdrop_path}`+')',
        backgroundSize: "cover",
        }}
    className='bg-indigo-500 w-[95%] h-[30vh] rounded-md flex flex-col items-start justify-end p-3
        sm:h-[40vh]
        md:h-[40vh] 
        lg:w-[99%]  lg:h-[50vh] 
        xl:h-[55vh]
        hover:cursor-pointer
    '>


        <Link to={`movie/${data?.results[trendingMovieID]?.id}`}>

            <h3 className="text-xl text-gray-200 font-semibold  "> {data?.results[trendingMovieID]?.title} </h3>
            <p className='text-gray-300 text-sm lg:hidden'> {data?.results[trendingMovieID]?.overview.slice(0,100)}.... <span className='hover:cursor-pointer'>Read more</span>  </p>

            <div className='hidden lg:inline-block'>
                <p className='text-gray-300 text-md font-medium lg:pr-60 lg:py-4'> {data?.results[trendingMovieID]?.overview}.... <span className='hover:cursor-pointer'>Read more</span>  </p>
            </div>

        </Link>
        
            {/* <button className='bg-fuchsia-400 p-4' onClick={() => console.log(data)}> LOG data FROM TREDNING BANNER  </button> */}

    </div>
  )
}

export default TrendingBanner



