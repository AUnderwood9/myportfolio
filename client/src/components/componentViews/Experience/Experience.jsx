import React from "react";
import timeLine from "./../../globalStyles/TimeLine.scss";
import Listing from "../TimeLine/TimeLine";

function Experience (props){
    // console.log(props.myData);
    
    return(
        <div className={`${timeLine.timeline}`}>
                {props.myData.map((item, index) => {
                    let dataObj = {
                        date: `${item.startDate} - ${item.endDate}`,
                        title: item.jobTitle,
                        company: item.companyName,
                        listing: item.workDescription
                    };
                    return <Listing key={`listing-parent-experience-${index}`} displayData={dataObj}  type="experience"/>;
                })}
        </div>
    );
}

export default Experience;