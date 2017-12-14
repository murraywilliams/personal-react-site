import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          logo
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">My Work</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
          </ul>
        </nav>

      </header>
    );
  }
}

export default Header;
