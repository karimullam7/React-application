import React from "react";
import axios from "axios";

function Procart({ cartitems }) {
  return (
    <div>
      <h1> All Product</h1>
      <ul>
        {cartitems?.map((item) => {
          return <li>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default React.memo(Procart);
