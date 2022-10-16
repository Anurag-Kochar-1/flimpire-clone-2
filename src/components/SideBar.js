import React from 'react'
import {Categories , genres} from "../utils/constants"
import "../utils/utils.css"
import "../App.css"

function SideBar() {
  return (
 
    <div className='hidden hiding-scrollbar addedSidebarClass
    lg:block lg:h-screen lg:bg-[#121212] lg:w-3/12 lg:fixed lg:top-0 lg:left-0 lg:overflow-y-scroll py-12
    xl:block xl:h-screen xl:bg-[#121212] xl:w-[20%] xl:fixed xl:top-0 xl:left-0 xl:overflow-y-scroll 
    '>
        
        {Categories.map((category) => {
          return (
            <div className='flex row text-white'>
              <p> {category.name} </p>
              {category.icon}
            </div>
          )
        })}


        {genres.map((genre) => {
                  return (
                    <div className='flex row text-red-300'>
                      <p> {genre.name} </p>
                      {genre.icon}
                    </div>
                  )
          })}
    </div>
  )
}

export default SideBar