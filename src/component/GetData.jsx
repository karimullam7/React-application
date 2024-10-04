
import React, { useEffect, useState } from "react";
import axios from "axios";

const GetData = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
          .get("/sample.json")
          .then((res) => {
            console.log("Fetched data:", res.data);
            setData(res.data);
            setLoading(false);
          })
          .catch((error) => {
            console.log("Error to fetch data:", error);
            setLoading(false);
          });
      }, []);
      if (loading) {
        return <div>Loading...</div>; // Display loading state
      }

  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

export default GetData;
