import React from "react";

const Workflow = ({ workflow_steps }) => {
  return (
    <div className=" border bg-white m-2 p-3">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3>Workflow</h3>
        </div>
        <div>
          <i className="bi bi-x-lg"></i>
          <i className="bi bi-download"></i>
          <i className="bi bi-save"></i>
          <i className="bi bi-calendar-date"></i>
        </div>
      </div>

      <ul style={{ listStyle: "none" }}>
        {workflow_steps.map((workData) => {
          console.log(workData);

          return (
            <div key={workData.id} className="d-flex gap-3 align-items-start">
              <div>
                <i class="bi bi-dash"></i>
              </div>
              <div className="border rounded ">
                <div>
                  <li className="wfl">{workData.name_title}</li>
                </div>
                <div>
                {Object.entries(workData.params_extra).filter(([key, value]) =>  key !== "pipeline" && key !== "dataset2" && key !== "id" && value !== null ).map(([key, value]) => (
                  <li key={key}>
                  <strong>{key}:</strong> 
                  {typeof value === "object" && !Array.isArray(value)
                    ? "[object, object]" 
                    : Array.isArray(value)
                    ?value.join(", ")
                    : typeof value === "string"
                    ? value 
                    : JSON.stringify(value, null, 2)}
                </li>
                ))}
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Workflow;
