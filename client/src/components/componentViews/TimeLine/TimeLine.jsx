import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import timeLine from "./../../globalStyles/TimeLine.scss"

function TimeLine(props) {
    // console.log("props", props);
    let listing = props.displayData.listing;
    let projectInfo = props.projectInfo;
    projectInfo.componentName = props.type;
    // console.log(projectInfo);
    let headingCaption = props.displayData.title ? <Fragment> <h4>{props.displayData.title}</h4> <h5>{props.displayData.company}</h5> </Fragment> 
    : <h4>{props.displayData.company}</h4>;
    let listingElement = Array.isArray(listing) ?  ( <ul>
        {
            listing.map((item,index) => {
                return <li key={`listing-${props.type}-${index}`}>{item}</li>
            })
        }
    </ul> ) : <p>{listing}</p>;
    let skillListingElement;
    if(props.displayData.skills){
        let skillSet = props.displayData.skills;
        skillListingElement = (skillSet.length > 1) ? <h5>{skillSet.join(", ")}</h5> : <h5>{skillSet[0]}</h5>;
    }else{
        skillListingElement = null;
    }
    let placeHolder = props.header ?  <Link to={{pathname: `/project/${props.displayData.title.replace(" ", "")}`, state: projectInfo}} className={`${timeLine.circles}`}> <img src={props.header}/> </Link>: null;


    return (
        <Fragment>
            <div className={`${timeLine.entry}`}>
                {placeHolder}
            {/* <div className={`${timeLine.circles}`}>
                {placeHolder}
            </div> */}
                <div className={`${timeLine.body}`}>
                    <h3>{props.displayData.date}</h3>
                    {headingCaption}
                    {/* {placeHolder} */}
                    {skillListingElement}
                    {listingElement}
                </div>
            </div>
        </Fragment>
    );
}

export default TimeLine;