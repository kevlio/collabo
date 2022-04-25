import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Maria from "./pages/Maria";
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maria" element={<Maria />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
