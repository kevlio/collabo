import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>{<Route path="/contact" element={<Contact />}></Route>}</Routes>
    </div>
  );
}

export default App;
