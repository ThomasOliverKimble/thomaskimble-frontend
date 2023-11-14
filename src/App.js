import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hamburger from './components/Hamburger';
import Header from './components/Header';
import Scrollbar from './components/Scrollbar';
import Backdrop from './components/Backdrop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
// import Projects from './components/pages/Projects';
// import Projects from './components/pages/About';
// import Projects from './components/pages/Contact';

function App() {
  const scroll_toggle_elements = [
    "navbar-logo",
    "header-background",
    "header-border",
    "header-text"
  ]

  const scrollToggle = () => {
    if (window.scrollY > 0) {
      for (const id of scroll_toggle_elements) {
        document.getElementById(id).classList.add("scroll")
        document.getElementById(id).classList.remove("not-scroll")
      }
    } else {
      for (const id of scroll_toggle_elements) {
        document.getElementById(id).classList.remove("scroll")
        document.getElementById(id).classList.add("not-scroll")
      }
    }

    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    document.getElementById("scrollbar").style.transform = "translateY(" + percent + "%)";
  }

  const detect_mobile = () => {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

  window.addEventListener('scroll', scrollToggle);

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Hamburger></Hamburger>
        <Backdrop></Backdrop>
        <Header></Header>
        <Scrollbar isMobile={detect_mobile()}></Scrollbar>
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
