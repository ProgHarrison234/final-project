import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SignIn from './components/SignIn';



function App() {
  return (
    <div className = "App">
      <Router>
        <Navbar />

        <Switch>
          <Route path = "/" component = {Home} />
          <Route path = "/signin" component = {SignIn} />
          {/* <Route path = "/members" component = {Members} />
          <Route path = "/wall" component = {Wall} /> */}
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
