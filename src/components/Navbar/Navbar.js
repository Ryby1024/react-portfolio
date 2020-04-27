import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";


class Navbar extends Component {

    render() {
        return (
            <div className="navbar-fixed">
            <nav className="navigationBar">
                <Link className="brand-logo" to="/">
                    About
                </Link>

                <ul id="nav-mobile" className="right hide-on-med-and-down">


                    <li>
                        <Link to="/skills" className={window.location.pathname === "/skills" ? "nav-link active" : "nav-link"}>
                            Technical Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        )
    }
}

export default Navbar;