import logo from "./logo.svg";
import Maria from "./pages/Maria";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maria" element={<Maria />} />
      </Routes>
    </div>
  );
}

export default App;
