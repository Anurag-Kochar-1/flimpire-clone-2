import React from 'react'
import { Link } from 'react-router-dom'
import {Categories } from "../../utils/Constants"
import { useParams } from 'react-router-dom'

function SideBarCategories() {
  const {category } = useParams()

  console.log(`asdasdasd ${category}`);

  return (
    <div className=' py-3'>

      <p className='text-[#ACACAC] text-sm py-2'> Categories </p>

      {Categories.map((category) => {
        return (
          <Link to={`home/${category.name}`} >
            <div className='text-[#ACACAC] flex flex-row justify-start items-center' key={category.id} >
            

              {category.icon}

              <p className='text-[#ACACAC] ml-3 py-2 hover:text-white hover:cursor-pointer'>{category.name}</p>

            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default SideBarCategories