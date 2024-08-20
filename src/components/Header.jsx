import { NavLink, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.png"
import userIcon from "../assets/user.png"
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {

  const [searchInput, seSearchInput] = useState("")
  const navigate= useNavigate()
  const navigation =[
    {
      label: 'Tv shows',
      href:"tv"
    },
    {
      label: 'Movies',
      href: 'movies'
    }
  ]

  useEffect(()=>{
      navigate(`/search?q=${searchInput}`)
  },[searchInput])
  return (
    <header className='fixed  top-0 w-full h-16 bg-neutral-600 bg-opacity-75'>
        <div className='container mx-auto px-3 flex items-center h-full'>
              <div>
                <img  src={logo} alt='logo' width={120}/>
              </div>
              <nav className=" hidden lg:flex items-center gap-3">
                {
                  navigation.map((nav, index)=>{
                    return (
                      <div>
                          <NavLink key={nav.label} to={nav.href} className={({isActive})=>`px-2 hover:text-neutral-100 ${isActive ? "text-neutral-100": ""}`}>
                            {nav.label}
                          </NavLink>
                      </div>
                    )
                  })
                }
              </nav>
              <div className="ml-auto flex items-center gap-5">
                <form className="flex items-center">
                  <input type="text" placeholder="Search here" 
                  className="bg-transparent px-4 py-2 outline-none border-none"
                  onChange={(e)=>{seSearchInput(e.target.value)}}
                  value={searchInput}
                  />
                  <button className="text-2xl text-white">
                  <IoSearchOutline/>
                </button>
                </form>
                
                <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
                  <img  src={userIcon} alt="usericon" width='w-full h-full'/>
                </div>
              </div>
        </div>
    </header>
  )
}

export default Header
