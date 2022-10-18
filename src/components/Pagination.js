import React, {useState, useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { nextPage , prevPage } from "../Redux/Slices/PageNumberSlice"


function Pagination( {currentPage , setPageNumber , totalNumberOfPages} ) {

    // console.log(totalNumberOfPages);

    const pageNumberByRedux = useSelector((state) => state.pageNumberSlice.value)
    const dispatch = useDispatch();
 
    const handlePrev = () => {
        if(currentPage !== 1) {
            setPageNumber((prevPageNumber) => prevPageNumber - 1)
        }
    }
    
    const handleNext= () => {
        if(currentPage !== totalNumberOfPages) {
            setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
    }
    
    if(totalNumberOfPages === 0) return null

  return (
    <div className='  w-full h-20 px-4 py-5 mt-4 flex justify-center items-center shadow-2xl '>

        <button className='px-4 py-2 rounded-xl bg-black text-white font-medium hover:shadow-sm hover:shadow-slate-100' onClick={() => {
            if(pageNumberByRedux !== 1) {
                dispatch(prevPage(1))
                console.log('dispatch prevPage is called');
            } else {
                alert('cannot go on page 0')
            }
        }}  >  Prev </button>
        
       

        {/* <h1 className='text-black text-xl px-4'> Page number : {currentPage} </h1> */}
        <h1 className='text-gray-200 text-lg font-bold px-5'> {pageNumberByRedux} </h1>

        <button className='px-4 py-2 rounded-xl bg-black text-white font-medium hover:shadow-sm hover:shadow-slate-100' onClick={() => {
            if( pageNumberByRedux !== totalNumberOfPages ) {
                dispatch(nextPage(1))
                console.log('dispatch nexPage is called');
            } else {
                alert("This is the last page")
            }
        }}>  Next </button>

        {/* <button className='p-3 bg-pink-800' onClick={() => console.log(currentPage) }>  log current page number </button> */}
    </div>
  )
}

export default Pagination