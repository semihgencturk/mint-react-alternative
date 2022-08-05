import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Communities from "./pages/Communities";
import Teams from "./pages/Teams";
import Home from "./pages/Home";
import Events from "./pages/Events";
import ReachUs from "./pages/ReachUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Topluluklar" element={<Communities />} />
        <Route path="/Takimlar" element={<Teams />} />
        <Route path="/Etkinlikler" element={<Events />} />
        <Route path="/Iletisim" element={<ReachUs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
