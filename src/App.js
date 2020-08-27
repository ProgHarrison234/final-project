import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import MyCalendar from './components/Calendar';     
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/home';
import SignIn from './components/SignIn';



function App() {
  return (
    <div className = "App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route path = "/signin" component = {SignIn} />
          {/* <Route path = "/members" component = {Members} />
          <Route path = "/wall" component = {Wall} /> */}
        </Switch>
      </Router>
 <MyCalendar />
      <Footer />
    </div>
  );
}

export default App;
