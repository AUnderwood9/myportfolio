import React from "react";
import timeLine from "./../../globalStyles/TimeLine.scss";
import Listing from "../TimeLine/TimeLine";

function Projects (props){
    // console.log(props.myData);
    
    return(
        <div className={`${timeLine.timeline}`}>
                {props.myData.map((item, index) => {
                    console.log(item.headerImg);
                    let dataObj = {
                        date: `${item.startDate}`,
                        title: item.projectTitle,
                        listing: item.projectDescription,
                        skills: item.languages
                    };
                    let headerImg = item.headerImg;
                    return <Listing key={`listing-parent-projects-${index}`} displayData={dataObj}  type="projects" header={headerImg}/>;
                })}
        </div>
    );
}

export default Projects;