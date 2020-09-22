import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from "../contexts/AuthContext";



export const SignIn = (props) => {

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

export const Login = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();
  
    function postLogin() {
      axios.post("/Signin", {
        userName,
        password
      }).then(result => {
        if (result.status === 200) {
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      }).catch(e => {
        setIsError(true);
      });
    }
  
    if (isLoggedIn) {
      return <Redirect to="/members" />;
    }
  
    // return (
    //   <Card>
        
    //     <Form>
    //       <Input
    //         type="username"
    //         value={userName}
    //         onChange={e => {
    //           setUserName(e.target.value);
    //         }}
    //         placeholder="email"
    //       />
    //       <Input
    //         type="password"
    //         value={password}
    //         onChange={e => {
    //           setPassword(e.target.value);
    //         }}
    //         placeholder="password"
    //       />
    //       <Button onClick={postLogin}>Sign In</Button>
    //     </Form>
        
    //       { isError &&<Error>The username or password provided were incorrect!</Error> }
    //   </Card>
    //);
  }
  


