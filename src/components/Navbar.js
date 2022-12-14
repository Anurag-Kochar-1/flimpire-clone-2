import "../App.css"
import SearchBar from './SearchBar'
import { GiHamburgerMenu } from "react-icons/gi"
import DropdownMenu from './DropdownMenu'


function Navbar() {
  

  return (
    <div className='bg-[#272727] fixed top-0  z-50  w-full h-[10vh] px-2 flex flex-row justify-between items-center
    lg:bg-[#272727] lg:w-[80%] lg:px-10' 
    >

      <DropdownMenu />

      <SearchBar />

      <GiHamburgerMenu className='text-white hover:cursor-pointer lg:hidden' onClick={() => {
        const sideBarClass = document.querySelector(".addedSidebarClass")
        sideBarClass.classList.toggle("mobileSideBar")

      }} />

    </div>
  )
}

export default Navbar