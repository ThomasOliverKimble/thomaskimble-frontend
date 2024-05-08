import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UIProvider } from "./contexts/UIContext";
import { Sidebar, Hamburger, Backdrop, Header } from "./components/navigation";
import { Home, Projects, About, Contact } from "./components/pages";

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
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </UIProvider>
  );
}

export default App;
