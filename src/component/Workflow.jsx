import React from 'react'

const Workflow = ({workflow_steps}) => {

  return (
    <div>
      <div>
        <h3>Workflow</h3>
        <div>
          {/* Icons */}
          <i className="bi bi-x-lg"></i>
          <i className="bi bi-download"></i>
          <i className="bi bi-save"></i>
          <i className="bi bi-calendar-date"></i>
        </div>
      </div>

      <ul>
        {workflow_steps.map((workData) => {
          console.log(workData)
          
          return (
            <div key={workData.id}>
              <div>
              <li>
                {workData.name_title} 
                
              </li>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Workflow
