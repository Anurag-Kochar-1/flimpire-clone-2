import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import MovieList from '../components/HomPage/Movies/MovieList'
import { useGetMoviesByGenreQuery } from "../Redux/Services/TMDB"
import axios from "axios"
import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'





function MoviesByGenre() {
  const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)

  const pageNumberByRedux = useSelector((state) => state.pageNumberSlice.value)

  const {genreid , genrename} = useParams() 
  const genreNameHeading = genrename.substring(1)
  const [genreMovieApiData, setGenreMovieApiData] = useState([]);

  const [genreIDState, setGenreIDState] = useState(0)

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
      api_key: '0b41029c719b5161130e5c826d39d2fa',
      sort_by: 'popularity%2Edesc',
      page: '1',
      with_genres: `${genreid}`
    }
  };

  useEffect(() => {
    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    //   setGenreMovieApiData(response.data)
    // }).catch(function (error) {
    //   console.error(error);
    // });
  },[genreid])

  useEffect(() => {
    setGenreIDState(genreid)
  },[genreid])
  
    

    const {data ,error} = useGetMoviesByGenreQuery({genreIDState, pageNumberByRedux, movieORtv})
    // console.log(data)
    // console.log('data is printed');

    

  return (
    <div className='
    w-screen min-h-screen flex flex-col justify-start items-center pt-[11vh]
    lg:w-[100%] 
    '>
    
    {/* {error && <h1 className='text-white text-4xl'> FAILED API REQUEST </h1>} */}
    {/* {!error &&  <MovieList movies={data} />} */}
    <h1 className='text-white text-4xl'> {genreNameHeading}</h1>
    <MovieList movies={data} />

    <Pagination />

    {/* <h1 className='text-white text-3xl'> {genreid} : Redux : {pageNumberByRedux} </h1> */}
    {/* <MovieList movies={genreMovieApiData} /> */}
    {/* <button className='bg-red-500 p-24' onClick={() => console.log(genreMovieApiData) }> LOG setGenreMovieApiData </button> */}
    </div>
  )
}

export default MoviesByGenre