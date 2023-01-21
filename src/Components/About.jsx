import React from "react";
import logo from '../images/logo.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="homepage">
      <nav>
        <Link to="/about" className="logo">
          <img className="logopng" src={logo} alt="logo"></img>
        </Link>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/packages">My Packages</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <a href="https://github.com/zhihahnsee">
              <img className="github" src={github} alt="GitHub"></img>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/zhi-hahn-see/">
              <img className="linkedin" src={linkedin} alt="LinkedIn"></img>
            </a>
          </li>
        </ul>
      </nav>
      <div className = "aboutBox">
        <h1>About Pack N Track</h1>
        <p className = "aboutText">Pack N Track is a service dedicated to making sure consumers have easy access to locating their packages. Through the use of APIs and our database with MongoDB, users are able 
          to easily locate their packages and are notified of any updates on their shipments. Our goal is to make tracking packages easy, organized, and hands-free. 
          Some of the many carriers that we provide tracking for are UPS, USPS, FedEx, and DHL. We thank you for using our service and hope you come back soon!
        </p>
        <p className = "feedback">
          If you have any feedback on how we can improve, complete this survey!
        </p>
      </div>
    </div>
  );
};

export default About;
