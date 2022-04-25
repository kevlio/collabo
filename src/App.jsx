import logo from "./logo.svg";
import Maria from "./pages/Maria";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maria" element={<Maria />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
