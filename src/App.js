import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ColorProvider } from "./contexts/ColorContext";
import { UIProvider } from "./contexts/UIContext";
import { Backdrop, Hamburger, Header, Logo, Sidebar } from "./components/navigation";
import { About, Contact, Home, Projects } from "./components/pages";
import ThemeChange from "./components/ThemeChange";

function App() {
  return (
    <ColorProvider>
      <UIProvider>
        <ThemeChange />
        <Router>
          <Sidebar />
          <Hamburger />
          <Backdrop />
          <Header />
          <Logo />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </UIProvider>
    </ColorProvider>
  );
}

export default App;
