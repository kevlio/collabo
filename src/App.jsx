import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Petter from "./pages/Petter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/petter" element={<Petter />} />
      </Routes>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>JOCKE IN DA HOUSE!!</p>
        <nav>
        <h1><Link to="/petter">Men jarå!</Link> </h1>
      </nav>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
