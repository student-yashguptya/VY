import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Contactpage from "./components/ContactForm.jsx"; // you named it ContactForm.jsx

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contactpage />} />
    </Routes>
  );
}
