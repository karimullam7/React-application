import "./App.css";
import Navbar from "./component/Navbar";
import ProjectData from "./component/ProjectData";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Workflow from "./component/Workflow";

function App() {
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
    <div className="App">
      <div style={{ width: "70vw" }}>
        <Navbar />
        <ProjectData data={data} table_headers={data.table_headers} table_data={data.table_data}/>
      </div>
      <div>
        <Workflow workflow_steps={data.workflow_steps} />
      </div>
    </div>
  );
}

export default App;
