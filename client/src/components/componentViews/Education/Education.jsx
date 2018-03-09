import React, { Fragment } from "react";
import timeLine from "./../../globalStyles/TimeLine.scss";
import Listing from "../TimeLine/TimeLine";

function Education(props) {
    props.myData.forEach((item) => { console.log(item) });
    return (
        <Fragment>
            {/* <h2>Education Here</h2>

            {props.myData.map((item, index) => {
                if (item.hasOwnProperty("programName")) {
                    return (
                        <Fragment key={`edu-listing-${index}`}>
                            <h3>{item.programName}</h3>
                            <h4>{item.institution}</h4>
                            <p>{item.eduCert}</p>
                        </Fragment>
                    );
                } else {
                    return (
                        <Fragment key={`edu-listing-${index}`}>
                            <h4>{item.institution}</h4>
                            <p>{item.eduCert}</p>
                        </Fragment>
                    );
                }
            })} */}

            <div className={`${timeLine.timeline}`}>
                {props.myData.map((item, index) => {
                    if (item.hasOwnProperty("programName")) {
                        let dataObj = {
                            date: item.date,
                            title: item.programName,
                            company: item.institution,
                            listing: item.eduCert
                        };
                        return <Listing key={`listing-parent-education-${index}`} displayData={dataObj}  type="education"/>;
                    } else {
                        let dataObj = {
                            date: item.date,
                            company: item.institution,
                            listing: item.eduCert
                        };
                        return <Listing key={`listing-parent-education-${index}`} displayData={dataObj} type="education"/>;
                    }
                })}
            </div>
        </Fragment>
    );
}

export default Education;