import React from 'react'
import { Link , useParams } from "react-router-dom"
import { useGetMovieDetailsQuery } from "../Redux/Services/TMDB"


import MoviePoster from '../components/MovieDetailsPage/MoviePoster'; 
import MovieTitle from '../components/MovieDetailsPage/MovieTitle';
import MovieTagline from '../components/MovieDetailsPage/MovieTagline';
import MovieGenre from '../components/MovieDetailsPage/MovieGenre';
import MovieOverview from '../components/MovieDetailsPage/MovieOverview';
import MovieCast from '../components/MovieDetailsPage/MovieCast';
import MovieVideoSection from '../components/MovieDetailsPage/MovieVideoSection';

import MovieRecommendationsForMovie from '../components/MovieRecommendationsForMovie';


function MovieDetailPage() {

  const { id } = useParams();
  const {data} = useGetMovieDetailsQuery(id)
  console.log(data);
  console.log('loggin data from MovieDetailsPage.js');


  return (
    <div className='
    w-[100%] min-h-full flex flex-col justify-center items-center px-2  pt-[11vh]
     lg:flex lg:flex-col lg:justify-center lg:items-start  lg:px-0
    '>
    
          <div className=' lg:flex lg:flex-row lg:justify-center lg:items-start  lg:px-0 '>

                <div className='w-screen px-2 py-10 flex flex-row justify-center items-center
                lg:w-[30%] lg:h-auto lg:flex-col lg:justify-start lg:items-center 
                '>
                  <MoviePoster data={data} />
                </div>

                <div className=' w-screen h-auto py-3 text-center flex flex-col justify-center items-center
                lg:w-[80%] lg:h-auto lg:flex-col lg:items-center lg:justify-center 
                '>
                      <MovieTitle data={data}/>
                      <MovieTagline data={data}/>
                      <MovieGenre data={data}/>
                      <MovieOverview data={data}/>
                      {/* <MovieCast id={id}/> */}
                      <MovieVideoSection id={data?.id} />
                      
                </div>
          </div>


          {/* <div className=' w-[100%] h-auto py-5 bg-yellow-100 flex flex-row justify-center items-start'>
          </div> */}
         
          <div className=' w-[100%] h-auto flex flex-row justify-center  py-5'>
            <MovieCast id={id}/>
          </div>

          <div >
            <MovieRecommendationsForMovie id={id} />
          </div>
        
      
    </div>
  )
}

export default MovieDetailPage