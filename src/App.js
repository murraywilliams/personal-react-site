import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import HomePage from './components/pages/HomePage';
import MyWork from './components/pages/MyWork';
import AboutMe from './components/pages/AboutMe';
import GetInTouch from './components/pages/GetInTouch';

// includes
import './Assets/css/default.min .css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/my-work' component={MyWork} />
            <Route exact path='/about-me' component={AboutMe} />
            <Route exact path='/get-in-touch' component={GetInTouch} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
