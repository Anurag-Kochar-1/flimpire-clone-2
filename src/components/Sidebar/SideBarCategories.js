import React from 'react'
import { Link } from 'react-router-dom'
import {Categories } from "../../utils/constants"
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPageNumberByRedux } from "../../Redux/Slices/PageNumberSlice"

function SideBarCategories() {

  const dispatch = useDispatch()
  const {category } = useParams()

  // console.log(`asdasdasd ${category}`);

  return (
    <div className=' py-3 '>

      <p className='text-[#ACACAC] text-sm py-2'> Categories </p>

      {Categories.map((category) => {

        let categoryNameForSidebar 

        if(category.name === 'popular') {
          categoryNameForSidebar = 'Popular'
        } else if (category.name === 'top_rated') {
          categoryNameForSidebar = 'Top Rated'
        } else if (category.name === 'upcoming') {
          categoryNameForSidebar = 'Upcoming'
        }

        

        return (
          <Link to={`home/${category.name}`} >
            <div className='text-[#ACACAC] flex flex-row justify-start items-center hover:scale-110 transition duration-300 ease-in-out ' key={category.id} onClick={() => {
              dispatch(setPageNumberByRedux(1))
              
            }} >
            

              {category.icon}

              <p className='text-[#ACACAC] ml-3 py-2 hover:text-white hover:cursor-pointer'> {categoryNameForSidebar} </p>


              
            </div>

            {/* <button  className='p-4 bg-red-100 my-1' onClick={() => console.log(categoryNameForSidebar)}> LOG categoryNameForSidebar </button> */}
            {/* <button  className='p-4 bg-red-100 my-1' onClick={() => console.log(category.name)}> LOG category.name </button> */}
          </Link>
        )
      })}
    </div>
  )
}

export default SideBarCategories