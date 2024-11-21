import React from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-lg font-bold">Creator Dashboard</h1>
      <div>
        {isSignedIn ? (
          <SignOutButton>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
              Logout
            </button>
          </SignOutButton>
        ) : (
          <SignInButton>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
              Login
            </button>
          </SignInButton>
        )}
      </div>
    </nav>
  );
}