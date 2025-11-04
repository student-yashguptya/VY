import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Contactpage from "./components/ContactForm.jsx";
import CaseStudyDetail from "./components/CaseStudyDetail.jsx";
import ServiceDetail from "./components/ServiceDetail.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/case-study/:id" element={<CaseStudyDetail />} />
      <Route path="/service/:id" element={<ServiceDetail />} />
    </Routes>
  );
}
