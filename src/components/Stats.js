import React from "react";

const Stats = ({ count }) => {
  return (
    <div className="mt-4 p-4 h-40 w-1/3 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">Total count: {count}</div>
    </div>
  );
};

export default Stats;
