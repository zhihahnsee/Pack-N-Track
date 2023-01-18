import './App.css';
import logo from './images/logo.png';
import linkedin from './images/linkedin.png';
import github from './images/github.png';

function App() {
  return (
    <div className = "homepage">
      <nav>
        <a href = "./App.js" className = "logo"><img className = "logopng" src = {logo} alt = "logo"></img></a>
        <ul className = "links">
          <li><a href = "./App.js">Home</a></li>
          <li><a href = "./Packages.js">My Packages</a></li>
          <li><a href = "./About.js">About</a></li>
          <li><a href = "./Contact.js">Contact</a></li>
        </ul>
        <ul className = "social-links">
          <li><a href = "https://github.com/zhihahnsee"><img className = "github" src = {github} alt = "GitHub"></img></a></li>
          <li><a href = "https://www.linkedin.com/in/zhi-hahn-see/"><img className = "linkedin" src = {linkedin} alt = "LinkedIn"></img></a></li>
        </ul>
      </nav>
      <div className = "search-outer-rectangle"></div>
      <div className = "pre-search-text">
        <h1>Track your packages!</h1>
        <p>Quick and easy package tracking <br/> By Pack N Track</p>
      </div>
      <div className = "tracking-number-input">
        <input type = "text" name = "tracking-number" placeholder = "Input your tracking number..." />
        <button type = "button">Go!</button>
      </div>
    </div>
  );
}

export default App;
