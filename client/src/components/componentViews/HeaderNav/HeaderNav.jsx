import React from "react";
import { Link } from "react-router-dom";

function HeaderNav(props) {
    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${props.styles.transparentNav}`}>
            <span className="navbar-brand" href="#">Navbar w/ text</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/education" className="nav-link">Education</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/experience" className="nav-link">Work Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link">Projects</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    Navbar text with an inline element
                </span>
            </div>
        </nav>
    );
}

export default HeaderNav;