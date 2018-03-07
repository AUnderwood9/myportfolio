import React, { Fragment } from "react";

function Education(props){
    props.myData.forEach((item) => { console.log(item)});
    return(
        <Fragment>
            <h2>Education Here</h2>

            {props.myData.map((item, index) => {
                if(item.hasOwnProperty("programName")){
                    return(
                        <Fragment key={`edu-listing-${index}`}>
                            <h3>{item.programName}</h3>
                            <h4>{item.institution}</h4>
                            <p>{item.eduCert}</p>
                        </Fragment>
                    );
                }else{
                    return(
                        <Fragment key={`edu-listing-${index}`}>
                            <h4>{item.institution}</h4>
                            <p>{item.eduCert}</p>
                        </Fragment>
                    );
                }
            })}
        </Fragment>
    );
}

export default Education;