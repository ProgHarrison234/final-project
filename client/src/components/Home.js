import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className = "container">
            <br/>
            <h1 className = "info">To access the study wall and all its knowledge, please sign up below!</h1>
            <h2 className = "info">Returning learners, please sign in</h2>
            <br/>
            <input className = "input" type = "text" placeholder = "Name"></input>
            <br/><br/>
            <input className = "input" type = "email" placeholder = "Email"></input>
            <br/><br/>
            <input className = "input" type = "password" placeholder = "Password"></input>
            <br/><br/>
            <Link to = "/members">
                <button className = "button is-info" id = "sign-up-btn">
                    Sign Up
                </button>
            </Link>
            <br/><br/>
            <img src = {require("../Images/Desk Live Sharing.png")} alt="comic of people reading" />
        </div>
            
    );
};

export default Home;
