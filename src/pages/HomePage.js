import React , {useState} from 'react'
import "../utils/utils.css"
import { Link } from "react-router-dom"

import TestMovieCard from '../components/TestMovieCard'

function HomePage() {

    

  return (
    <div className='
    w-screen min-h-screen flex flex-col justify-center items-center px-2 py-20
    lg:w-[75%] 
    '>
        

        <h1 className='text-4xl'> Home Page</h1>
        <Link to={'/movie/123'} className='bg-gray-800 text-white'> Go to Movie detail page </Link>


        {/* MOVIE CARD CONTAINER */}

        <div className='w-full h-[50vh] overflow-y-scroll bg-pink-400 my-3'>
            <TestMovieCard position= {'first'}/>
            <TestMovieCard position= {'2'}/>
            <TestMovieCard position= {'3'}/>
            <TestMovieCard position= {'4'}/>
            <TestMovieCard position= {'5'}/>
            <TestMovieCard position= {'6'}/>
            <TestMovieCard position= {'8'}/>
            <TestMovieCard position= {'9'}/>
            <TestMovieCard position= {'10'}/>
            <TestMovieCard position= {'11'}/>
            <TestMovieCard position= {'12'}/>
            <TestMovieCard position= {'13'}/>
            <TestMovieCard position= {'14'}/>
            <TestMovieCard position= {'15'}/>
            <TestMovieCard position= {'16'}/>
            <TestMovieCard position= {'17'}/>
            <TestMovieCard position= {'18'}/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            
            <TestMovieCard/>
            <TestMovieCard  position= {'last'}/>
        </div>

        <div className='w-full h-[50vh] overflow-y-scroll bg-pink-400 my-3'>
            <TestMovieCard position= {'first'}/>
            <TestMovieCard position= {'2'}/>
            <TestMovieCard position= {'3'}/>
            <TestMovieCard position= {'4'}/>
            <TestMovieCard position= {'5'}/>
            <TestMovieCard position= {'6'}/>
            <TestMovieCard position= {'8'}/>
            <TestMovieCard position= {'9'}/>
            <TestMovieCard position= {'10'}/>
            <TestMovieCard position= {'11'}/>
            <TestMovieCard position= {'12'}/>
            <TestMovieCard position= {'13'}/>
            <TestMovieCard position= {'14'}/>
            <TestMovieCard position= {'15'}/>
            <TestMovieCard position= {'16'}/>
            <TestMovieCard position= {'17'}/>
            <TestMovieCard position= {'18'}/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            
            <TestMovieCard/>
            <TestMovieCard  position= {'last'}/>
        </div>

        <div className='w-full h-[50vh] overflow-y-scroll bg-pink-400 my-3 '>
            <TestMovieCard position= {'first'}/>
            <TestMovieCard position= {'2'}/>
            <TestMovieCard position= {'3'}/>
            <TestMovieCard position= {'4'}/>
            <TestMovieCard position= {'5'}/>
            <TestMovieCard position= {'6'}/>
            <TestMovieCard position= {'8'}/>
            <TestMovieCard position= {'9'}/>
            <TestMovieCard position= {'10'}/>
            <TestMovieCard position= {'11'}/>
            <TestMovieCard position= {'12'}/>
            <TestMovieCard position= {'13'}/>
            <TestMovieCard position= {'14'}/>
            <TestMovieCard position= {'15'}/>
            <TestMovieCard position= {'16'}/>
            <TestMovieCard position= {'17'}/>
            <TestMovieCard position= {'18'}/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            <TestMovieCard/>
            
            <TestMovieCard/>
            <TestMovieCard  position= {'last'}/>
        </div>

        </div>

        

    
  )
}

export default HomePage