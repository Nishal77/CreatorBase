// src/routes/SignUp.jsx
import React from "react";
import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </div>
);

export default SignUpPage;
