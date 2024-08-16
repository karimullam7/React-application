import React from 'react'
import Singin from './Singin'
import Sinout from './Sinout'

function Header({hide}) {


    
  return (
    <div className='head'>
      <h1>This is hEADER</h1>
       {/* { hide ?  <Singin/> : <Sinout/>}   */}
       { !hide ? (<Singin/>) : <Sinout/> }

    </div>
  )
}

export default Header
