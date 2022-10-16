import React from 'react'
import { Link , useParams } from "react-router-dom"
import { useGetMovieDetailsQuery  } from "../Redux/Services/TMDB"


function MovieDetailPage() {

  const { id } = useParams();
  const {data} = useGetMovieDetailsQuery(id)

  

  return (
    <div className='
    w-screen min-h-screen flex flex-col justify-center items-center px-2 py-20
    lg:w-[75%] 
    '>

      <div className=''>
        {data && <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} className="" />}

        <div>
          <h3 className='text-white'> {data?.title}  </h3> 
        </div>
      </div>
      
        
      
    </div>
  )
}

export default MovieDetailPage