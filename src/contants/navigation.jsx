import { MdHome } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";

export const navigation =[
  {
    label: 'Tv shows',
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
  ...navigation
]