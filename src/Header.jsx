import React from 'react'
import Singin from './Singin'
import Sinout from './Sinout'

function Header({hide}) {
  console.log(hide);

  return (
    <div className='head'>
      <h1>This is hEADER</h1>     
       { hide ?  <Singin/> : <Sinout/>}  


    </div>
  )
}

export default Header
