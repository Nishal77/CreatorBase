import * as React from "react";

export function TransactionCard({ date, time, number, amount, status }) {
  const statusColors = {
    paid: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div
      className="group relative h-24 rounded-xl p-4 shadow-sm"
      style={{
        backgroundImage: "url('/assets/Transaction1-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      
      <div className="flex h-full flex-col justify-between text-white">
        <div className="flex justify-between items-center">
          <p className="text-xs opacity-80">{date}</p>
          <p className="text-xs opacity-80">{time}</p>
        </div>
        <div>
          <p className="font-mono text-base">{number}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs">Amount</p>
          <p className="text-xs">{amount}</p>
          <span
            className={`text-xs font-semibold px-2 py-1 rounded ${statusColors[status]}`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}