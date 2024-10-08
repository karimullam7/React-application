import React from 'react'

const Navbar = () => {
  return (
   <div className='d-flex justify-content-between mb-2' >
     <div className='d-flex border rounded gap-3 p-2 bg-light'>
      <h5><i class="bi bi-gear"></i> Data</h5>
      <h5><i class="bi bi-bar-chart"></i> Summary</h5>
      <h5><i class="bi bi-card-text"></i> Logs</h5>
    </div>
    <div className='border rounded p-2 bg-light' >
        <h5><i class="bi bi-download"></i> Download</h5>
    </div>
   </div>
  )
}

export default Navbar
