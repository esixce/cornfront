import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 

import Nav from './components/Nav';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  const basename = process.env.NODE_ENV === 'development' ? '' : '/cuyutlan';
  return (
    <Router basename={basename}>
      <div className="App">
        <div className="tabs">
          <Nav />
        </div>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="" element={<Home />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
