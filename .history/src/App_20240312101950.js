import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Roster from './components/Roster';
import Force from './components/Force';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roster" element={<Roster />} />
        <Route path="/force" element={<Force />} />
      </Routes>
    </Router>
  );
}

};

export default App;