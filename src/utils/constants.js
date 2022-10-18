import { BsGraphUp , BsFillStarFill , BsCameraReels , BsHourglass , BsQuestionCircle , BsHeart , BsNewspaper } from "react-icons/bs"
import { GiPopcorn , GiBoxingGlove , GiBlood , GiDualityMask , GiPistolGun , GiWesternHat , GiSoap , GiSpeaker} from "react-icons/gi"
import { TbMoodKid  } from "react-icons/tb"
import { FaRegCompass } from "react-icons/fa"
import { RiMickeyLine } from "react-icons/ri"
import { BiLaugh , BiGhost , BiWorld } from "react-icons/bi"
import {MdFamilyRestroom , MdScience} from "react-icons/md"
import {SlMagicWand} from "react-icons/sl"
import {FiMusic , FiMonitor} from "react-icons/fi"
import {TbActivityHeartbeat} from "react-icons/tb"


export const Categories = [
    {name: "popular", icon: <BsGraphUp className="hover:text-white"/> , id: 1 },
    {name: "top_rated", icon: <BsFillStarFill className="hover:text-white"/>  , id: 2},
    {name: "upcoming", icon: <GiPopcorn className="hover:text-white"/> , id: 3 }
]

export const genres = [
    {name: "Action", icon: <GiBoxingGlove className="hover:text-white" /> , id: 28},
    {name: "Adventure", icon: <FaRegCompass className="hover:text-white" /> , id: 12},
    {name: "Animation", icon: <RiMickeyLine className="hover:text-white"/> , id: 16},
    {name: "Comedy", icon: <BiLaugh className="hover:text-white"/> , id: 35},
    {name: "Crime", icon: <GiBlood className="hover:text-white"/> , id: 80},
    {name: "Documentary", icon: <BsCameraReels className="hover:text-white"/> , id: 99},
    {name: "Drama", icon: <GiDualityMask className="hover:text-white"/> , id: 18},
    {name: "Family", icon: <MdFamilyRestroom className="hover:text-white"/> , id: 10751},
    {name: "Fantasy", icon: <SlMagicWand className="hover:text-white"/> , id: 14},
    {name: "History", icon: <BsHourglass className="hover:text-white"/> , id: 36},
    {name: "Horror", icon: <BiGhost className="hover:text-white"/> , id: 27},
    {name: "Music", icon: <FiMusic className="hover:text-white"/> , id: 10402},
    {name: "Mystery", icon: <BsQuestionCircle className="hover:text-white"/> , id: 9648},
    {name: "Romance", icon: <BsHeart className="hover:text-white"/> , id: 10749},
    {name: "Science Fiction", icon: <MdScience className="hover:text-white"/> , id: 878},
    {name: "TV Movie", icon: <FiMonitor className="hover:text-white"/> , id: 10770},
    {name: "Thriller", icon: <TbActivityHeartbeat className="hover:text-white"/> , id: 53},
    {name: "War", icon: <GiPistolGun className="hover:text-white"/> , id: 10752},
    {name: "Western", icon: <GiWesternHat  className="hover:text-white"/> , id: 37},
]



export const TvGenres = [
    {
        id: 10759,
        name: "Action & Adventure",
        icon: <GiBoxingGlove className="hover:text-white" />
        
      },
      {
        id: 16,
        "name": "Animation",
        icon: <RiMickeyLine className="hover:text-white" />
      },
      {
        id: 35,
        name: "Comedy",
        icon: <BiLaugh className="hover:text-white" />
      },
      {
        id: 80,
        name: "Crime",
        icon: <GiBlood className="hover:text-white" />
      },
      {
        id: 99,
        name: "Documentary",
        icon: <BsCameraReels className="hover:text-white" />
      },
      {
        id: 18,
        name: "Drama",
        icon: <GiDualityMask className="hover:text-white" />
      },
      {
        id: 10751,
        name: "Family",
        icon: <MdFamilyRestroom className="hover:text-white" />
      },
      {
        id: 10762,
        name: "Kids",
        icon: <TbMoodKid className="hover:text-white" />
      },
      {
        id: 9648,
        name: "Mystery",
        icon: <BsQuestionCircle className="hover:text-white" />
      },
      {
        id: 10763,
        name: "News",
        icon: <BsNewspaper className="hover:text-white" />
      },
      {
        id: 10764,
        name: "Reality",
        icon: <BiWorld className="hover:text-white" />
      },
      {
        id: 10765,
        name: "Sci-Fi & Fantasy",
        icon: <SlMagicWand className="hover:text-white" />
      },
      {
        id: 10766,
        name: "Soap",
        icon: <GiSoap className="hover:text-white" />
      },
      {
        id: 10767,
        name: "Talk",
        icon: <GiSpeaker className="hover:text-white" />
      },
      {
        id: 10768,
        name: "War & Politics",
        icon: <GiPistolGun className="hover:text-white" />
      },
      {
        id: 37,
        name: "Western",
        icon: <GiWesternHat className="hover:text-white" />
      }
]