import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/projects' exact element={<Projects/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
