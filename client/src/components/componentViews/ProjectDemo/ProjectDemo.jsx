import React, { Fragment } from "react";

function ProjectDemo(props){
    // let placeHolder = <img src={props.header}/>;
    // console.log(props.location.state);
    // console.log(props.location.state.screenShots);
    let keyName = props.location.state.componentName;
    let imageSet = props.location.state.screenShots.map((item, index) => {
        return <img key={`demo-img-${keyName}-${index}`} src={item}/>
    });
    let descriptionSet = props.location.state.description.map((item, index) => {
        return <p key={`demo-text-${keyName}-${index}`}>{item}</p>
    })
    return(
        <Fragment>
            <h3>This is my demo:</h3>
            {imageSet}
            {descriptionSet}
        </Fragment>
    );
}

export default ProjectDemo;