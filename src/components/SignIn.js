import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = (props) => {

    return ( 
    <div>
        <div className = "container">
            <h2 className = "signing-in">Input your info to Sign In</h2>
            <br/><br/>
            <input className = "input" type = "email" placeholder = "Email"></input>
            <br/><br/>
            <input className = "input" type = "password" placeholder = "Password"></input>
            <br/><br/>
            <Link to = "/members">
                <button className = "button is-info" id = "signin-btn">
                    Sign In
                </button>
            </Link>
            <br/>  
        </div>
    </div>
    );
};

export default SignIn;