import React, {useState, useRef} from 'react'
import {BsSearch} from "react-icons/bs"
import { useGetSearchMovieQuery } from "../Redux/Services/TMDB"
import { Link , useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

function SearchBar() {
  const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)

  const [movieSearchValue, setMovieSearchValue] = useState('')
  const navigate = useNavigate()
  

  const {data} = useGetSearchMovieQuery ({movieSearchValue, movieORtv})
  // console.log(data);
  

  return (
    <div className=' border-b-2 border-orange-[#4E4E4E] flex justify-between items-center w-[60%] py-2 px-2  
    sm:px-3
     lg:px-5
    
    '>

        <input type="search" placeholder='search' 
        className='w-[80%] bg-[#272727] text-white px-1 border-none outline-none 
        sm:w-[90%]
        '
        onChange={(e) => setMovieSearchValue(e.target.value) }
        onKeyUp={(e) => {
          if(e.key === 'Enter' && e.target.value.length != 0) {
            setMovieSearchValue(e.target.value)
            navigate(`search/${movieSearchValue}`)
          }
        }}
        />

        <Link to={movieSearchValue ? `search/${movieSearchValue}` : '/'}>  
          <BsSearch className='text-white hover:text-gray-100 hover:cursor-pointer
          lg:text-xl
          '  />
        </Link>

    </div>
  )
}

export default SearchBar