import React from "react";

function Cartitem({a,incQut,decQut}){
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
}

export default Cartitem;