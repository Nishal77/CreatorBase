// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import CreatorPage from "./creator/pages/Dashboard";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/creator"
          element={
            <SignedIn>
              <CreatorPage />
            </SignedIn>
          }
        />
        <Route
          path="*"
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
