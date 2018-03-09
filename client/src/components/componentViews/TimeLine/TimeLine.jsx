import React, { Fragment } from "react";
import timeLine from "./../../globalStyles/TimeLine.scss"

function TimeLine(props) {
    console.log("props", props);
    let listing = props.displayData.listing;
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
    let placeHolder = props.header ? <img src={props.header}/> : null;


    return (
        <Fragment>
            <div className={`${timeLine.entry}`}>
                <div className={`${timeLine.title}`}>
                    <h3>{props.displayData.date}</h3>
                    {headingCaption}
                </div>
                <div className={`${timeLine.body}`}>
                    {/* <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
                    <ul>
                        <li>Rerum sit libero possimus amet excepturi</li>
                        <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
                        <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
                    </ul> */}
                    {placeHolder}
                    {skillListingElement}
                    {listingElement}
                </div>
            </div>
        </Fragment>
    );
}

export default TimeLine;