import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UIProvider } from './contexts/UIContext';
import Sidebar from './components/Sidebar';
import Hamburger from './components/Hamburger';
import Backdrop from './components/Backdrop';
import Header from './components/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <UIProvider>
      <Router>
        <Sidebar />
        <Hamburger />
        <Backdrop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </UIProvider>
  );
}

export default App;
