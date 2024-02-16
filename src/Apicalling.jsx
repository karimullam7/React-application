import React from "react";
import axios from "axios";

function ApiDataImporting() {
  var [tour, setTour] = React.useState([]);

  axios.get("https://course-api.com/react-tours-project").then(function (res) {
    setTour(res.data);
    console.log(tour);
  });

  return (
    <div>
      {tour.map(function (a) {
        return <li> {a.id} </li>;
      })}
    </div>
  );
}

export default ApiDataImporting;
