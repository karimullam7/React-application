import React from "react";
import axios from "axios";

function KarimZan() {
  var [real, setReal] = React.useState([]);

  axios.get("https://fakestoreapi.com/products").then((res) => {
    console.log(res.data[0]);

    setReal(res.data);
  });

  return (
    <div className="main">
      {real?.map((dataa) => {
        return (
          <div className="subdiv">
            
            <div className="imgdiv"><img className="img" src={dataa.image} /></div>
              <div><h4>{dataa.title}</h4></div>
              <div><p>{dataa.description}</p></div>
              <div><button className="btn btn-primary">Add to cart</button></div>
            
          </div>
        );
      })}
    </div>
  );
}

export default KarimZan;
