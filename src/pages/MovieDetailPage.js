import React from 'react'
import { Link } from "react-router-dom"


function MovieDetailPage() {
  return (
    <div className='
    w-screen min-h-screen flex flex-col justify-center items-center px-2 py-20
    lg:w-[75%] 
    '>
        <h1 className='text-4xl'>MovieDetailPage</h1>
        <Link to={'/'} className='bg-indigo-800 text-white '> Go to Home page </Link>
    </div>
  )
}

export default MovieDetailPage