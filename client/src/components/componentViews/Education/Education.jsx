import React, { Fragment } from "react";
import timeLine from "./Education.scss";

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
                <div className={`${timeLine.entry}`}>
                    <div className={`${timeLine.title}`}>
                        <h3>2014 - Present</h3>
                        <p>Title, Company</p>
                    </div>
                    <div className={`${timeLine.body}`}>
                        <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
                        <ul>
                            <li>Rerum sit libero possimus amet excepturi</li>
                            <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
                            <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
                        </ul>
                    </div>
                </div>
                <div className={`${timeLine.entry}`}>
                    <div className={`${timeLine.title}`}>
                        <h3>2010 - Present</h3>
                        <p>Title, Company</p>
                    </div>
                    <div className={`${timeLine.body}`}>
                        <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
                        <ul>
                            <li>Rerum sit libero possimus amet excepturi</li>
                            <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
                            <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
                        </ul>
                    </div>
                </div>
                <div className={`${timeLine.entry}`}>
                    <div className={`${timeLine.title}`}>
                        <h3>2009 - 2010</h3>
                        <p>Title, Company</p>
                    </div>
                    <div className={`${timeLine.body}`}>
                        <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
                        <ul>
                            <li>Rerum sit libero possimus amet excepturi</li>
                            <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
                            <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
                        </ul>
                    </div>
                </div>
                <div className={`${timeLine.entry}`}>
                    <div className={`${timeLine.title}`}>
                        <h3>2006 - 2008</h3>
                        <p>Title, Company</p>
                    </div>
                    <div className={`${timeLine.body}`}>
                        <p>Voluptatibus veniam ea reprehenderit atque reiciendis non laborum adipisci ipsa pariatur omnis.</p>
                        <ul>
                            <li>Rerum sit libero possimus amet excepturi</li>
                            <li>Exercitationem enim dolores sunt praesentium dolorum praesentium</li>
                            <li>Modi aut dolores dignissimos sequi sit ut aliquid molestias deserunt illo</li>
                        </ul>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default Education;