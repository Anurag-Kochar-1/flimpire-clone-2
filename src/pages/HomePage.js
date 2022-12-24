import React , {useEffect}  from 'react'
import "../utils/utils.css"
import TrendingBanner from '../components/HomPage/TrendingBanner'
import Movies from '../components/HomPage/Movies/Movies'
import TrendingBannerCarousel from "../components/TrendingBanner/TrendingBannerCarousel"
import Footer from '../components/Footer'

function HomePage() {


  

  return (
    <div className='
    w-screen min-h-screen flex flex-col justify-start items-center pt-[11vh]
    lg:w-[100%] 
    '>
      <TrendingBannerCarousel />
      <Movies />
    </div>
  )
}

export default HomePage