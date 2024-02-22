import React, { useState, useEffect } from "react";
import axios from "axios";

function Cartsample() {
  var [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://dummyjson.com/carts").then((res) => {
      setCart([...res.data.carts[0].products]);
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
      <h1 className="text-center text-warning">Shopping Cart</h1>
      <div>
{cart.map((a) => {
          return (
            <div className="d-flex justify-content-around align-items-center  p-3  rounded shadow">
                <img className="rounded" width={100} src={a.thumbnail} />
                <div className="w"><b>{a.title}</b></div>
                <b>Price : ${a.price}</b>
                 <div>
                 <button  onClick={()=>{incQut(a)}} className="btn btn-warning"> + </button>
                  <b>&nbsp; {a.quantity} &nbsp;</b>
                  <button onClick={()=>{decQut(a)}} className="btn btn-primary"> - </button>
                 
                 </div>
                  <b>Each Qty Total   {a.price * a.quantity}</b>                

            </div>
          );
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
