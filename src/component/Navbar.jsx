import React from 'react'

const Navbar = () => {
  return (
   <div className='d-flex justify-content-between m-3' >
     <div className='d-flex border rounded gap-3 p-2 bg-light'>
      <h3><i class="bi bi-gear"></i> Data</h3>
      <h3><i class="bi bi-bar-chart"></i> Summary</h3>
      <h3><i class="bi bi-card-text"></i> Logs</h3>
    </div>
    <div className='border rounded p-2 bg-light' >
        <h3><i class="bi bi-download"></i> Download</h3>
    </div>
   </div>
  )
}

export default Navbar
