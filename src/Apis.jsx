import React, { useEffect } from "react";

function FetchData(){

    const [dat , setDat] = React.useState([])

    useEffect(()=>{

        fetch("https://restcountries.com/v3.1/all")
        .then((res)=>{
            return (res.json())
        })
        .then((dt)=>{
            setDat(dt)
        })

    },[])

    console.log(dat)
    return(<>
    {
           dat.map((a)=>{
            return(<h1>{a.name.common}</h1> )
           })
        }
    </>
    )
}



export default FetchData;