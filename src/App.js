import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
// import Projects from './components/pages/Projects';
// import Projects from './components/pages/About';
// import Projects from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          {/* <Route path='/Projects' exact element={<Projects/>}></Route>
          <Route path='/About' exact element={<About/>}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
