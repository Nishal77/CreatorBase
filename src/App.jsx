import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import CreatorPage from "./creator/pages/Dashboard";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/creator"
          element={
            
              <CreatorPage />
            
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
