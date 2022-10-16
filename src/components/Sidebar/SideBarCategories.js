import React from 'react'
import {Categories } from "../../utils/Constants"

function SideBarCategories() {
  return (
    <div className=' py-3'>

      <p className='text-[#ACACAC] text-sm py-2'> Categories </p>

      {Categories.map((category) => {
        return (
          <div className='text-[#ACACAC] flex flex-row justify-start items-center' key={category.id}>

            {category.icon}

            <p className='text-[#ACACAC] ml-3 py-2 hover:text-white hover:cursor-pointer'>{category.name}</p>

          </div>
        )
      })}
    </div>
  )
}

export default SideBarCategories