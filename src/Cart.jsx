import React, { useState, useEffect } from "react";
import axios from "axios";
import Cartitem from "./cartitem";

function Cartsample() {
  var [cart, setCart] = React.useState([]);
  var [isLoading, setisLoading] = React.useState(true);


  React.useEffect(() => {
    axios.get("https://dummyjson.com/carts").then((res) => {

      console.log(res,'--starl');
      setCart([...res.data.carts[0].products]);
      setisLoading(false)
    });
  }, []);

  function incQut(xyz) {
    console.log(xyz)
    var temp= [...cart]
    temp=temp.map((titem)=>{
        if(titem.id==xyz.id){
            titem.quantity=titem.quantity+1
        }
        return titem
    })
setCart([...temp])

  }

  function decQut(xyz) {
    console.log(xyz)
    var temp= [...cart]
    temp=temp.map((titem)=>{
        if(titem.id==xyz.id){
            titem.quantity=titem.quantity-1
        }
        return titem
    })
setCart([...temp])

  }
  return (
    <div className="main">
{
  isLoading && (<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>)
}

      <h1 className="text-center text-warning">Shopping Cart</h1>
      <div>
{cart.map((a) => {
          return <Cartitem  a={a}  incQut={incQut} decQut={decQut} />
        })}

        <h1 className="classTotal">
          Total
          {cart?.reduce((sum, item) => {
            return sum + (item.price * item.quantity)
          }, 0)}
        </h1>
      </div>
    </div>
  );
}

export default Cartsample;
