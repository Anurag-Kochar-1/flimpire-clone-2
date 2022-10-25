import React from 'react'
import "../../utils/utils.css"
import "../../App.css"
import SidebarLogoBranding from './SidebarLogoBranding'
import SideBarCategories from './SideBarCategories'
import SideBarGenres from './SideBarGenres'

function SideBar() {
  
  

  return (
 
    <div className='hidden hiding-scrollbar addedSidebarClass 

     lg:h-screen lg:bg-[#121212] lg:w-3/12 lg:fixed lg:top-0 lg:left-0 lg:overflow-y-scroll      lg:flex lg:flex-col lg:items-start lg:px-4
     xl:h-screen xl:bg-[#121212] xl:w-[20%] xl:fixed xl:top-0 xl:left-0 xl:overflow-y-scroll      xl:flex xl:flex-col xl:items-start xl:px-4
    '>
        

        
        
        <SidebarLogoBranding />
        <SideBarCategories />
        <SideBarGenres />
        {/* <button className='bg-white p-5' onClick={() => console.log(data)} > LOG CONTEXT DATA </button> */}

        
    
    </div>
  )
}

export default SideBar