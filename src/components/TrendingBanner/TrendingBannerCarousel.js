import AliceCarousel from "react-alice-carousel"
import React , {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useGetTrendingMoviesQuery } from "../../Redux/Services/TMDB"
import TrendinBannerCard from "./TrendingBannerCard";


function TrendingBanner() {
    const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)
    
    
    const randomID = Math.floor(Math.random() * (18 - 1)) + 1;
    
    const {data} = useGetTrendingMoviesQuery(movieORtv)
    
    
    
    const [ trendingMovieID, setTrendingMovieID ] = useState(0)
    
    
    useEffect(() => {
        setTrendingMovieID(randomID)
        // console.log(`random id is : ${randomID}`);
    },[])
    
    
    // console.log(`LOGGIN DATA FROM TRENDINGBANNERCAROUSEL`);
    // console.log(data?.results?.slice(0,6));
    
    const responsive = {
        0: {
          items: 1,
        },
        512: {
          items: 1,
        },
      };

      const items = data?.results?.slice(0,6).map((trendingMovieORtv) => {
        return <TrendinBannerCard trendingData={trendingMovieORtv} />
      } )

    

  return (
    <div 
    className=' w-[95%] h-[45vh] rounded-md flex flex-row items-start justify-center
        sm:h-[45vh]
        md:h-[45vh] 
        lg:w-[99%]  lg:h-[50vh] 
        xl:h-[55vh]
        hover:cursor-pointer
    '>



        <AliceCarousel 
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableButtonsControls
            disableDotsControls
            responsive={responsive}
            items={items}
            autoPlay

        />

        
        
        {/* <button className='bg-fuchsia-400 p-4' onClick={() => console.log(data)}> LOG data FROM TREDNING BANNER  </button> */}

    </div>
  )
}

export default TrendingBanner



