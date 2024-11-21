import React from "react";
import { SignInButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSignedIn) {
      navigate("/creator");
    }
  }, [isSignedIn, navigate]);

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-lg font-bold">Landing Page</h1>
        <div>
          <SignInButton>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
              Login
            </button>
          </SignInButton>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-2xl font-bold">Welcome to the Landing Page</h2>
        <p className="mt-4">Please log in to access the creator dashboard.</p>
      </main>
    </div>
  );
}