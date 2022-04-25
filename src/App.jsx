import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";

import Maria from "./pages/Maria";
import Contact from './pages/Contact';
import Petter from "./pages/Petter";
import About from "./pages/About";


function App() {
  return (
    <div className="App">

     <h1><Link to="/petter">Men jarå!</Link> </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maria" element={<Maria />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/petter" element={<Petter />} />
           <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
