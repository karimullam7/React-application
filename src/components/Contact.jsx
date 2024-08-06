import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Contact = () => {

    // const {phone, name} = useContext(AppContext)

    const {phone} = useContext(AppContext)
  return (
    <div>
      <h2>Contact</h2>
      <h2>phone: {phone}</h2>
      {/* <h5>Phone: {phone} </h5>
      <h5>name: {name} </h5> */}
    </div>
  )
}

export default Contact
