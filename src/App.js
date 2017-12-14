import React, { Component } from 'react';

// components
import Header from './components/headerComponent/Header';
import Footer from './components/footerComponent/Footer';
import HomePage from './components/pages/HomePage';

// includes
import './Assets/css/default.min .css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <Header />

      <HomePage />

      <Footer />

      </div>
    );
  }
}

export default App;
