import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Workflow = ({ workflow_steps }) => {
  return (
    <div className=" border bg-white p-3">
      <div className="d-flex justify-content-between align-items-center border">
        <div>
          <h5>Workflow</h5>
        </div>
        <div>
          <i className="bi bi-x-lg"></i>
          <i className="bi bi-download"></i>
          <i className="bi bi-save"></i>
          <i className="bi bi-calendar-date"></i>
        </div>
      </div>

      <ul style={{ listStyle: "none"  }}>
        {workflow_steps.map((workData) => {
          console.log(workData);

          return (
            <div key={workData.id} className="d-flex gap-3  align-items-start">
              
              <div className="border rounded workdata ">
                <div>
                <Accordion>
                  <AccordionSummary className="wd" expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                  <li className="wfl">{workData.name_title}</li>
                  </AccordionSummary>
                  <AccordionDetails style={{backgroundColor:"azure"}}>
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
                  </AccordionDetails>
                </Accordion>
                </div>
                <div>
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
