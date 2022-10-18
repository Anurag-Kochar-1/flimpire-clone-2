import React, {useState, useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { nextPage , prevPage } from "../Redux/Slices/PageNumberSlice"


function Pagination( {currentPage , setPageNumber , totalNumberOfPages} ) {

    console.log(totalNumberOfPages);

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
    <div className='bg-red-300 w-full h-20 flex justify-center items-center'>
        <button className='p-3 bg-green-200' onClick={() => {
            if(pageNumberByRedux !== 1) {
                dispatch(prevPage(1))
                console.log('dispatch prevPage is called');
            } else {
                alert('cannot go on page 0')
            }
        }}  >  Prev </button>
        
       

        {/* <h1 className='text-black text-xl px-4'> Page number : {currentPage} </h1> */}
        <h1 className='text-gray-600 text-3xl px-4'> Page number by redux : {pageNumberByRedux} </h1>

        <button className='p-3 bg-blue-200' onClick={() => {
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