import React, { useEffect, useState } from "react";
import axios from "axios";

const ProjectData = () => {
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
    <div className="bg-light m-5 p-3" style={{ maxHeight: '400px', overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#888 #ccc' }}>
     
      <table class="table table-bordered ">
        <thead>
          <tr>
            {data.table_headers.map((header, i) => {
              return <th key={i}>
                <div className="d-flex justify-content-between">
                {header.name}
                <i class="bi bi-trash-fill"/>
                </div>
              </th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.table_data.map((row, rowindex) => {
            return (
              <tr key={rowindex}>
                {row.map((cell, cellindex) => {
                  return <td key={cellindex}>{cell}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectData;
