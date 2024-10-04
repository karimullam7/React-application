import React from "react";

const ProjectData = ({table_headers , table_data}) => {

  return (
    <div className="bg-light proj m-5 p-3" style={{ maxHeight: '400px',  overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#888 #ccc' }} >
      
      <table class="table table-bordered ">
          <thead >
            <tr>
            {table_headers.map((header, i) => {
              return <th key={i}>
                <div className="d-flex justify-content-between">
                {header.name}
                <i class="bi bi-trash-fill"/>
                </div>
              </th>;
            })}
          </tr>
          <tr>
            {table_headers.map((headatatype,j)=>{
              return(
                
                  <td key={j}>
                  <div className="d-flex border p-1 justify-content-between">
                  {headatatype.type}
                  <i class="bi bi-chevron-down"></i>
                  </div>

                </td>
                

              )
            })}
          </tr>
        </thead>
        <tbody>
          {table_data.map((row, rowindex) => {
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
      <div>
       
      </div>
    </div>
  );
};

export default ProjectData;
