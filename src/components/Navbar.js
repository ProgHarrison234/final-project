import React from 'react';
import { Link, Router, BrowserRouter } from 'react-router-dom';

const Navbar = () => {

    return (
        <div>
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="open-book">
                        <img src={require("../Images/open-book.png")} width='80%' height="100%" />
                    </div>
                    <div id="navbar-main">
                        <div id="logo-name">The Study Wall</div>
                        <div className = "columns">
                            <Link to = "/signin" className="column pages">
                                  Sign In
                            </Link>
                            <Link to = "/wall" className="column pages">
                                    Find a Wall
                            </Link>
                        </div>
                    </div>
                    <div class="open-book">
                        <img src={require("../Images/open-book.png")} width='80%' height="100%" />
                    </div>
                </div>
            </nav>
        </div>);
};

export default Navbar;