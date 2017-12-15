import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import htmLogo from '../../Assets/images/tool-logos/html-css-js-logo.jpg';
import gitLogo from '../../Assets/images/tool-logos/git-logo.jpg';
import jqueryLogo from '../../Assets/images/tool-logos/jquery-logo.jpg';
import meteorLogo from '../../Assets/images/tool-logos/meteor-logo.jpg';
import nodeLogo from '../../Assets/images/tool-logos/node-logo.jpg';
import reactLogo from '../../Assets/images/tool-logos/react-logo.jpg';
import sassLogo from '../../Assets/images/tool-logos/sass-logo.jpg';
import sketchLogo from '../../Assets/images/tool-logos/sketch-logo.jpg';
import vscLogo from '../../Assets/images/tool-logos/vsc.jpg';
import wordpressLogo from '../../Assets/images/tool-logos/wordpress-logo.jpg';

class AboutMe extends Component {
  render() {
    return (
      <div id="about" className="container-fluid">
        <div className="sub-banner">
          <div className="container">
            <div id="about-intro" className="row">
              <div className="col-md-12">
                <h1>ABOUT ME.</h1>
                <p>It's only through creation can I truly master my craft</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h2 className="section-heading">GET TO KNOW ME.</h2>
            <p>Hello, I'm a pixel transformist from Cape Town, South Africa. When I'm not pushing pixels around you'll find me riding waves, being a father and/or husband.</p>
          </div>
        </div>
        <div id="quote-section" className="col-md-12">
          <h2 className="cover-heading">The future is alread here -<br/> it's just not evenly distributed </h2>
            <p className="lead">~ William Gibson</p>
        </div>
        <div className="container">
          <div className="row">
            <h2 className="section-heading">MY TOOLS OF CHOICE.</h2>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={htmLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={gitLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={reactLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={sassLogo} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={sketchLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={vscLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={meteorLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={nodeLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
