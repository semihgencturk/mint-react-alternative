import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Communities from "./pages/Communities";

import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Communities" element={<Communities />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
