import React from "react";

function Body() {
  return (
    <div>
      <div className="w-100  bd rounded ">
        <button className=" btn btn-light rounded web ">
          <b>Web developement</b>
        </button>
        <div className="subweb rounded text-primary fw-bold">
          <h1 className="p-3">Frontend Development with ReactJS</h1>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <i class="text-warning bi bi-person-lines-fill  me-2"></i>
          <span>50k Enrolled</span>&nbsp;
          <i class="bi bi-reception-4 text-success"></i>
          <span> All levels</span>&nbsp;
          <i class="text-danger bi bi-patch-exclamation-fill me-2"></i>
          <span>Last Updated</span> &nbsp;
          <i class="bi bi-globe"></i>
          <span> English,Telugu,Hindi</span>
        </div>
      </div>
            <div className="d-flex height">
                <div className="w-75">
                    <div className="im"><img className="a" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnfnOSnkXghbjgXZ0lhiSbGUjiI5HzSJWNQ&usqp=CAU"/></div>
                    <div className="im"> <img className="a" src="https://thumbs.wbm.im/pw/medium/f5e75394f88e25cb4ddf9fd95f512ed7.avif"/></div>
                    <div className="im"> <img className="a"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GmO473O69vIttb17pYCbG3susi8_8O3jNA&usqp=CAU"/></div>
                    <div className="im"> <img className="a" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRAMn9piKDa8ovDKSE_hm3cQIhcMl80B0xQ&usqp=CAU"/> </div> 
                </div>
                <div className="w-25">
                    <h1>karim</h1>
                </div>
                
            </div>
        <div>
       </div>
   </div>
  );
}

export default Body;
