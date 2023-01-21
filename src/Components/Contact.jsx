import React from "react";
import logo from '../images/logo.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import headshot from '../images/headshot.png';
import { Link } from "react-router-dom";

const Contact = () => {
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
      <div className = "contactBox">
        <img className = "headshot" src = {headshot} alt = "Headshot"></img>
        <div>
          <h1>Zhi-Hahn See</h1>
          <p>Hello! My name is Zhi-Hahn See and I'm a freshman studying Computer Engineering at UC Davis. 
          One of my many goals is to become more comfortable creating larger scale projects, like this one!
          Right now I'm learning the ins and outs of React.js and hope to implement MongoDB and other technologies 
          into this project! I hope you enjoy using this package tracker and feel free to contact me through the hyperlinks 
          in the top right corner!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
