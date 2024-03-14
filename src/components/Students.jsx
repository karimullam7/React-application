import React from "react";
import { connect } from "react-redux";

function Students (props){
console.log(props);
    return(
        <div className="bt">Students</div>
    )
}

export default connect( function(store){return store}) (Students);