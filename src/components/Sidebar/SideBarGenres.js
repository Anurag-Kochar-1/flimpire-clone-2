import React from 'react'
import {genres , TvGenres } from "../../utils/constants"
import { Link , useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPageNumberByRedux } from "../../Redux/Slices/PageNumberSlice"

// onClick={() => {dispatch(setPageNumberByRedux(1))}}

function SideBarGenres() {
  const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)

  const dispatch = useDispatch()
  const {genreid } = useParams()

 

  return (
    <div className=' py-2'>
        <p className='text-[#ACACAC] text-sm py-2'> Genres </p>
        
        {movieORtv === 'movie' && genres.map((genre) => {
            return (
           
              <Link to={`movies/${genre.id}/:${genre.name}`} onClick={() => console.log(`genre.id is ${genre.id}`) }>
                <div className='text-[#ACACAC]  flex flex-row justify-start items-center hover:scale-110 transition duration-300 ease-in-out' key={genre.id} onClick={() => {dispatch(setPageNumberByRedux(1))}}  >

          

                  {genre.icon}
                  <p className='text-[#ACACAC] ml-3 py-2 hover:text-white hover:cursor-pointer'>{genre.name}</p>
                  

                </div>
              </Link>
            
            )
        })}

        {movieORtv === 'tv' && TvGenres.map((tvGenre) => {
          return (
           
            <Link to={`movies/${tvGenre.id}/:${tvGenre.name}`} onClick={() => console.log(`genre.id is ${tvGenre.id}`) }>

              <div className='text-[#ACACAC]  flex flex-row justify-start items-center  hover:scale-110 transition duration-300 ease-in-out' key={tvGenre.id} onClick={() => {dispatch(setPageNumberByRedux(1))}}  >

        

                {tvGenre.icon}
                <p className='text-[#ACACAC] ml-3 py-2 hover:text-white hover:cursor-pointer'>{tvGenre.name}</p>
                

              </div>
            </Link>
        )})}


    </div>
  )
}

export default SideBarGenres