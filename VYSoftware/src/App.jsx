import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Clients from "./components/Clients.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CaseStudies from "./components/CaseStudies.jsx";
import Process from "./components/Process.jsx";
import TechStack from "./components/TechStack.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Resources from "./components/Resources.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="clients"><Clients /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="cases"><CaseStudies /></section>
        <section id="process"><Process /></section>
        <section id="stack"><TechStack /></section>
        <section id="how"><HowItWorks /></section>
        <section id="resources"><Resources /></section>
      </main>
      <Footer />
    </>
  );
}
