import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import CreatorPage from "./creator/pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/creator" element={<CreatorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
