import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import htmLogo from '../../Assets/images/tool-logos/html-css-js-logo.jpg';
import gitLogo from '../../Assets/images/tool-logos/git-logo.jpg';
import herokuLogo from '../../Assets/images/tool-logos/heroku-logo.jpg';
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
                  <div className="banner-copy">
                    <p>It's only through creation can I truly master my craft</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h2 className="section-heading">GET TO KNOW ME.</h2>
            <p>Hello, I'm a digital enthusiast from Cape Town, South Africa. When I'm not pushing pixels around you'll find me riding waves, being a father and/or husband.</p>
          </div>
        </div>
        <div id="work-history">
          <div className="col-md-6">
          </div>
          <div className="col-md-6 no-padding">
            <div class="work-history">
              <div class="work">
                <h2>01</h2>
                <h3>VentureWeb</h3>
                <p>Senior Digital Manager <br/>2010 - Present</p>
              </div>
              <div class="work">
                <h2>02</h2>
                <h3>CreataBrand</h3>
                <p>Owner <br/>2008 - 2010</p>
              </div>
              <div class="work">
                <h2>03</h2>
                <h3>MiWay</h3>
                <p>Marketing Coordinator <br/>2005 - 2006</p>
              </div>
              <div class="work">
                <h2>04</h2>
                <h3>Gecho</h3>
                <p>Graphic Designer <br/>2005 - 2006</p>
              </div>
            </div>
          </div>
        </div>
        <div id="quote-section" className="col-md-12">
          <h2 className="cover-heading">The future is alread here -<br/> it's just not evenly distributed </h2>
            <p className="lead">~ William Gibson</p>
        </div>
        <div className="container">
          <div className="row">
            <h2 className="section-heading">TOOLS OF CHOICE.</h2>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={htmLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={reactLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={sassLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={wordpressLogo} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <img src={gitLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={herokuLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={vscLogo} alt="" />
            </div>
            <div className="col-md-3">
              <img src={sketchLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
