import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Includes
import portfolioIcon from '../../Assets/images/my-portfolio-icon.png';
import touchIcon from '../../Assets/images/get-in-contact-icon.png';
import designIcon from '../../Assets/images/digital-design.png';
import devIcon from '../../Assets/images/web-development.png';
import commIcon from '../../Assets/images/e-commerce.png';
import marketingIcon from '../../Assets/images/online-marketing.png';

class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1>I HELP BRING IDEAS TO LIFE WITH ENDLESS POSSIBILITIES.</h1>
            <p>I’m a web developer from Cape Town, with a passion for innovative digital efficieny.</p>
            <Link to='get-in-touch' className="btn-lg">Get In Touch</Link>
          </div>
        </div>
        <div className="row">
          <h2>A LITTLE BIT ABOUT ME</h2>
          <p>I design and develop experiences that make people’s lives simple. I find the web an exciting place with a constant pull & push to innovate—you don’t have to brave it alone.</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img src={portfolioIcon} alt=""/>
            <h3>My Work</h3>
            <p>Take a look at some of my recent work</p>
          </div>
          <div className="col-md-6">
            <img src={touchIcon} alt=""/>
            <h3>Get in Touch</h3>
            <p>Let’s connect and discuss you next big idea</p>
          </div>
        </div>
        <div className="row">
          <h2>MY AREAS OF EXPERTISE</h2>
        </div>
        <div className="row">
        <div className="col-md-3">
          <img src={designIcon} alt=""/>
          <h5>Digital Design</h5>
          <p>UX/UI, Mobile First Design, Branding & CI</p>
        </div>
        <div className="col-md-3">
          <img src={devIcon} alt=""/>
          <h5>Web Development</h5>
          <p>WordPress Development, ReactJS Development, Custom Theme Development</p>
        </div>
        <div className="col-md-3">
          <img src={commIcon} alt=""/>
          <h5>E-Commerce</h5>
          <p>Shopify & WooCommerce Development, Payment Gateway Integration</p>
        </div>
        <div className="col-md-3">
          <img src={marketingIcon} alt=""/>
          <h5>Online Marketing</h5>
          <p>SEO, PPC, Social Campaign Management</p>
        </div>
      </div>
      </div>
    );
  }
}

export default HomePage;
