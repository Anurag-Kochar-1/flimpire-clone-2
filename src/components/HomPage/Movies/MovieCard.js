import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import placeholderImage from '../../../images/movieORtvImageForEmpty.png'
import { Rating } from "@mui/material" 


const optionsConfig = {
  rootMargin: '10px 0px 0px 0px',
  threshold: 0,
}

function MovieCard( {movie} ) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const movieORtv = useSelector((state) => state.ToggleTypeSlice.value)
  // console.log('loggin movie from movie card');
  // console.log(movie);

  useEffect(() => {
    let observer = new window.IntersectionObserver((entries, self) => {
      //  console.log(entries)
       
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          loadImage(entry.target)

          self.unobserve(entry.target)
        }
      })
    }, optionsConfig)

    const images = document.querySelectorAll("[data-src]")
    images.forEach(img => {
      observer.observe(img)
    })

    return () => {
      images.forEach(img => {
        observer.unobserve(img)
      })
    }
  },[])

  const loadImage = (image) => {
    image.src = image.dataset.src
  }

  return (

    <div className='bg-[#1F1F1F] w-[55%] h-auto mx-2 my-5 pb-3 rounded-md flex flex-col justify-center items-center hover:scale-110 transition duration-300 ease-in-out 
    sm:w-[35%]
    md:w-[25%]
    lg:w-[20%] lg:mx-4 lg:my-4
    '
    
    >

        <Link to={`/movie/${movie.id}`} >
        {/* {movie?.poster_path &&  <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="rounded-md"  onClick={() => console.log(movie)}/>} */}

            {movie?.poster_path && (
              <img 
              src={``} 
              data-src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
              alt={movie.title} 
              className={isImageLoaded ? "w-full rounded-md transition-all duration-500 ease-linear filter" : "w-full blur-lg rounded-md"}  
              onLoad={() => setIsImageLoaded(true)}
              />
            )}
            {!movie?.poster_path && <img src={placeholderImage} alt={movie.title} className="rounded-md" />}

            {movieORtv === 'movie' && <h3 className='text-[#AFB0A9] text-center px-2 text-base font-semibold py-2'>  {movie.title} </h3>}
            {movieORtv === 'tv' && <h3 className='text-[#AFB0A9] text-center px-2 text-base font-semibold py-2'>  {movie.name} </h3>}

            <div className='py-1 flex flex-row justify-center items-center'>
             <Rating name="half-rating-read"  value={movie?.vote_average / 2} precision={0.1} readOnly />
            </div>
        </Link>

    </div>

  )
}

export default MovieCard