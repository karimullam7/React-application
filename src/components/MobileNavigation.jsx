import React from 'react'
import { mobileNavigation } from '../contants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden h-16 bg-neutral-600 opacity-40 fixed bottom-0 w-full'>
      <div>
        {
            mobileNavigation.map((nav, index)=>{
                return (
                    <NavLink>
                        <div>
                            {nav.icon}
                        </div>
                    </NavLink>
                )
            })
        }
      </div>
    </section>
  )
}

export default MobileNavigation
