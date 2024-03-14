import React from "react";
import { connect } from "react-redux";

function Countries(){
     return (
        <div className='bt'>
            <h1>Countries.....</h1>
        </div>
     )
}

export default connect(store=>store) (Countries);