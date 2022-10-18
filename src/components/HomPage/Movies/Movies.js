import React, {useState, useEffect}  from 'react'
import { useGetMoviesQuery } from "../../../Redux/Services/TMDB"
import MovieList from './MovieList'
import { useParams } from 'react-router'
import Pagination from '../../Pagination'

import { useSelector } from 'react-redux'




function Movies() {

    const pageNumberByRedux = useSelector((state) => state.pageNumberSlice.value)

    const [pageNumber, setPageNumber] = useState(1)

    const {category} = useParams()
    const {data , error , isFetching} = useGetMoviesQuery({category , pageNumberByRedux})
    
    useEffect(() => {

    },[pageNumberByRedux])
    
        
  return (
    <div className=" w-full h-auto px-1 py-2 flex flex-row justify-center flex-wrap">
        <h1 className='text-red-900 text-4xl'>  Params : {category} </h1>
        {/* <button onClick={() => console.log(data?.results) } >  LOG </button> */}
        { isFetching &&  <h1 className='font-bold text-4xl' > FETCHING........ </h1>}

        <MovieList movies = {data} />

        {/* <h1 className='text-purple-300 text-5xl'> pageNumberByRedux : {pageNumberByRedux} </h1> */}
        {/* <button className='p-3 bg-green-100' onClick={() => console.log(pageNumberByRedux)}> LOG pageNumberByRedux </button> */}
        <Pagination currentPage={pageNumber} setPageNumber={setPageNumber} totalNumberOfPages={data?.total_pages} />

        
    </div>
  )
}

export default Movies