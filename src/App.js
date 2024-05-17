import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, UIProvider } from "./contexts";
import Navigation from "./components/Navigation";
import { About, Contact, Home, Projects } from "./components/pages";
import ThemeButton from "./components/ThemeButton";

function App() {
  return (
    <ThemeProvider>
      <UIProvider>
        <ThemeButton />
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </UIProvider>
    </ThemeProvider>
  );
}

export default App;
