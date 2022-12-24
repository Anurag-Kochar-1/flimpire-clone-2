import { useEffect, useRef } from "react"
import "../../utils/utils.css"
import "../../App.css"
import SidebarLogoBranding from './SidebarLogoBranding'
import SideBarCategories from './SideBarCategories'
import SideBarGenres from './SideBarGenres'



function SideBar() {
  // console.log(`------------ SideBar ------------ `)
  const sidebarRef = useRef(null)

  const handler = (e) => {
    console.log(`handler function is running`);
    if(!sidebarRef.current.contains(e.target)) {
      const sideBarClass = document.querySelector(".addedSidebarClass")
      sideBarClass.classList.remove("mobileSideBar")
    }
  }

  useEffect(() => {
  document.addEventListener("mousedown" , handler)

  return () => {
    document.removeEventListener("mousedown" , handler)
  }
  },[]) 
  

  return (
 
    <div className='hidden hiding-scrollbar addedSidebarClass 
     lg:h-screen lg:bg-[#121212] lg:w-3/12 lg:fixed lg:top-0 lg:left-0 lg:overflow-y-scroll lg:flex lg:flex-col lg:items-start lg:px-4
     xl:h-screen xl:bg-[#121212] xl:w-[20%] xl:fixed xl:top-0 xl:left-0 xl:overflow-y-scroll xl:flex xl:flex-col xl:items-start xl:px-4'
     ref={sidebarRef}
     >
        
      <SidebarLogoBranding />
      <SideBarCategories />
      <SideBarGenres />

    
    </div>
  )
}

export default SideBar