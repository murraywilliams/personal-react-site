import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// includes
import logo from '../../Assets/images/site-logo-crimson.png';

class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          <img src={logo} alt=""/>
        </div>

        <nav>
          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            {/*<li>
              <Link to="/my-work">My Work</Link>
            </li>*/}
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
            {/*<li className="last">
              <Link to="/get-in-touch">Get in Touch</Link>
          </li>*/}
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
