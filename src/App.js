import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Provider from "./components/Provider";
import Navigation from "./components/Navigation";
import ThemeButton from "./components/ThemeButton";
import { About, Contact, Home, Projects } from "./components/pages";

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
