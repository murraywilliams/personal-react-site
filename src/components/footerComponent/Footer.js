import React, { Component } from 'react';

// includes
import logo from '../../Assets/images/site-logo-crimson.png';

class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="logo"><img src={logo} alt=""/></div>
        <p>Designed & developed by Murray Williams - Built with the power of <span>ReactJS</span>.</p>
      </footer>
    );
  }
}

export default Footer;
