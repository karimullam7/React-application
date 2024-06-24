import axios from 'axios';
import React, { useEffect } from 'react'

function User() {
    const [someData,setSomeData] = React.useState([])
    useEffect(()=>{
        axios.get('https://reqres.in/api/users?pages=1')
        .then((res)=>{
            setSomeData(res.data)
        })
    },[])
    console.log(someData);
  return (
    <div>
      
    </div>
  )
}

export default User


//
