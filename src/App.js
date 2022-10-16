import './App.css';
import "./utils/utils.css"
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import SideBar from './components/SideBar';
import { Routes , Route , Link } from "react-router-dom"

function App() {
  return (

    <div className="w-screen h-screen 
    lg:flex lg:flex-row lg:justify-center lg:items-center 
    ">
    
    <SideBar />
      

      <div className='bg-indigo-300 w-screen h-screen overflow-x-hidden overflow-y-scroll hiding-scrollbar
      lg:w-3/4 lg:ml-[25%]
      xl:w-[80%] xl:ml-[20%]
      '>
          <Navbar />
          <Routes>
            <Route path='/' exact element={<HomePage />} />
            <Route path='/movie/:id' exact element={<MovieDetailPage />} />
          </Routes>
      </div>

    </div>
  );
}

export default App;
