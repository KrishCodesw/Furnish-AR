import HomePage from "./components/HomePage";
import React from "react";
import TrendingCatalogue from "./components/TrendingCatalogue";
import BrowseCategories from "./components/BrowseCategories";
import Auth from "./components/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HomePage />
            <TrendingCatalogue />
            <BrowseCategories />
          </>
        } />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
