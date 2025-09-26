import React from "react";    
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home";
import TechSpecs from "./Pages/TechSpecs";
import Compare from "./Pages/Compare";

function App() {
  return (
    <div>
      <BrowserRouter>  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/tech-specs" element={<TechSpecs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
