import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TransactionDetails from "../components/TransactionDetails";
import { Button } from "@/components/ui/button";

const CreatorPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow bg-gray-100 p-6 items-center justify-center flex">
          <Button> Hello main</Button>
        </main>
        <TransactionDetails />
      </div>
    </div>
  );
};

export default CreatorPage;
