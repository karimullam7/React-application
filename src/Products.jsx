import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductApi() {
  const [prods, setProds] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((resp) => {
      setProds([...prods, resp.data]);
      console.log(prods);
    });
  }, []);

  return (
    <div className="main">
      <div>
        <h1 className="text-center">Our Tours</h1>
        {!prods && <h1>Loading...</h1>}
      </div>
      <div>
        <div>
          {prods?.map((a, i) => {
            // ? means while getting the data then only load
            return (
              <div className="rounded w-50 m-auto mt-5 text-center boxes ">
                <img 
                  className="w-100 "
                  src={a.products[i].images[0]}
                  alt="im"
                />
                <div className="p-4 text-dark">
                  <div className="d-flex justify-content-between align-items-center">
                    <h1>{a.products[i].title}</h1>
                    <h2>$ {a.products[i].price}</h2>
                  </div>
                  <h6>{a.products[i].description}</h6>
                  <p>Available stock: {a.products[i].stock}</p>
                  <p className="btn btn-success">
                    {a.products[i].rating} Rating
                  </p>
                  <div>
                    <button className="btn btn-outline-danger">
                      Not Interested
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductApi;
