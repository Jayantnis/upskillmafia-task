import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";

// Lazy load pages
const FormPage = lazy(() => import("./pages/Form"));
const About = lazy(() => import("./pages/About"));

export default function AppRouter() {
  return (
    <Router>
      <NavbarComponent />
      <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
