import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import MyCalendar from './components/Calendar';     
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import {SignIn} from './components/SignIn';
import Wall from './components/Wall';
import Members from './components/Members';
//import SearchTopic from './components/SearchTopic';
//import PrivateRoute from './components/PrivateRoute';
import {AuthContext} from './contexts/AuthContext';
function App() {
  return (
    <div className = "App">
      <AuthContext.Provider value={false}>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path = "/members" component = {Members} />
          <Route path="/wall" component={Wall} />
          
        </Switch>
      </Router>
      </AuthContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
