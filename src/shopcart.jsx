import React from "react";
import axios from "axios";
import Procart from "./productscart";

function KarimZan() {
  var [real, setReal] = React.useState([]);
  var [cartitems, setcartitems] = React.useState([]);


  React.useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res) => {
    setReal(res.data);
  })
  },[]);

  function addTocart(dataa){

    if(dataa.quantity){
      dataa.quantity++
    }
    else{
      dataa.quantity=1
      setcartitems([...cartitems,{...dataa}])
    }
  }

  React.useEffect(()=>{
    console.log(real);
  } , [real])

  return (
    <div  className="big">
      <div className="main">
      {real?.map((dataa) => {
        return (
          <div className="subdiv">
            <div className="imgdiv"><img className="img" src={dataa.image} /></div>
              <div><h6>{dataa.title}</h6></div>
              <div><button className="btn btn-primary" onClick={()=>(addTocart(dataa))}>Add to cart</button></div>
            
          </div>
        );
      })}
    </div>
    <div className="pilladiv">
      <Procart cartitems={cartitems}   />
    </div>
    </div>
  );
}

export default KarimZan;
