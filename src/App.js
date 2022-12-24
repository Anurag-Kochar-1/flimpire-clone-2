import './App.css';
import "./utils/utils.css"
import React, { lazy, Suspense } from 'react'
import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
// import MovieDetailPage from './pages/MovieDetailPage';
// import SearchFeed from './pages/SearchFeed';
// import MoviesByGenre from './pages/MoviesByGenre';
import SideBar from './components/Sidebar/SideBar';
import { Routes, Route } from "react-router-dom"
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

// Codde Splitting
const SearchFeed = lazy(() => import('./pages/SearchFeed'))
const MovieDetailPage = lazy(() => import('./pages/MovieDetailPage'))
const MoviesByGenre = lazy(() => import('./pages/MoviesByGenre'))
const HomePage = lazy(() => import('./pages/HomePage'))


function App() {


  return (
    <div className="w-screen h-screen 
    lg:flex lg:flex-row lg:justify-center lg:items-center 
    xl:flex xl:flex-row xl:justify-center xl:items-center 
    ">

      <SideBar />


      <div className='bg-[#121212] w-screen h-screen overflow-x-hidden overflow-y-scrollhiding-scrollbar
    lg:w-3/4 lg:ml-[25%]
    xl:w-[80%] xl:ml-[20%]  '>

        <Navbar />

          <Suspense fallback={<div className='w-screen h-screen bg-black flex justify-center items-center'> <AiOutlineLoading3Quarters className='animate-spin w-10 h-10 text-white' /> </div>}>
            <Routes>
                <Route path='/' exact element={<HomePage />} />
                <Route path='/home/:category' exact element={<HomePage />} />
                <Route path='/movie/:id' exact element={<MovieDetailPage />} />
                <Route path='/search/:moviequery' exact element={<SearchFeed />} />
                <Route path='/movies/:genreid/:genrename' exact element={<MoviesByGenre />} />
            </Routes>
          </Suspense>
      </div>



    </div>

  );
}

export default App;
