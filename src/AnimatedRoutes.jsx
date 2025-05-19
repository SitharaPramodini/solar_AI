// src/AnimatedRoutes.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import VetraLandingPage from "./components/Landing.jsx";
import BuildHubInterface from "./components/NewChat.jsx";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<VetraLandingPage />} />
        <Route path="/chat" element={<BuildHubInterface />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
