import React from 'react'
import {genres } from "../../utils/constants"


function SideBarGenres() {
  return (
    <div className=' py-2'>
        <p className='text-[#ACACAC] text-sm py-2'> Genres </p>
        {genres.map((genre) => {
            return (
            <div className='text-[#ACACAC]  flex flex-row justify-start items-center'>

                {genre.icon}
                <p className='text-[#ACACAC] ml-3 py-1 hover:text-white hover:cursor-pointer'>{genre.name}</p>

            </div>
            )
        })}
    </div>
  )
}

export default SideBarGenres