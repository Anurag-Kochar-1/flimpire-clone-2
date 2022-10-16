import './App.css';
import "./utils/utils.css"
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import SideBar from './components/Sidebar/SideBar';
import { Routes , Route , Link } from "react-router-dom"


// xl:w-[80%] xl:ml-[20%] xl:bg-blue-900


function App() {
  return (

    <div className="w-screen h-screen 
    lg:flex lg:flex-row lg:justify-center lg:items-center 
    xl:flex xl:flex-row xl:justify-center xl:items-center 
    ">
    
    <SideBar />
      

      <div className='bg-[#121212] w-screen h-screen overflow-x-hidden overflow-y-scroll hiding-scrollbar
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
