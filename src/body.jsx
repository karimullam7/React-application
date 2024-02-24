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
            {/* <div className="d-flex height"> */}
            <div className="d-flex align-items-center">
                <div className=" wdinc">
                    <div className="im  div1"><img className="a" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYnfnOSnkXghbjgXZ0lhiSbGUjiI5HzSJWNQ&usqp=CAU"/>
                    <p className="para">Confusion is part of programming Not in Edupoly</p></div>
                    <div className="im div1"> <p className="para ">Computers are fast - developers keep them slow - Edupoly will help</p><img className="a" src="https://thumbs.wbm.im/pw/medium/f5e75394f88e25cb4ddf9fd95f512ed7.avif"/></div>
                    <div className="im div1" > <img className="a" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHRAMn9piKDa8ovDKSE_hm3cQIhcMl80B0xQ&usqp=CAU"/><p className="para">There is no more bugs to fix Once Edupoly is enter</p></div>
                    <div className="im div1"> <p className="para">Lest Join and build your Career  Edupoly Always welcome...</p><img className="a" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4GmO473O69vIttb17pYCbG3susi8_8O3jNA&usqp=CAU"/> </div> 
                </div>
                <div className="sideimg">
                    <img className="sdmg" src="https://t4.ftcdn.net/jpg/02/39/97/31/360_F_239973168_THApLcIPF6hu7ElDjH74MA5M9qr7MePg.webp" alt="" />
                </div>
                
            </div>
        <div>
       </div>
   </div>
  );
}

export default Body;
