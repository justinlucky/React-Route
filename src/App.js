import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './pages/Navigation'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Helps from './pages/Helps';
import Services from './pages/Services';


function App() {
  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
            <Route path='/helps' Component={Helps} />
            <Route path='/services' Component={Services} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
