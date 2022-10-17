import React from 'react'
import SearchBar from './SearchBar'
import { BsSun } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"

// lg:bg-[#272727] 

function Navbar() {
  return (
    <div className='bg-[#272727]  fixed top-0  z-50  w-full h-[10vh] px-3 flex flex-row justify-between items-center
    lg:bg-[#272727] lg:w-[80%] lg:px-10
     
    
    
    '>

        <BsSun className='text-white hover:cursor-pointer' />
        <SearchBar />
        <GiHamburgerMenu className='text-white hover:cursor-pointer lg:hidden' onClick={() => {
            const sideBarClass = document.querySelector(".addedSidebarClass")
            sideBarClass.classList.toggle("mobileSideBar")
            setTimeout(() => {
                console.log(sideBarClass);
            }, 4000);
        }} />

    </div>
  )
}

export default Navbar