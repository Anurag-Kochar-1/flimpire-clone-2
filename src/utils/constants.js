import { BsGraphUp , BsFillStarFill } from "react-icons/bs"
import { GiPopcorn , GiBoxingGlove} from "react-icons/gi"
import { FaRegCompass } from "react-icons/fa"
import { RiMickeyLine } from "react-icons/ri"
import { BiLaugh } from "react-icons/bi"

export const Categories = [
    {name: "popular", icon: <BsGraphUp /> , id: 1 },
    {name: "top_rated", icon: <BsFillStarFill />  , id: 2},
    {name: "upcoming", icon: <GiPopcorn /> , id: 3 }
]

export const genres = [
    {name: "Action", icon: <GiBoxingGlove /> , id: 1},
    {name: "Adventure", icon: <FaRegCompass /> , id: 2},
    {name: "Animation", icon: <RiMickeyLine /> , id: 3},
    {name: "Comedy", icon: <BiLaugh /> , id: 4},
    {name: "Crime", icon: <BiLaugh /> , id: 5},
    {name: "Documentary", icon: <BiLaugh /> , id: 6},
    {name: "Drama", icon: <BiLaugh /> , id: 7},
    {name: "Family", icon: <BiLaugh /> , id: 8},
    {name: "Fantasy", icon: <BiLaugh /> , id: 9},
    {name: "History", icon: <BiLaugh /> , id: 10},
    {name: "Music", icon: <BiLaugh /> , id: 11},
    {name: "Mystery", icon: <BiLaugh /> , id: 12},
    {name: "Romance", icon: <BiLaugh /> , id: 13},
]


