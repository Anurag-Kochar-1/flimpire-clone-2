import React from 'react'
import {genres } from "../../utils/Constants"
import { Link , useParams} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPageNumberByRedux } from "../../Redux/Slices/PageNumberSlice"

// onClick={() => {dispatch(setPageNumberByRedux(1))}}

function SideBarGenres() {

  const dispatch = useDispatch()
  const {genreid} = useParams()

 

  return (
    <div className=' py-2'>
        <p className='text-[#ACACAC] text-sm py-2'> Genres </p>
        {genres.map((genre) => {
            return (
           
              <Link to={`movies/${genre.id}`} onClick={() => console.log(`genre.id is ${genre.id}`) }>
                <div className='text-[#ACACAC]  flex flex-row justify-start items-center' key={genre.id} onClick={() => {dispatch(setPageNumberByRedux(1))}}  >

          

                  {genre.icon}
                  <p className='text-[#ACACAC] ml-3 py-2 hover:text-white hover:cursor-pointer'>{genre.name}</p>
                  

                </div>
              </Link>
            
            )
        })}
    </div>
  )
}

export default SideBarGenres