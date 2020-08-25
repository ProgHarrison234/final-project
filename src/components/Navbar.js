import React from 'react';
import { Link } from 'react-router-dom';

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
                            <div className="column pages">
                                  Sign In
                            </div>
                            <div className="column pages">
                                    Find a Wall
                            </div>
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