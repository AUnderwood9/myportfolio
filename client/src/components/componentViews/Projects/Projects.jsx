import React, { Fragment } from "react";
import timeLine from "./../../globalStyles/TimeLine.scss";
import Listing from "../TimeLine/TimeLine";
import { Link } from "react-router-dom";

function Projects (props){
    // console.log(props.myData);
    
    return(
        <div className={`${timeLine.timeline}`}>
                {props.myData.map((item, index) => {
                    // console.log(item.headerImg);
                    let dataObj = {
                        date: `${item.startDate}`,
                        title: item.projectTitle,
                        listing: item.projectDescription,
                        skills: item.languages
                    };
                    let projectInfo = {
                        screenShots: item.screenShots,
                        description: item.description
                    }
                    let headerImg = item.headerImg;
                    return (
                        <Fragment>
                            <Listing key={`listing-parent-projects-${index}`} displayData={dataObj}  type="projects" header={headerImg} projectInfo={projectInfo} entryNum={index}/>
                            {/* <Link to="/test" params={{test: "stuff"}}>More Info</Link> */}
                            {/* <Link to={{pathname: "/test", state: {test:"stuff"}}}>More Info</Link> */}
                        </Fragment>
                    );
                })}
        </div>
    );
}

export default Projects;