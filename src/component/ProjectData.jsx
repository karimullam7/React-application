import React from "react";

const ProjectData = ({ data, table_headers, table_data }) => {
  console.log(data);

  return (
    <div
      className="border rounded"
      style={{
        maxHeight: "400px",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "#888 #ccc",
        backgroundColor:"azure"
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' , margin:"10px", paddingTop:"10px" }} >
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
          {Object.entries(data)
            .filter(
              ([key]) =>
                key !== "created" && key !== "modified" && key !== "table_headers" && key !== "workflow_steps" && key !== "table_data" && key !== "id"
            )
            .slice(0, -1)
            .map(([key, value]) => {
              return (
                <div className="d-flex p-1" key={key} style={{ textAlign: 'center' }}>
                  <p className="border rounded pp ">{`${key}` }</p>
                  <p>{`${value}`}</p>
                </div>
              );
            })}
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px'  }}>
            {Object.entries(data)
              .filter(
                ([key]) =>
                  key === "row_count"
              )
              .slice(-1)
              .map(([key, value]) => {
                return (
                 <div className="d-flex textAlignCenter"  >
                  <p className="border rounded" >{`${key}`}</p>
                  <p>{`${value}`}</p>
                 </div>
                        
                );
              })}
          </div>
        </div>
      </div>

      <table className="table table-bordered ">
        <thead className="pc">
          <tr>
            {table_headers.map((header, i) => {
              return (
                <th key={i}>
                  <div className="d-flex  justify-content-between">
                    {header.name}
                    <i className="bi bi-trash-fill" />
                  </div>
                </th>
              );
            })}
          </tr>
          <tr>
            {table_headers.map((headatatype, j) => {
              return (
                <td key={j}>
                  <div className="d-flex border p-1 justify-content-between">
                    {headatatype.type}
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </td>
              );
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
    </div>
  );
};

export default ProjectData;
