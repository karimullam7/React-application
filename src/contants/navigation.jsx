import { MdHome } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export const navigation =[
  {
    label: 'Tvshow',
    href:"tv",
    icon: <PiTelevisionFill/>
  },
  {
    label: 'Movies',
    href: 'movies',
    icon: <BiSolidMoviePlay/>
  }
]

export const mobileNavigation =[
  {
    label:'Home',
    href:"/",
    icon:<MdHome/>
  },
  ...navigation,
  {
    label:"Search",
    href:"/search",
    icon: <IoSearchOutline/>
  }
]