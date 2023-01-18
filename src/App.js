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
    </div>
  );
}

export default App;
