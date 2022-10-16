import React from 'react'
import {BsSearch} from "react-icons/bs"
// 
function SearchBar() {
  return (
    <div className='border-b-2 border-orange-[#4E4E4E] flex justify-between items-center w-3/5 py-2   
    
    '>

        <input type="search" placeholder='search' 
        className=' bg-[#272727] text-white px-1 border-none outline-none'
        />

        <BsSearch className='text-white hover:text-gray-100 hover:cursor-pointer' />

    </div>
  )
}

export default SearchBar