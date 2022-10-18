import React  from 'react'
import "../utils/utils.css"
import TrendingBanner from '../components/HomPage/TrendingBanner'
import Movies from '../components/HomPage/Movies/Movies'

function HomePage() {
  return (
    <div className='
    w-screen min-h-screen flex flex-col justify-start items-center pt-[11vh]
    lg:w-[100%] 
    '>
        

        {/* <Link to={'/movie/123'} className='bg-gray-800 text-white'> Go to Movie detail page </Link> */}

        <TrendingBanner />
        <Movies />


        </div>

        

    
  )
}

export default HomePage