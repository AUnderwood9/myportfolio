import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styles from "./Home.scss";
import HeaderNav from "../../componentViews/HeaderNav/HeaderNav";
import Summary from "../../componentViews/Summary/Summary";
import Education from "../../componentViews/Education/Education";
import EducationData from "../../dataComponents/EducationData";
import Experience from "../../componentViews/Experience/Experience";
import ContactInfo from "../../componentViews/ContactFooter/ContactFooter";
import Projects from "../../componentViews/Projects/Projects";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <section className={`${styles.navHeader}`}>
                        <HeaderNav styles={styles.transparentNav} />
                    </section>


                    <div className={`jumbotron${styles.myJumbotron} mt-5 mb-5`}>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Summary} />
                                <Route
                                    exact path="/education"
                                    render={(routeProps) => {
                                        return <Education {...routeProps} myData={EducationData} />;
                                    }}
                                />
                                <Route
                                    exact path="/experience"
                                    render={(routeProps) => {
                                        return <Experience {...routeProps} />;
                                    }}
                                />

                                <Route
                                    exact path="/projects"
                                    render={(routeProps) => {
                                        return <Projects {...routeProps} />
                                    }}
                                />
                            </Switch>
                        </div>
                    </div>
                    <div className={`jumbotron ${styles.footerTheme}`}>
                        <div className="container">
                            <ContactInfo/>
                        </div>
                    </div>
                </Fragment>
            </Router>
        );
    }
}

export default Home;