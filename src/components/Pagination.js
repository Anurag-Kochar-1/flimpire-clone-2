import React, {useState, useEffect} from 'react'

function Pagination( {currentPage , setPageNumber , totalNumberOfPages} ) {


    
    
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
        <button className='p-3 bg-green-200'
        onClick={handlePrev}
        >  Prev </button>

        <h1 className='text-black text-xl px-4'> Page number : {currentPage} </h1>

        <button className='p-3 bg-blue-200' onClick={handleNext}>  Next </button>

        {/* <button className='p-3 bg-pink-800' onClick={() => console.log(currentPage) }>  log current page number </button> */}
    </div>
  )
}

export default Pagination