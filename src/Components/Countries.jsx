import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Countries() {

    const [country, setCountry] = useState([])
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then((a)=>{setCountry(a.data)})
    },[])
    console.log(country);
    

  return (
    <div>
      {
        country.map((ctry)=>{
            return <li>{ctry.name}</li>
        })
      }
    </div>
  )
}

export default Countries
