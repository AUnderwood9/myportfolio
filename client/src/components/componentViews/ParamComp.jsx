import React from "react";

function ParamComp(props){
    console.log(props.location.state);
    return (
        <h3>{props.location.state.test}</h3>
    );
}

export default ParamComp;