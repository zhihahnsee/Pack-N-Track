import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Packages from "./Components/Packages";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/packages" element = {<Packages />} />
          <Route exact path = "/about" element = {<About />} />
          <Route exact path = "/contact" element = {<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
