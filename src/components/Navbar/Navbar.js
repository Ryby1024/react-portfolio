import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import "../Navbar/navbar.css";





class Navbar extends Component {






    render() {
        return (
            <div className="navbar-fixed">
                <nav className="navbar">
                    <div className="nav-wrapper">
                        <NavLink id="about-me" exact
                            activeClassName="navbar__link--active"
                            className="navbar__link"
                            to="/">
                            About
                </NavLink>

                        <ul id="nav-mobile" className="right">


                            <li>
                                <NavLink exact
                                    activeClassName="navbar__link--active"
                                    className="navbar__link"
                                    to="/skills">
                                    Technical Skills
                        </NavLink>
                            </li>
                            <li>
                                <NavLink exact
                                    activeClassName="navbar__link--active"
                                    className="navbar__link"
                                    to="/projects">
                                    Projects
                        </NavLink>
                            </li>

                            <li>
                                <NavLink exact
                                    activeClassName="navbar__link--active"
                                    className="navbar__link"
                                    to="/contact">
                                    Contact Me
                        </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;